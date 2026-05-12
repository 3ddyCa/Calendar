import {useState} from 'react'
const LOGS = true;
export function FormCalendar({onSubmit, index}:any){

    return <form className="addCalendar" onSubmit={(event:any)=>onSubmit(event)}>
            <h2>Nouvel Evènement</h2>
            <label htmlFor='CalendarName'>Nom de l'évènement</label>
            <input id='CalendarName' name='name' type="text" onChange={(event)=>{if(LOGS){console.log(event.target.name," ",event.target.value)}}} ></input>
            <label htmlFor='CalendarHour'  >Horaire</label>
            <input id='CalendarHour' name='hour' type="time" onChange={(event)=>{if(LOGS){console.log(event.target.name," ",event.target.value)}}} ></input>
            <label htmlFor='CalendarPlace'>Lieu</label>
            <input id='CalendarPlace' name='place' type="text" onChange={(event)=>{if(LOGS){console.log(event.target.name," ",event.target.value)}}} ></input>
            <input name="index" value={index} type="hidden" onChange={(event)=>{if(LOGS){console.log(event.target.name," ",event.target.value)}}}></input>
            <input id='CalendarSubmit' type="submit" ></input>
        </form>

}