import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './DigitalSignature.css';
function DigitalSignature() {
  const signatureRef = useRef(null);

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  const saveSignature = () => {
    const dataUrl = signatureRef.current.toDataURL();
    // Here you can implement the logic to save the signature data (dataUrl) to the server
    console.log('Signature saved:', dataUrl);
  };

  return (
    <div >
      <h2 id='ahc' >Digital Signature :</h2>
      <div class='ab'>
      
      <SignatureCanvas ref={signatureRef} penColor='black' canvasProps={{ width: 800, height: 500 }}backgroundColor='rgb(254, 254, 254)' />
      <br></br>
      <br></br>
      <div>
        <button onClick={clearSignature}>Clear</button>
        <button class='btn-s' onClick={saveSignature}>Save</button>
      </div>
      </div>
    </div>
  );
}

export default DigitalSignature;
