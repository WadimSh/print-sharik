import React from 'react';

const Container = ({ className, tag, children }) => {
  const Tag = tag || 'div';

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}

export default Container;