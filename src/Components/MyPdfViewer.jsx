import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configura pdfjs para usar el worker correcto
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyPdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const [pdfWidth, setPdfWidth] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const fetchPdfDimensions = async () => {
      try {
        const pdf = await fetch(file);
        const pdfBlob = await pdf.blob();
        const url = URL.createObjectURL(pdfBlob);
        const pdfDocument = await pdfjs.getDocument(url).promise;
        const pdfPage = await pdfDocument.getPage(1); // Cargamos solo la primera página para obtener sus dimensiones
        const viewport = pdfPage.getViewport({ scale: 1 });
        setPdfWidth(viewport.width); // Establecemos el ancho del PDF
      } catch (error) {
        console.error('Error fetching PDF dimensions:', error);
        setError(error);
      }
    };

    fetchPdfDimensions();
  }, [file]);

  try {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {pdfWidth !== 0 && (
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={pdfWidth}
                />
              )
            )}
          </Document>
        )}
      </div>
    );
  } catch (err) {
    setError(err);
    console.error('Error loading PDF:', err);
    return <div>Error loading PDF: {err.message}</div>;
  }
};

export default MyPdfViewer;
