import React, { useState, useRef } from 'react';
import "./AddPhotos.css"
const ImageUploader = ({handleImage}) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className='photo' onClick={handleDivClick}>
        {image ? (
          <img src={image} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' ,marginTop: '14px'}} />
        ) : (
          <p>+Add Photos</p>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUploader;
