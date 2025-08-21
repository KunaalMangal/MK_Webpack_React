import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
  footer?: React.ReactNode;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  size?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  image,
  footer,
  variant = 'default',
  size = 'md',
  hoverable = false,
  clickable = false,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const baseClasses = 'card';
  const variantClass = variant !== 'default' ? `border-${variant}` : '';
  const sizeClass = size !== 'md' ? `card-${size}` : '';
  const hoverClass = hoverable ? 'card-hoverable' : '';
  const clickableClass = clickable ? 'card-clickable' : '';

  const cardClasses = [
    baseClasses,
    variantClass,
    sizeClass,
    hoverClass,
    clickableClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (clickable && (e.key === 'Enter' || e.key === ' ') && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className={cardClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          className='card-img-top'
          loading='lazy'
        />
      )}

      {(title || subtitle) && (
        <header className='card-header'>
          {title && <h3 className='card-title h5 mb-0'>{title}</h3>}
          {subtitle && (
            <p className='card-subtitle text-muted mb-0'>{subtitle}</p>
          )}
        </header>
      )}

      <div className='card-body'>{children}</div>

      {footer && <footer className='card-footer'>{footer}</footer>}
    </article>
  );
};

export default Card;
