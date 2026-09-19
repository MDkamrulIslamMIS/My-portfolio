export function openOrDownloadCV() {
  // Download the exact official CV provided by Md. Kamrul Islam
  const pdfUrl = '/Md_Kamrul_Islam_CV.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Md_Kamrul_Islam_CV.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadCVFile() {
  const link = document.createElement('a');
  link.href = '/Md_Kamrul_Islam_CV.pdf';
  link.download = 'Md_Kamrul_Islam_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
