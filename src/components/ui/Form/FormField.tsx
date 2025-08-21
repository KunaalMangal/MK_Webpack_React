import React from 'react';

export interface FormFieldProps {
  label: string;
  id: string;
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'textarea'
    | 'select';
  value?: string | number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  options?: Array<{ value: string; label: string; disabled?: boolean }>;
  rows?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  autoComplete?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onBlur?: (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onFocus?: (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  className?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = 'text',
  value,
  placeholder,
  required = false,
  disabled = false,
  error,
  helpText,
  options = [],
  rows = 3,
  min,
  max,
  step,
  pattern,
  autoComplete,
  onChange,
  onBlur,
  onFocus,
  className = '',
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-required': ariaRequired,
  ...props
}) => {
  const isInvalid = !!error;
  const fieldId = id;
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;

  const describedBy = [ariaDescribedBy, helpText && helpId, error && errorId]
    .filter(Boolean)
    .join(' ');

  const renderField = () => {
    const commonProps = {
      id: fieldId,
      name: fieldId,
      value,
      placeholder,
      required,
      disabled,
      'aria-describedby': describedBy || undefined,
      'aria-invalid': ariaInvalid !== undefined ? ariaInvalid : isInvalid,
      'aria-required': ariaRequired !== undefined ? ariaRequired : required,
      onChange,
      onBlur,
      onFocus,
      className: `form-control ${isInvalid ? 'is-invalid' : ''} ${className}`,
      ...props,
    };

    switch (type) {
      case 'textarea':
        return <textarea {...commonProps} rows={rows} aria-multiline='true' />;

      case 'select':
        return (
          <select {...commonProps}>
            <option value=''>Select an option</option>
            {options.map(option => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            {...commonProps}
            type={type}
            min={min}
            max={max}
            step={step}
            pattern={pattern}
            autoComplete={autoComplete}
          />
        );
    }
  };

  return (
    <div className='mb-3'>
      <label htmlFor={fieldId} className='form-label fw-bold'>
        {label}
        {required && (
          <span className='text-danger ms-1' aria-label='required'>
            *
          </span>
        )}
      </label>

      {renderField()}

      {helpText && (
        <div id={helpId} className='form-text'>
          {helpText}
        </div>
      )}

      {error && (
        <div id={errorId} className='invalid-feedback' role='alert'>
          {error}
        </div>
      )}
    </div>
  );
};

export default FormField;
