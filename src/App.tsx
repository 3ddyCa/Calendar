import { useState } from 'react'
import{Day} from './Day.tsx';
import{FormCalendar} from "./FormCalendar.tsx"
import './App.css'




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

  function handleSubmit(ev){
      ev.preventDefault();  
      console.log("Event soumis : ",ev.target," ")
      console.log("Champs du formulaire : ",ev.target.Cal_name.value," ",ev.target.Cal_hour.value," ",ev.target.Cal_place.value)
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
  <FormCalendar onSubmit={handleSubmit}/>
   <div> 
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
    
    </div>
  </article>
  
}

export default App
