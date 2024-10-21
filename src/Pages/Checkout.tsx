// CheckoutForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import { CheckoutSchema } from '../schemas/validationSchema';
import { useNavigate } from 'react-router-dom';

const CheckoutForm: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      paymentMethod: 'creditCard',
      specialRequests: ''
    },
    validationSchema: CheckoutSchema,
    onSubmit: (values) => {
      navigate('/confirmation', { state: { formData: values, confirmationNumber: '12345678' } });
      
    },
  });

  return (
    <form className="checkout-form" onSubmit={formik.handleSubmit}>
      <h2>User Information and Payment</h2>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formik.values.name} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          required 
        />
        {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
      </label>
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formik.values.email} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          required 
        />
        {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
      </label>
      <label>
        Phone:
        <input 
          type="tel" 
          name="phone" 
          value={formik.values.phone} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          required 
        />
        {formik.touched.phone && formik.errors.phone && <div className="error">{formik.errors.phone}</div>}
      </label>
      <label>
        Payment Method:
        <select 
          name="paymentMethod" 
          value={formik.values.paymentMethod} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        {formik.touched.paymentMethod && formik.errors.paymentMethod && <div className="error">{formik.errors.paymentMethod}</div>}
      </label>
      <label>
        Special Requests:
        <textarea 
          name="specialRequests" 
          value={formik.values.specialRequests} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
        />
        {formik.touched.specialRequests && formik.errors.specialRequests && <div className="error">{formik.errors.specialRequests}</div>}
      </label>
      <button type="submit">Proceed to Confirmation</button>
    </form>
  );
};

export default CheckoutForm;