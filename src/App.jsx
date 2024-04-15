import { useState } from 'react';
import './App.css';
import Countdown from './components/Countdown';

export default function App() {

  const handleTimeFinish = () => {
    // Must call an API saved or DB saved
    setIsFinished(true)
  }

  const [isFinish, setIsFinished] = useState(false)

  return (
    <div className='main-container'>
      <h1 className="main-title">Countdown Timer</h1>

      {/*InitialTime must be determined by a form filled by the visitor*/}
      <Countdown initialTime={5} onTimeFinish={handleTimeFinish} />
    </div>
  );
}
