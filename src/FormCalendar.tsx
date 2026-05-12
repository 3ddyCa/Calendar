import {useState} from 'react'
const LOGS = true;
export function FormCalendar(onSubmit){

    

    return <form className="addCalendar" onSubmit={(event:any)=>handleSubmit(event)}>
            <h2>Nouvel Evènement</h2>
            <label htmlFor='CalendarName'>Nom de l'évènement</label>
            <input id='CalendarName' name='Cal_name' type="text" onChange={(event)=>{if(LOGS){console.log(event.target.name," ",event.target.value)}}}></input>
            <label htmlFor='CalendarHour'  >Horaire</label>
            <input id='CalendarHour' name='Cal_hour' type="time" onChange={(event)=>{if(LOGS){console.log(event.target.name," ",event.target.value)}}}></input>
            <label htmlFor='CalendarPlace'>Lieu</label>
            <input id='CalendarPlace' name='Cal_place' type="text" onChange={(event)=>{if(LOGS){console.log(event.target.name," ",event.target.value)}}}></input>
            <input id='CalendarSubmit' type="submit" ></input>
        </form>
}