import React, { forwardRef } from 'react';
import DraggableElement from './DraggableElement';

const CaptureContainer = forwardRef(({ config, elements, onElementDrag }, ref) => {
  const getProportionalSize = (imgWidth, imgHeight, maxWidth, maxHeight) => {
    // Добавляем отступ (10% от размеров контейнера)
    const padding = 0.1; // 10% отступ
    const paddedMaxWidth = maxWidth * (1 - padding);
    const paddedMaxHeight = maxHeight * (1 - padding);
  
    // Если изображение меньше контейнера (с учетом отступов), возвращаем оригинальные размеры
    if (imgWidth <= paddedMaxWidth && imgHeight <= paddedMaxHeight) {
      return {
        width: imgWidth,
        height: imgHeight
      };
    }
  
    // Соотношение сторон изображения
    const imgRatio = imgWidth / imgHeight;
  
    // Соотношение сторон контейнера (с учетом отступа)
    const containerRatio = paddedMaxWidth / paddedMaxHeight;
  
    let newWidth, newHeight;
  
    if (imgRatio > containerRatio) {
      // Если изображение "шире" контейнера, ограничиваем по ширине
      newWidth = paddedMaxWidth;
      newHeight = paddedMaxWidth / imgRatio;
    } else {
      // Если изображение "выше" контейнера, ограничиваем по высоте
      newHeight = paddedMaxHeight;
      newWidth = paddedMaxHeight * imgRatio;
    }
  
    console.log(imgWidth, imgHeight, newWidth, newHeight);
    return {
      width: newWidth,
      height: newHeight
    };
  };

  return (
    <div 
      ref={ref}
      style={{
        position: 'relative',
        width: `${config.width}px`,
        height: `${config.height}px`,
        background: config.background,
        ...config.customStyles
      }}
    >
      {elements.map((element) => (
        <DraggableElement
          key={element.id}
          position={element.position}
          onDrag={(newPosition) => onElementDrag(element.id, newPosition)}
          containerWidth={config.width}
          containerHeight={config.height}
        >
          {element.type === 'text' && (
            <div style={{ 
              color: element.color,
              fontSize: element.size,
              fontFamily: 'Arial',
              padding: '5px',
              backgroundColor: element.background
            }}>
              {element.content}
            </div>
          )}
          
          {element.type === 'image' && (
            <img
              src={element.src}
              alt="Draggable"
              style={{
                ...getProportionalSize(
                  element.width, // Оригинальная ширина изображения
                  element.height, // Оригинальная высота изображения
                  config.width, // Максимальная ширина контейнера
                  config.height // Максимальная высота контейнера
                ),
                pointerEvents: 'none' 
              }}
            />
          )}
        </DraggableElement>
      ))}
    </div>
  );
});

export default CaptureContainer;
