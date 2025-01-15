import React, { useState } from 'react';
import './SellerVerification.css';

const SellerVerification = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    aadhar: '',
    pan: '',
    gstin: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    alert("Registration Completed Successfully !");
    try {
      const response = await fetch('http://localhost:5000/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="verification-container">
      <h1>Seller Verification</h1>
      {step === 1 && (
        <div className="step">
          <h2>Mobile Verification</h2>
          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="input-field"
          />
          <button className="button" onClick={handleNext}>Verify Mobile</button>
        </div>
      )}

      {step === 2 && (
        <div className="step">
          <h2>Email Verification</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          <button className="button" onClick={handleNext}>Verify Email</button>
        </div>
      )}

      {step === 3 && (
        <div className="step">
          <h2>Aadhar & PAN Verification</h2>
          <input
            type="text"
            name="aadhar"
            placeholder="Enter Aadhar Number"
            value={formData.aadhar}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="pan"
            placeholder="Enter PAN Number"
            value={formData.pan}
            onChange={handleChange}
            className="input-field"
          />
          <button className="button" onClick={handleNext}>Verify Aadhar & PAN</button>
        </div>
      )}

      {step === 4 && (
        <div className="step">
          <h2>GSTIN Verification</h2>
          <input
            type="text"
            name="gstin"
            placeholder="Enter GSTIN Number"
            value={formData.gstin}
            onChange={handleChange}
            className="input-field"
          />
          <button className="button" onClick={handleSubmit}>Submit</button>
		
        </div>
      )}
    </div>
  );
};

export default SellerVerification;