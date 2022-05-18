import {useEffect,useState} from 'react'
function Weather(){

    let [weather, setWeather]=useState({});
    let [city,setCity]=useState("Nairobi");


    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dba1b12b77854c2d158dce4994622c88`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);

            setWeather(data);

        })
        .catch((err)=>{
            console.log("Error")
        })

    },[city])

function readValue(value){

    setCity(value);

}
    return(
        <div className='weather-container'>

            <input className='city'placeholder='City Name' onChange={(event)=>{
                readValue(event.target.value);
            }}/>

            {/* <button className='btn'>Check Weather</button> */}

            <h1>{city}</h1>

            <h2>Temp -{(weather.main?.temp-273.15).toFixed(2)}<sup>0</sup>C</h2>

            <h2>Feels Like -{(weather.main?.feels_like-273.15).toFixed(2)}<sup>0</sup>C</h2>

            <h2>Humidity -{(weather.main?.humidity)}</h2>

            <h2>Pressure -{(weather.main?.pressure)}</h2>


        </div>

    )
}

export default Weather;