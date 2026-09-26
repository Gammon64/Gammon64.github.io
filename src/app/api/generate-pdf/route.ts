import { chromium } from "playwright";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const lang = request.nextUrl.searchParams.get("lang");
  if (lang !== "pt" && lang !== "en") {
    return NextResponse.json({ error: "Invalid language" }, { status: 400 });
  }

  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(`${request.nextUrl.origin}/${lang}`, {
      waitUntil: "networkidle",
    });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    const pdfBlob = new Blob([new Uint8Array(pdfBuffer)], {
      type: "application/pdf",
    });

    return new NextResponse(pdfBlob, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="document.pdf"',
      },
    });
  } catch (error: unknown) {
    // Safely type-check the caught error
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
