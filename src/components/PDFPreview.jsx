import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PDFDownloadLink, PDFViewer, usePDF } from '@react-pdf/renderer';
import { Document, Page, pdfjs } from 'react-pdf';
import PDFDocument from './Resume/PDFDocument';
import { FaDownload, FaEye, FaSpinner } from 'react-icons/fa';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFPreview = () => {
  const resumeData = useSelector(state => state.resume);
  const [showPreview, setShowPreview] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [instance, updateInstance] = usePDF({ 
    document: <PDFDocument resumeData={resumeData} /> 
  });

  useEffect(() => {
    updateInstance();
  }, [resumeData, updateInstance]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const openPreviewWindow = () => {
    if (instance.url) {
      const previewWindow = window.open(
        '',
        'PDF Preview',
        'width=800,height=900,scrollbars=yes,resizable=yes'
      );
      
      previewWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Resume Preview</title>
            <style>
              body { margin: 0; padding: 20px; background: #f5f5f5; }
              iframe { width: 100%; height: calc(100vh - 40px); border: none; }
            </style>
          </head>
          <body>
            <iframe src="${instance.url}" type="application/pdf"></iframe>
          </body>
        </html>
      `);
    }
  };

  return (
    <div className="w-full md:max-w-[24rem] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* PDF Preview Area */}
      <div className="bg-gray-50 p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">PDF Preview</h3>
        
        {instance.loading ? (
          <div className="flex items-center justify-center h-64 bg-white rounded border-2 border-dashed border-gray-300">
            <div className="text-center">
              <FaSpinner className="animate-spin text-3xl text-gray-400 mb-2 mx-auto" />
              <p className="text-gray-500">Generating PDF...</p>
            </div>
          </div>
        ) : instance.url ? (
          <div className="bg-white rounded border">
            <Document
              file={instance.url}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center h-64">
                  <FaSpinner className="animate-spin text-2xl text-gray-400" />
                </div>
              }
            >
              <Page 
                pageNumber={pageNumber} 
                width={320}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
            
            {numPages > 1 && (
              <div className="flex items-center justify-between p-2 bg-gray-50 border-t">
                <button
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber <= 1}
                  className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-600">
                  Page {pageNumber} of {numPages}
                </span>
                <button
                  onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                  disabled={pageNumber >= numPages}
                  className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 bg-white rounded border-2 border-dashed border-gray-300">
            <p className="text-gray-500">PDF preview will appear here</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-4 bg-white">
        <div className="flex gap-3">
          <button
            onClick={openPreviewWindow}
            disabled={instance.loading || !instance.url}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaEye />
            <span>Preview</span>
          </button>

          {instance.url && (
            <PDFDownloadLink
              document={<PDFDocument resumeData={resumeData} />}
              fileName={`${resumeData.contact?.name || 'resume'}.pdf`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {({ loading }) => (
                <>
                  {loading ? <FaSpinner className="animate-spin" /> : <FaDownload />}
                  <span>{loading ? 'Preparing...' : 'Download'}</span>
                </>
              )}
            </PDFDownloadLink>
          )}
        </div>

        {/* Full Screen PDF Viewer Toggle */}
        <div className="mt-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            {showPreview ? 'Hide' : 'Show'} Full PDF Viewer
          </button>
        </div>
      </div>

      {/* Full Screen PDF Viewer */}
      {showPreview && instance.url && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Resume Preview</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
            <div className="flex-1 p-4">
              <PDFViewer width="100%" height="100%">
                <PDFDocument resumeData={resumeData} />
              </PDFViewer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFPreview;