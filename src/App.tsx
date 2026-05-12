import { useState , useActionState } from 'react';
import{Day} from './Day.tsx';
import{FormCalendar} from "./FormCalendar.tsx";
import './App.css';





function App() {

  const DATE = Array.from(document.querySelectorAll('.days div'));
  let selected=0;
  function handleCLick(ev:any){
    const targetState = ev.target.classList.contains('selected');
    const selecteds = Array.from(document.querySelectorAll(".selected"));
    selecteds.forEach(element=>{
      element.classList.remove('selected');
    })
    
    if(!targetState){
      ev.target.classList.add('selected');
      selected = ev.target.innerText;
    }
    console.log("click > ",selected);
  }

  function handleSubmit(ev:any){
      ev.preventDefault();  
      console.log("Event soumis : ",ev.target.querySelector('h2').value," ")
      
      const formFields = [ev.target.name.value,ev.target.hour.value,ev.target.place.value];
      const result = {name:ev.target.name.value ,hour:ev.target.hour.value , place:ev.target.place.value , index:ev.target.index.value , confirmed:true};
      console.log("Champs du formulaire : ",result);
      formFields.forEach(value=>{
        if(value == undefined || value == ""){
           alert("Champ vide detecté ! ");
           return result;
        }

      })
      return 
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
    ROW.push(<Day key={i} jour={i} onClick={(event:any)=>handleCLick(event)} className="backgroundOrange" />);
  }
  let counter = 0;

  return <article
    className='card'
  >
  <FormCalendar onSubmit={handleSubmit} index={selected}/>
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
