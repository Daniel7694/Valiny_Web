import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyPdfViewer = ({ file, setShowPdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfWidth, setPdfWidth] = useState(0);
  const [scale, setScale] = useState(2.0); // Ajusta este valor al tamaño deseado
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
        const pdfPage = await pdfDocument.getPage(1);
        const viewport = pdfPage.getViewport({ scale: 1 });
        setPdfWidth(viewport.width);
      } catch (error) {
        console.error('Error fetching PDF dimensions:', error);
      }
    };

    fetchPdfDimensions();
  }, [file]);

  const zoomIn = () => {
    setScale(scale + 0.1);
  };

  const zoomOut = () => {
    if (scale > 0.1) {
      setScale(scale - 0.1);
    }
  };

  const nextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const backToMenu = () => {
    setShowPdf(false);
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {pdfWidth !== 0 && (
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', marginTop: '20px' }}>
                <button style={{ padding: '10px', backgroundColor: '#3B82F6', color: 'white', border: 'none', borderRadius: '5px' }} onClick={backToMenu}>Volver al menú</button>
        <button style={{ padding: '10px', backgroundColor: '#3B82F6', color: 'white', border: 'none', borderRadius: '5px' }} onClick={prevPage}>Página anterior</button>
        <button style={{ padding: '10px', backgroundColor: '#3B82F6', color: 'white', border: 'none', borderRadius: '5px' }} onClick={nextPage}>Página siguiente</button>
        
      </div>
          <Page
            pageNumber={currentPage}
            width={pdfWidth * scale} // El ancho del PDF se multiplica por la escala
          />
        </Document>
      )}
    </div>
  );
  
  
  
};

export default MyPdfViewer;
