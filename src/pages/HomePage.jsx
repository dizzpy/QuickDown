import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import MarkdownEditor from '../components/MarkdownEditor';
import html2pdf from 'html2pdf.js';

function HomePage() {
  const [markdown, setMarkdown] = useState('');
  const previewRef = useRef(null);

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const previewElement = previewRef.current;

    const opt = {
      margin: [10, 10, 10, 10], // margins on all sides
      filename: 'markdown-preview.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },  // Adjust scale for quality
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Use html2pdf to generate the PDF
    html2pdf().from(previewElement).set(opt).save();
  };

  return (
    <main className='bg-gray-800 min-h-screen'>
      <div className="container mx-auto">
        <Navbar onDownload={handleDownloadPDF} />
        <MarkdownEditor
          markdown={markdown}
          onMarkdownChange={setMarkdown}
          ref={previewRef} // Pass ref to MarkdownEditor
        />
      </div>
    </main>
  );
}

export default HomePage;
