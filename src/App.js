import { useState } from 'react';
import Square from './Square';
import Input from './Input';

function App() {

  const [colorValue,setColorValue]=useState('');
  const [hexValue,setHexValue]=useState('');
  const [isDarkText,setIsDarkText]=useState(true);

  return (
    <div className="App">
      <Square
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}/>
    <Input
    colorValue={colorValue}
    isDarkText={isDarkText}
    setColorValue={setColorValue}
    setHexValue={setHexValue}
    setIsDarkText={setIsDarkText}
    />
    </div>
  );
}

export default App;
