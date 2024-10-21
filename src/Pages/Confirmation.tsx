
import jsPDF from 'jspdf';
import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const { formData, confirmationNumber } = location.state;

  const handlePrint = () => {
    window.print();
  };

  const handleSavePDF = () => {
    const doc = new jsPDF();

    doc.text("Booking Confirmation", 10, 10);
    doc.text(`Confirmation Number: ${confirmationNumber}`, 10, 20);
    doc.text(`Name: ${formData.name}`, 10, 30);
    doc.text(`Email: ${formData.email}`, 10, 40);
    doc.text(`Phone: ${formData.phone}`, 10, 50);
    doc.text(`Payment Method: ${formData.paymentMethod}`, 10, 60);
    doc.text(`Special Requests: ${formData.specialRequests}`, 10, 70);
  
    doc.text("Booking Details", 10, 90);
    doc.text("Hotel Address: [Hotel Address]", 10, 100);
    doc.text("Room Details: [Room Details]", 10, 110);
    doc.text("Dates: [Check-In to Check-Out Dates]", 10, 120);
    doc.text("Total Price: $[Total Price]", 10, 130);
  
    doc.save('booking-confirmation.pdf');  };

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmation</h2>
      <p>Confirmation Number: {confirmationNumber}</p>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
      <p><strong>Special Requests:</strong> {formData.specialRequests}</p>

      <h3>Booking Details</h3>
      <p><strong>Hotel Address:</strong> [Hotel Address]</p>
      <p><strong>Room Details:</strong> [Room Details]</p>
      <p><strong>Dates:</strong> [Check-In to Check-Out Dates]</p>
      <p><strong>Total Price:</strong> $[Total Price]</p>

      <div className="confirmation-actions">
        <button onClick={handlePrint}>Print Confirmation</button>
        <button onClick={handleSavePDF}>Save as PDF</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;