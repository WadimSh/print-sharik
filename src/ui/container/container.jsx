import { useMemo } from 'react';

const Container = ({ className, tag, container, item, children, xs, sm, md, lg, xl, ...rest }) => {
  const Tag = tag || 'div';

  const sizes = useMemo(() => {
    const defaultSize = 12;
    return {
      xs: xs || defaultSize,
      sm: sm || xs || defaultSize,
      md: md || sm || xs || defaultSize,
      lg: lg || md || sm || xs || defaultSize,
      xl: xl || lg || md || sm || xs || defaultSize,
    };
  }, [xs, sm, md, lg, xl]);

  const combinedStyle = useMemo(() => {
    return {
      ...(item
        ? {
            '--xs': sizes.xs,
            '--sm': sizes.sm,
            '--md': sizes.md,
            '--lg': sizes.lg,
            '--xl': sizes.xl,
          }
        : {}),
    };
  }, [item, sizes]);

  return (
    <Tag 
      className={container ? 'grid-container' : item ? 'item-container' : className}
      style={combinedStyle} 
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Container;