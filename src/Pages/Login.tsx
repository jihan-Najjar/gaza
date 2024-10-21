// import { Formik } from "formik";
// import { schema } from "../schemas/validationSchema"
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { users } from "../mockData";
// const Login = () => {
//   const [userType, setUserType] = useState<'user' | 'admin'>("user");
//   const navigate = useNavigate();
//   const handleLogin = (values: { email: string; password: string }) => {
//     const user = users.find(
//       (user) => user.username === values.email && user.password === values.password
//     );

//     if (user) {
//       setUserType(user.role as 'user' | 'admin');
//       if (user.role === "user") {
//         navigate('/');
//       } else if (user.role === "admin") {
//         navigate('/admin');
//       }
//     } else {
//       alert("Invalid username or password");
//     }
//   };
//   return (
//     <Formik

//       validationSchema={schema}
//       initialValues={{ email: "", password: "" }}
//       onSubmit={(values) => {
//         // Alert the input values of the form that we filled
//         alert(JSON.stringify(values));
//       }}

//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//       }) => (
//         <div className="login">
//           <div className="form">
//             <form noValidate onSubmit={handleSubmit}>
//               <h3>Login</h3>
//               <input
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.email}
//                 placeholder="Enter email id / username"
//                 className="form-control inp_text"
//                 id="email"
//               />
//               {/* If validation is not passed show errors */}
//               <p className="error">
//                 {errors.email && touched.email && errors.email}
//               </p>
//               {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//               <input
//                 type="password"
//                 name="password"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.password}
//                 placeholder="Enter password"
//                 className="form-control"
//               />
//               {/* If validation is not passed show errors */}
//               <p className="error">
//                 {errors.password && touched.password && errors.password}
//               </p>
//               {/* Click on submit button to submit the form */}
//               <button type="submit">Login</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </Formik>
//   )
// }

// export default Loginimport { Formik } from "formik";
import { schema } from "../schemas/validationSchema";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { users } from "../mockData"; // تأكد من أن مسار استيراد البيانات صحيح
import { Formik } from "formik";

const Login: React.FC = () => {
  const [userType, setUserType] = useState<'user' | 'admin' | null>(null); // تأكد من أن الحالة يمكن أن تكون null أيضًا
  const navigate = useNavigate();

  const handleLogin = (values: { email: string; password: string }) => {
    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      setUserType(user.role as 'user' | 'admin'); // تأكد من أن النوع هو 'user' أو 'admin'
      if (user.role === "user") {
        navigate('/Home');
      } else if (user.role === "admin") {
        navigate('/admin');
      }
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        handleLogin(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="login">
          <div className="form">
            <form noValidate onSubmit={handleSubmit}>
              <h3>Login</h3>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email id / username"
                className="form-control inp_text"
                id="email"
              />
              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                className="form-control"
                id="password"

              />
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
