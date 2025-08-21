import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const baseClasses = 'badge';
  const variantClass = `bg-${variant}`;
  const sizeClass = size !== 'md' ? `badge-${size}` : '';
  const pillClass = pill ? 'rounded-pill' : '';

  const badgeClasses = [
    baseClasses,
    variantClass,
    sizeClass,
    pillClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={badgeClasses}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
