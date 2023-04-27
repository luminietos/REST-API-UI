import React from "react";
import "./styles.css";

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return (
    <div>
      <p>Hello world, it is {now.toDateString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};
export default App;

// OLD CODE:
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
