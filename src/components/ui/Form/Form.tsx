import React from 'react';

export interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  action?: string;
  encType?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain';
  noValidate?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  method = 'POST',
  action,
  encType = 'application/x-www-form-urlencoded',
  noValidate = false,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method={method}
      action={action}
      encType={encType}
      noValidate={noValidate}
      className={className}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
