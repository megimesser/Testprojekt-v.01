import { useState } from 'react';
import './App.css';
import Main from './mainpage'; // Importiere die Home-Komponente aus der Datei "HomeSection.jsx"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
