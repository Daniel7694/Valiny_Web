// MyPdfViewer.jsx
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configura pdfjs para usar el worker correcto
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyPdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
try {
  return (
    <div className="pdf-viewer">
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
            />
          )
        )}
      </Document>
    </div>
  );
} catch (err) {
  setError(err);
  console.error('Error loading PDF:', err);
  return <div>Error loading PDF: {err.message}</div>;
}
};

export default MyPdfViewer;
