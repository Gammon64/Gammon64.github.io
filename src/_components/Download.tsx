"use client"

import { useState } from 'react';
import { FaDownload, FaSpinner } from 'react-icons/fa6';

const Download = ({ lang }: { lang: 'pt' | 'en' }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handlePrint = async () => {
        if (isLoading) return; // Evita requisições duplicadas

        setIsLoading(true);
        try {
            const response = await fetch(`/api/generate-pdf?lang=${lang}`);

            if (!response.ok) {
                throw new Error('Falha na geração do documento');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `curriculo_${lang}.pdf`;
            document.body.appendChild(link);
            link.click();
            link.remove();

            // Libera a memória do navegador após o download
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Erro ao baixar o PDF:', error);
            alert(lang === 'pt'
                ? 'Ocorreu um erro ao gerar o PDF. Tente novamente.'
                : 'An error occurred while generating the PDF. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            className="download-button"
            aria-label={lang === 'pt' ? 'Baixar PDF' : 'Download to PDF'}
            onClick={handlePrint}
            disabled={isLoading}
            style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
        >
            {/* Troca o ícone e adiciona uma animação de giro se estiver carregando */}
            {isLoading ? (
                <FaSpinner className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
            ) : (
                <FaDownload />
            )}
        </button>
    )
}

export default Download