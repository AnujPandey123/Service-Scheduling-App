import React, { useState } from 'react';

function PictureUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Here you can implement the logic to upload the image to the server
      console.log('Selected File:', selectedFile);
      // Reset state after successful upload
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  return (
    <div>
      <h2>Picture Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileInputChange} />
        {previewUrl && <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
        <button type="submit" disabled={!selectedFile}>Upload</button>
      </form>
    </div>
  );
}

export default PictureUpload;
