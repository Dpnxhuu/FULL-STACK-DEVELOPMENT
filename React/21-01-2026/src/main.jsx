import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'

// function App() {
//   return (
//     <>
//       <header></header>
//       <main></main>
//       <footer></footer>
//     </>
//   );
// }
createRoot(document.getElementById("root")).render(<App />);
console.log("hello")