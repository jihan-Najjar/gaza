import * as Yup from "yup";

export const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

export const CheckoutSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10,}$/, 'Phone number is not valid'),
  paymentMethod: Yup.string()
    .required('Payment method is required'),
  specialRequests: Yup.string()
    .max(500, 'Special requests must be 500 characters or less'),
});