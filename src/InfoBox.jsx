import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const INIT_URL=
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL="https://images.unsplash.com/photo-1420593248178-d88870618ca0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let COLD_URL="https://plus.unsplash.com/premium_photo-1670963965022-59c9ac468c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fHww"
    let RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc="

    return(
    <div className="InfoBox">
            <h1>weather info</h1>
     <div className='cardContainer'>       
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80
          ? RAIN_URL
          : info.temp >15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity > 80
          ? <ThunderstormIcon/>
          : info.temp >15
          ? <SunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature ={info.temp}&deg;C</p>
            <p>Humidity ={info.humidity}</p>
            <p>Min Temp= {info.tempMin}</p>
            <p>Max Temp= {info.tempMax}</p>
            <p>The weather can be described as <i>${info.weather}</i> and feels like{info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}