import React, { useState } from 'react';

import { Card, Form, FormField, Button } from '../../components';
import { getAuthorData } from '../../utils/authorData';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const author = getAuthorData();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { value } = e.target;
      setFormData(prev => ({ ...prev, [field]: value }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className='row justify-content-center'>
      <div className='col-lg-6 col-md-8 col-sm-12'>
        <header className='text-center mb-5'>
          <h1 className='display-4 text-primary'>
            <i className='fas fa-envelope me-3'></i>
            Contact Us
          </h1>
          <p className='lead'>
            Get in touch with us for any questions or inquiries.
          </p>
          <p className='text-muted'>
            For project-related questions, you can also contact the creator{' '}
            <strong>{author.name}</strong>.
          </p>
        </header>

        <section aria-labelledby='contact-form-heading'>
          <Card>
            <h2 id='contact-form-heading' className='visually-hidden'>
              Contact Form
            </h2>
            <Form onSubmit={handleSubmit} noValidate>
              <FormField
                label='Name'
                id='name'
                type='text'
                value={formData.name}
                placeholder='Your name'
                required
                error={errors.name}
                helpText='Please enter your full name.'
                onChange={handleInputChange('name')}
              />

              <FormField
                label='Email'
                id='email'
                type='email'
                value={formData.email}
                placeholder='your.email@example.com'
                required
                error={errors.email}
                helpText='Please enter a valid email address.'
                onChange={handleInputChange('email')}
              />

              <FormField
                label='Message'
                id='message'
                type='textarea'
                value={formData.message}
                placeholder='Your message'
                required
                error={errors.message}
                helpText='Please provide details about your inquiry.'
                rows={5}
                onChange={handleInputChange('message')}
              />

              <Button
                type='submit'
                variant='primary'
                size='lg'
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className='fas fa-spinner fa-spin me-2'></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className='fas fa-paper-plane me-2'></i>
                    Send Message
                  </>
                )}
              </Button>
            </Form>
          </Card>
        </section>
      </div>
    </article>
  );
};

export default Contact;
