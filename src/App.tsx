import { useState } from 'react'
import './App.css'

function Day({jour,className,onClick}){
  return <div
    className={className}
    onClick={onClick}
  >
    {jour}
  </div>
}


function App() {
  function handleCLick(ev){
    const targetState = ev.target.classList.contains('selected');
    document.querySelectorAll(".selected").forEach(element=>{
      element.classList.remove('selected');
    })
    console.log("click");
    if(!targetState){
      ev.target.classList.add('selected');
    }
    
  }


  const MONTH = ['janvier','fevrier','mars','avril','mai','juin','juillet','août','septembre', 'octobre', 'novembre', 'decembre'];
  const DAY = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
  const DAY_LETTER = DAY.map((day)=>{
    return Array.from(day)[0];
  })
  const ROW = [];
  for(let i = 1; i<=31; i++){
    let d = i*31/7; 
    //console.log("variable de jour : ",d);
    ROW.push(<Day key={i} jour={i} onClick={(event)=>handleCLick(event)} className="backgroundOrange" />);
  }
  let counter = 0;

  return <article
    className='card'
  >
    <Day key={"001"} jour={MONTH[9]+" 2026"} className='month'/>
      <section
        className='grid-7 letterRow'
        >
        
        {DAY_LETTER.map(dl=>
          <Day key={"letter_"+counter++} jour={dl} className="dayLetter"/>

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
