import { createReadStream } from "node:fs";
import { stat, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { chromium } from "playwright";

const outputDirectory = resolve("out");
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

const server = createServer(async (request, response) => {
  const pathname = decodeURIComponent(
    new URL(request.url ?? "/", "http://localhost").pathname,
  );
  const exportPath =
    pathname === "/"
      ? "index.html"
      : ["/pt", "/en"].includes(pathname)
        ? `${pathname.slice(1)}.html`
        : pathname.slice(1);
  const filePath = resolve(outputDirectory, exportPath);

  if (!filePath.startsWith(`${outputDirectory}${sep}`)) {
    response.writeHead(403).end();
    return;
  }

  try {
    const fileStats = await stat(filePath);
    if (!fileStats.isFile()) {
      response.writeHead(404).end();
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404).end();
  }
});

await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));

let browser;
try {
  browser = await chromium.launch();
  const address = server.address();
  const origin = `http://127.0.0.1:${address.port}`;

  for (const lang of ["pt", "en"]) {
    const page = await browser.newPage();
    await page.goto(`${origin}/${lang}`, { waitUntil: "networkidle" });
    const pdf = await page.pdf({ format: "A4", printBackground: true });
    await writeFile(resolve(outputDirectory, `curriculo_${lang}.pdf`), pdf);
    await page.close();
  }
} finally {
  await browser?.close();
  await new Promise((resolveClose, rejectClose) =>
    server.close((error) => (error ? rejectClose(error) : resolveClose())),
  );
}