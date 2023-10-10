import { useState }   from 'react'
import "./styles.css";
import "./App.css";



function App() {

  const [value, setValue] = useState('')


  const clear = () =>{
    setValue(value.slice(0, -1))
  }
  const reset = () =>{
    setValue('')
  }

  const total = () =>{
    try{
      let evaluation = Function('return ' + value)()
      setValue((prevState) => prevState + '=' + evaluation.toString() + '')
    }catch(error){
      console.log(error)
    }
  }

  function handleButtonClick(buttonValue){
    setValue(value + buttonValue)
  }
  return (
    <>
    <div className="calculator">
      {/* output */}
      <div className="output">
        <div className="input">{value}</div>

      </div>
        {/* Grid area */}
        <button className="span-two reset" onClick={reset} title='RESET'>AC</button>
        <button onClick={clear} title='DELETE' > DEL</button>
        <button onClick={() => handleButtonClick('/')}>÷</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className='span-two ' onClick={total} title='TOTAL'>=</button>
    </div>
  </>
   );
}

export default App;
