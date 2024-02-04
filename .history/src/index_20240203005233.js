import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App";

// ReactDOM.render(
//     <GoogleOAuthProvider clientId="   730379698185-cv7a59sok9sod43v04ee6g6pt4gtaea2.apps.googleusercontent.com">
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </GoogleOAuthProvider>,
//     document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
