import React from 'react'

const App = () => {
  const [principal, setPrincipal] = React.useState(0);
  const [rate, setRate] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [simpleInterest, setSimpleInterest] = React.useState(0);

  const calculateSimpleInterest = (e) => {
    e.preventDefault();
    if (principal <= 0 || rate <= 0 || time <= 0) {
      alert("Please enter valid values for principal, rate, and time.");
      return;
    }
    const interest = (principal * rate * time) / 100;
    setSimpleInterest(interest);
  }
  const reload = () => {
    setPrincipal(0);
    setRate(0);
    setTime(0);
    setSimpleInterest(0);
    window.location.reload();
  }
  return (
    <div className='h-screen flex justify-center items-center bg-black'>
      <div className='bg-white py-6 px-8 rounded-lg'>
        <div className='p-4'>
          <h2 className='text-4xl font-semibold uppercase  text-center '>simple Calculator</h2>
        <p className='text-xl mb-6 mt-4 tracking-tight'>Calculate your simple interest easily.</p>
        </div>
        <div className='bg-green-500 py-6 px-4 mx-4 rounded-lg mb-4'>
          <h1 className='text-center font-bold text-4xl '>{simpleInterest}</h1>
          <p className='text-center my-3 text-xl'>Total simple interest</p>
        </div>
        <div className='flex flex-col my-3'>
          <label
          className='' htmlFor="principal">Principal</label>
          <input 
          onChange={(e) => setPrincipal(e.target.value)}
           className='border p-3 rounded-lg my-2'
          type="number" id="principal" placeholder='Enter principal amount' />
          <label htmlFor="rate">Rate of interest</label>
          <input 
          onChange={(e) => setRate(e.target.value)}
          className='border p-3 rounded-lg my-2'type="number" id="rate" placeholder='Enter rate of interest' />
          <label htmlFor="time">Time</label>
          <input 
          onChange={(e) => setTime(e.target.value)}
          className='border p-3 rounded-lg my-2'
          type="number" id="time" placeholder='Enter time in years' />
          </div>
        <div className='flex justify-between mt-6'>
          <button className='bg-blue-500 text-white p-4 rounded-lg text-lg hover:bg-blue-700'
          onClick={calculateSimpleInterest}>Calculate</button>
          <button className='bg-red-500 text-white p-4 rounded-lg text-lg hover:bg-red-900'
          onClick={reload}>Clear</button>  
        </div>
      </div>
    </div>
  )
}

export default App