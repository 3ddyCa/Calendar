import { useState } from 'react'
import './App.css'

function Day({jour,className}){
  return <div
    className={className}
  >
    {jour}
  </div>
}


function App() {
  const MONTH = ['janvier','fevrier','mars','avril','mai','juin','juillet','août','septembre', 'octobre', 'novembre', 'decembre'];
  const DAY = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
  const DAY_LETTER = DAY.map((day)=>{
    return Array.from(day)[0];
  })
  const ROW = [];
  for(let i = 1; i<=31; i++){
    let d = i*31/7; 
    //console.log("variable de jour : ",d);
    ROW.push(<Day key={i} jour={i} className="backgroundOrange" />);
  }
  return <article
    className='card'
  >
    <Day jour={MONTH[9]+" 2026"} className='month'/>
      <section
        className='grid-7 letterRow'
        >
        {DAY_LETTER.map(dl=>
          <Day key={DAY_LETTER.indexOf(dl)} jour={dl} className="dayLetter"/>
        )}
      </section>
      <section
        className='grid-7 days'
        >
          {ROW}
      </section>
  </article>
  
}

export default App
