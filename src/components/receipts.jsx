// components/Receipt.jsx
import { useRef } from "react";
import { generatePdf } from "../components/generatorPDF";

const Receipt = () => {
  const receiptRef = useRef(null);

  const handleDownload = async () => {
    if (receiptRef.current) {
      await generatePdf(receiptRef.current);
    }
  };

  return (
    <div>
      <div
        ref={receiptRef}
        style={{ padding: "20px", border: "1px solid black" }}
      >
        <h1>Receipt</h1>
        <p>Date: 2024-07-27</p>
        <p>Item: Example Item</p>
        <p>Price: $10.00</p>
        {/* Add more receipt details here */}
      </div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default Receipt;
