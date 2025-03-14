import React, { useState, useEffect, useRef } from 'react';

const DraggableElement = ({ id, children, position, onDrag, containerWidth, containerHeight, onSelect, isSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  const handleMouseDown = (e) => {
    if (!elementRef.current) return;

    // Получаем текущие координаты элемента
    const rect = elementRef.current.getBoundingClientRect();

    // Рассчитываем смещение курсора относительно левого верхнего угла элемента
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    setIsDragging(true);
    onSelect(); // Вызываем обработчик выбора элемента
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !elementRef.current) return;

    // Получаем координаты родительского контейнера
    const parentRect = elementRef.current.parentNode.getBoundingClientRect();

    // Рассчитываем новые координаты элемента
    const newX = e.clientX - parentRect.left - offset.x;
    const newY = e.clientY - parentRect.top - offset.y;

    // Ограничиваем перемещение границами контейнера
    const maxX = containerWidth - elementRef.current.offsetWidth;
    const maxY = containerHeight - elementRef.current.offsetHeight;

    onDrag({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={elementRef}
      data-id={id} // Добавляем data-id
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default DraggableElement;