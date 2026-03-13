import { useState } from 'react'
import './App.css'
import { NysButton } from '@nysds/components/react'

function App() {
  const [value, setValue] = useState(0)

  const handleButtonClick = () => {
    console.count("Button click")
    setValue(value + 1)
    // Check for stale state
    if(value === 0){console.log("handleButtonClick fired with stale state")}
  }

  return (
    <form className="nys-display-flex nys-flex-column nys-margin-200">
      <div className="nys-grid-ro nys-margin-y-200">
        Value: {value}
      </div>
      <div className="nys-grid-row">
          {/* 
            Demo Button 1 uses the onNysClick property, 
            when I click it in the browser console I see:
              - "handleButtonClick fired with stale state" message logged to the console.
              - handleButtonClick() firing many times.

            Demo Button 2 uses the onClick property, 
            when I click it in the browser console I see:
              - "handleButtonClick fired with stale state" message is not logged to the console
                because the state is always up to date when handleButtonClick() fires.
              - handleButtonClick() firing correctly once per click.
          */}
          <NysButton label="Demo Button 1" onNysClick={handleButtonClick} className="nys-margin-r-100" ariaLabel="Demo Button 1"/>
          <NysButton label="Demo Button 2" onClick={handleButtonClick} ariaLabel="Demo Button 2"/>
      </div>
    </form>
  )
}

export default App
