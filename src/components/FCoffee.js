import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import React, { useState, useEffect } from 'react'

function FCoffee ({firstName}) {
    const [count, setCount] = useState(0); 
    const [coffeeList, setCoffeeList] = useState();
    const [temperature, setTemperature] = useState('cold');
    useEffect(()=>{
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
            .then(response => response.json())
            .then(data => setCoffeeList(data))
            .catch(console.error)
    },[temperature])
   
    
    
    return (
        <>
        <h1>Coffee List (F)</h1>
        <p>Hello {firstName}</p>
        <button onClick={()=>setTemperature('hot')}>HOT</button>
        <button onClick={()=>setTemperature('hot')}>ICED</button>
        {!coffeeList
            ? <h2>Loading...</h2>
            : <>
              <h2>Coffees</h2>
              {coffeeList.map(coffee => {
                  return <p key={coffee.id}>{coffee.title}</p>
              }
             )}
        </>
    }   
    </>
)
}

export default FCoffee



