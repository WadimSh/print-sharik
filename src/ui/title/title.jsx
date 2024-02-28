import React from 'react';

const Title = ({ level, children, className, ...rest }) => {
  const validLevel = Math.min(level || 1, 6);
  const Tag = `h${validLevel}`;
  
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};

export default Title;