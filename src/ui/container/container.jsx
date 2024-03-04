import React from 'react';

const Container = ({ className, tag, children, ...rest }) => {
  const Tag = tag || 'div';

  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;