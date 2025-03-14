import React, { useState, useRef } from "react";
import "../../assets/styles/RemoveBackground.css"; // Стили для компонента

export default function RemoveBackground() {
  const [image, setImage] = useState(null); // Состояние для загруженного изображения
  const [bgRemove, setBgRemove] = useState(null); // Состояние для изображения без фона
  const [loading, setLoading] = useState(false); // Состояние для отображения загрузки

  const handleRemoveBackground = async () => {
    if (!image) {
      alert("Пожалуйста, выберите изображение.");
      return;
    }

    const apiKey = "sandbox_af55631ea8a0f5940a731331c4842546506f94a3"; // Ваш API-ключ
    const apiUrl = "https://sdk.photoroom.com/v1/segment"; // URL API

    const formData = new FormData();
    formData.append("image_file", image); // Добавляем файл изображения
    formData.append("size", "auto"); // Параметр size

    setLoading(true); // Включаем состояние загрузки

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Accept": "image/png, application/json", // Заголовок Accept
          "X-Api-Key": apiKey, // API-ключ
        },
        body: formData, // Передаем FormData
      });

      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status} ${res.statusText}`);
      }

      const data = await res.blob(); // Получаем ответ как Blob
      const imageUrl = URL.createObjectURL(data); // Создаем URL для отображения
      setBgRemove(imageUrl); // Устанавливаем URL изображения без фона
    } catch (error) {
      console.error("Ошибка при удалении фона:", error);
      alert("Произошла ошибка при удалении фона. Пожалуйста, попробуйте снова.");
    } finally {
      setLoading(false); // Выключаем состояние загрузки
    }
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: "2rem" }}>Удаление фона</h1>
      <div className="input-file" style={{ marginBottom: "2rem" }}>
        <label htmlFor="userImg" className="info_text">
          Выберите файл
        </label>
        <input
          type="file"
          id="userImg"
          className="form-control-file"
          onChange={(e) => setImage(e.target.files[0])} // Сохраняем выбранный файл
          required
        />
      </div>
      <div className="d-flex" style={{ marginBottom: "2rem" }}>
        {image && (
          <div className="image-preview" style={{ marginBottom: "1rem" }}>
            <h3>Оригинальное изображение</h3>
            <img src={URL.createObjectURL(image)} alt="Оригинальное изображение" />
          </div>
        )}
        {bgRemove && (
          <div className="image-preview">
            <h3>Изображение без фона</h3>
            <img src={bgRemove} alt="Изображение без фона" />
          </div>
        )}
      </div>
      {bgRemove && (
        <div className="mb-4">
          <a href={bgRemove} download="background_removed_image.png">
            <button className="btn btn-success">Скачать</button>
          </a>
        </div>
      )}
      <div>
        <button
          type="button"
          onClick={handleRemoveBackground}
          className="btn btn-primary"
          disabled={loading} // Отключаем кнопку во время загрузки
        >
          {loading ? "Идет обработка..." : "Удалить фон"}
        </button>
      </div>
    </div>
  );
}