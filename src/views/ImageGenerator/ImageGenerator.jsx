import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import CaptureContainer from '../../components/shared/CaptureContainer';
import RemoveBackgrounds from '../../components/shared/RemoveBackground';

const ImageGenerator = () => {
  const captureRef = useRef(null);
  const [elements, setElements] = useState([
    {
      id: '1',
      type: 'text',
      content: 'Перетащи меня',
      color: '#ffffff',
      size: '24px',
      background: 'transparent',
      position: { x: 50, y: 50 },
      src: ''
    }
  ]);
  const currentDate = new Date();
  const [newElement, setNewElement] = useState({
    id: currentDate,
    type: 'text',
    content: 'Новый текст',
    color: '#000000',
    size: '16px',
    background: '#ffffff',
    src: ''
  });

  const handleElementDrag = (elementId, newPosition) => {
    setElements(prev => prev.map(el => 
      el.id === elementId ? { ...el, position: newPosition } : el
    ));
  };

  const addElement = () => {
    setElements(prev => [
      ...prev,
      {
        ...newElement,
        id: Date.now().toString(),
        position: { x: 20, y: 20 },
        width: newElement.type === 'image' ? newElement.width : undefined,
        height: newElement.type === 'image' ? newElement.height : undefined
      }
    ]);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          console.log("Original Width:", img.width);
          console.log("Original Height:", img.height);
          setNewElement(prev => ({
            ...prev,
            src: reader.result,
            width: img.width,
            height: img.height
          }));
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    try {
      const canvas = await html2canvas(captureRef.current, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      const link = document.createElement('a');
      link.download = 'design.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Ошибка генерации:', error);
      alert('Ошибка при генерации изображения!');
    }
  };
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ 
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <h2>Панель управления</h2>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <div>
            <label>Тип элемента: </label>
            <select 
              value={newElement.type}
              onChange={e => setNewElement({...newElement, type: e.target.value})}
            >
              <option value="text">Текст</option>
              <option value="image">Изображение</option>
            </select>
          </div>

          {newElement.type === 'text' && (
            <>
              <div>
                <label>Текст: </label>
                <input
                  type="text"
                  value={newElement.content}
                  onChange={e => setNewElement({...newElement, content: e.target.value})}
                />
              </div>
              <div>
                <label>Цвет текста: </label>
                <input
                  type="color"
                  value={newElement.color}
                  onChange={e => setNewElement({...newElement, color: e.target.value})}
                />
              </div>
              <div>
                <label>Фон текста: </label>
                <input
                  type="color"
                  value={newElement.background}
                  onChange={e => setNewElement({...newElement, background: e.target.value})}
                />
              </div>
              <div>
                <label>Размер шрифта: </label>
                <input
                  type="number"
                  value={parseInt(newElement.size)}
                  onChange={e => setNewElement({...newElement, size: `${e.target.value}px`})}
                />
              </div>
            </>
          )}

          {newElement.type === 'image' && (
            <>
              <div>
                <label>Выберите изображение: </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </>
          )}
        <button 
            onClick={addElement}
            style={{ 
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            Добавить элемент
          </button>
        </div>
      </div>

      <CaptureContainer
        ref={captureRef}
        config={{
          width: 800,
          height: 600,
          background: '#2d3748',
          customStyles: {
            borderRadius: '0px',
            margin: '0 auto'
          }
        }}
        elements={elements}
        onElementDrag={handleElementDrag}
      />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button 
          onClick={handleDownload}
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '12px 24px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Скачать дизайн
        </button>
      </div>
      <RemoveBackgrounds />
    </div>
  );
};

export default ImageGenerator;