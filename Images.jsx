import React, { useState, useEffect } from "react";

function IMG() {
  const [image, setImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);

  useEffect=() => {
    const img = new Image();
    <img src={`${process.env.PUBLIC_URL}/img1.png`} />
    };
    img.onload = () =>
      {
      const width = 300; // desired width
      const height = 200; // desired height
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const dataURI = canvas.toDataURL();
      setResizedImage(dataURI);
    };
  

  return <div>{resizedImage && <img src={resizedImage} />}</div>;
}

export default IMG;