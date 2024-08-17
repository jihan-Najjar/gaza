import "./index.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";



function App() {
  return (
    <div className="app">
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
     {/* <Login/> */}
     <Home/>

    </div>
  );
}

export default App;