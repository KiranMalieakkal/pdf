// utils/pdfGenerator.js
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

export const generatePdf = async (content) => {
  const doc = new jsPDF();
  const canvas = await html2canvas(content);
  const imgData = canvas.toDataURL("image/png");

  doc.addImage(imgData, "PNG", 0, 0);
  doc.save("receipt.pdf");
};
