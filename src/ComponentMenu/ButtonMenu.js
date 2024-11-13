import React from "react";
import "./ButtonMenu.css";

  

function DownloadButton(name) {
  // رابط الصورة التي تريد تنزيلها
  const imageUrl = '../imgs/Rectangle 42.png';

  const downloadImage = () => {
    // إنشاء رابط جديد لتنزيل الصورة
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'downloaded-image.jpg'; // اسم الملف بعد التنزيل
    document.body.appendChild(link);
  
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="butt-menu">
        <button onClick={downloadImage}>click here to download menu</button>
    </div>
  
  );
}

export default DownloadButton;
  