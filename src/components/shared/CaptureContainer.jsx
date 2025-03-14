import React, { forwardRef, useState, useEffect, useRef } from 'react';
import DraggableElement from './DraggableElement';

const CaptureContainer = forwardRef(({ config, elements, onElementDrag }, ref) => {
  const [connections, setConnections] = useState([]); // Состояние для связей
  const containerRef = useRef(null); // Ссылка на контейнер
  const [selectedElements, setSelectedElements] = useState([]); // Выбранные элементы для связи

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
  
    return {
      width: newWidth,
      height: newHeight
    };
  };

  // Функция для отрисовки линии
  const renderConnection = (fromElement, toElement) => {
    if (!fromElement || !toElement) return null;

    const fromRect = fromElement.getBoundingClientRect();
    const toRect = toElement.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const from = {
      left: fromRect.left - containerRect.left,
      top: fromRect.top - containerRect.top,
      right: fromRect.right - containerRect.left,
      bottom: fromRect.bottom - containerRect.top,
      width: fromRect.width,
      height: fromRect.height
    };

    const to = {
      left: toRect.left - containerRect.left,
      top: toRect.top - containerRect.top,
      right: toRect.right - containerRect.left,
      bottom: toRect.bottom - containerRect.top,
      width: toRect.width,
      height: toRect.height
    };

    // Определяем направление связи
  const fromCenterX = from.left + from.width / 2;
  const fromCenterY = from.top + from.height / 2;
  const toCenterX = to.left + to.width / 2;
  const toCenterY = to.top + to.height / 2;

  // Вычисляем разницу положений
  const dx = toCenterX - fromCenterX;
  const dy = toCenterY - fromCenterY;
  const angle = Math.atan2(dy, dx);

  // Начальная точка на границе первого элемента
  const start = {
    x: fromCenterX + Math.cos(angle) * from.width / 2,
    y: fromCenterY + Math.sin(angle) * from.height / 2
  };

  // Конечная точка на границе второго элемента
  const end = {
    x: toCenterX - Math.cos(angle) * to.width / 2,
    y: toCenterY - Math.sin(angle) * to.height / 2
  };

    return (
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="#f5f5f5"
        strokeWidth="2"
      />
    );
  };

  // Эффект для перерисовки линий при изменении позиций блоков
  useEffect(() => {
    // Перерисовываем линии
    const updatedConnections = connections.map((connection) => {
      const fromElement = containerRef.current.querySelector(`[data-id="${connection.from}"]`);
      const toElement = containerRef.current.querySelector(`[data-id="${connection.to}"]`);
  
      if (fromElement && toElement) {
        const fromRect = fromElement.getBoundingClientRect();
        const toRect = toElement.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        // Координаты центров блоков относительно контейнера
        const fromX = fromRect.left - containerRect.left + fromRect.width;
        const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
        const toX = toRect.left - containerRect.left + toRect.width;
        const toY = toRect.top - containerRect.top + toRect.height / 2;
  
        return {
          ...connection,
          fromX,
          fromY,
          toX,
          toY,
        };
      }
  
      return connection;
    });
  
    setConnections(updatedConnections);
  }, [elements]);

  const addConnection = (fromId, toId) => {
    const isConnectionExists = connections.some(
      (conn) =>
        (conn.from === fromId && conn.to === toId) ||
        (conn.from === toId && conn.to === fromId)
    );

    if (!isConnectionExists) {
      setConnections((prev) => [
        ...prev,
        { id: `connection${prev.length + 1}`, from: fromId, to: toId },
      ]);
    }
  };

   // Функция для обработки выбора элемента
   const handleElementSelect = (elementId) => {
    setSelectedElements((prev) => {
      if (prev.length === 1 && prev[0] !== elementId) {
        // Если выбран второй элемент, создаем связь
        addConnection(prev[0], elementId);
        return []; // Сбрасываем выбор
      } else {
        return [elementId]; // Выбираем первый элемент
      }
    });
  };


  return (
    <div 
    ref={(node) => {
      containerRef.current = node;
      if (ref) ref.current = node;
    }}
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
          id={element.id}
          position={element.position}
          onDrag={(newPosition) => onElementDrag(element.id, newPosition)}
          containerWidth={config.width}
          containerHeight={config.height}
          onSelect={() => handleElementSelect(element.id)} // Обработка выбора элемента
          isSelected={selectedElements.includes(element.id)} // Передаем состояние выбора
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
      {/* Отрисовка линий */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none' // Чтобы линии не перехватывали события мыши
        }}
      >
        {connections.map((connection) => {
          const fromElement = containerRef.current.querySelector(`[data-id="${connection.from}"]`);
          const toElement = containerRef.current.querySelector(`[data-id="${connection.to}"]`);
          return renderConnection(fromElement, toElement);
        })}
      </svg>
    </div>
  );
});

export default CaptureContainer;