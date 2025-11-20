import {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import "./SearchBox.css"

export default function SearchBox({updateInfo}){
   let [city,setCity]= useState("");
   let [error, setError]= useState(false);

   let API_URL="https://api.openweathermap.org/data/2.5/weather"
   const API_KEY= "21a80684705cbe301ccbc90d25c8bb91";

   let getWheaterInfo = async () =>{
     try{
         let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result={
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_Like,
        wheater: jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
   }catch(err){
     throw err;
   }
   }

  let handleChange =(evt)=>{
  setCity(evt.target.value);
}  

let handleSubmit = async (evt) =>{
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWheaterInfo();
    updateInfo(newInfo);
    }catch(err){
        setError(true);
    }
}
   return(
        <div className="SearchBox">
            <h3>Search box</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city"
                 label="City-name"
                 variant="outlined"
                 required value={city}
                 onChange={handleChange}
                 ></TextField><br /><br />
                <Button variant="contained" type="Submit">Search</Button>
                 {error && <p style = {{color: 'red'}}>No Such place exist</p>}
            </form>
        </div>
    )
}