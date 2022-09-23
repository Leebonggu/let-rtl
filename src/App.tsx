import { useState } from 'react';
import Button from './components/Button';


function App() {
  const [count, setCount] = useState(0)
  const [toggleSwitch, setToggleSwitch] = useState(false)
  return (
    <div data-testid='layout' className={`max-w-lg mx-auto ${toggleSwitch ? 'bg-fuchsia-200' : 'bg-white'}`}>
      <div className='py-8'>
        <div className='flex justify-center'>
          <h3
            data-testid='counter'
            className='text-9xl dark:text-white'
          >{count}</h3>
        </div>
        <div className='flex justify-evenly py-10'>
          <Button testId='minus-button' onClick={() => setCount(prev => prev - 1)}>-</Button>
          <Button testId='plus-button' onClick={() => setCount(prev => prev + 1)}>+</Button>
        </div>
        <div className='flex justify-center py-10'>
          <Button testId='on-and-off' onClick={() => setToggleSwitch(prev => !prev)}>{toggleSwitch ? 'off' : 'on'}</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
