import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Tokyo", "Osaka", "Kyoto", "Sapporo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(true);
  return (
    <div>
      {/* <ListGroup items={items} heading="Japan Cities" onSelectItem={handleSelectItem}/> */}
      <Button onClick={()=>setAlertVisibility(!alertVisible)} color="danger">Click me</Button>

      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>Selesaikan tugasmu nak</Alert>}
    </div>
  );
}
export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
