import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the default styles

import SignInComponent from "./components/SignInComponent.jsx";
function App() {
  return (
		<>
			<ToastContainer />
			<SignInComponent />
		</>
	);
}

export default App;
