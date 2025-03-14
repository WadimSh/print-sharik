import React, { useState, useRef } from "react";
import "../../assets/styles/RemoveBackground.css"; // Стили для компонента

export default function RemoveBackground() {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);

  const handleRemoveBackground = async () => {
      const apiKey = "njv7RHG7MqkW3iqVX9wgPLxm";
      const apiUrl = "https://api.remove.bg/v1.0/removebg";

      const formData = new FormData();
      formData.append("image_file", image, image.name);
      formData.append("size", 'auto');

      try {
          const res = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                  'X-Api-Key': apiKey
              },
              body: formData
          });

          const data = await res.blob();
          const imageUrl = URL.createObjectURL(data);
          setBgRemove(imageUrl);
      } catch (error) {
          console.log(error);
      }
  };

  return (
      <div className="container">
          <h1 style={{ marginBottom: '2rem' }}>Удаление фона</h1>
          <div className="input-file" style={{ marginBottom: '2rem' }}>
              <label htmlFor="userImg" className="info_text">
                  Выберите файл
              </label>
              <input
                  type="file"
                  id="userImg"
                  className="form-control-file"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
              />
          </div>
          <div className="d-flex" style={{ marginBottom: '2rem' }}>
              {image && (
                  <div className="image-preview" style={{ marginBottom: '1rem' }}>
                      <img src={image ? URL.createObjectURL(image) : ""}
                          alt="" />
                  </div>
              )}
              {bgRemove && (
                  <div className="image-preview">
                      <img src={bgRemove} alt="" />
                  </div>
              )}
          </div>
          {bgRemove && (
              <div className="mb-4">
                  <a href={bgRemove}
                      download="background_removed_image.png">
                      <button className="btn btn-success">
                          Скачать
                      </button>
                  </a>
              </div>
          )}
          <div>
              <button type="button"
                  onClick={handleRemoveBackground}
                  className="btn btn-primary">
                  Удалить фон
              </button>
          </div>
      </div>
  );
}