import React, {useState, useEffect} from 'react'

const Weathercard = ({tempInfo}) => {
    const[weatherState, setWeatherState]= useState("");
    const {
            temp, 
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
    } = tempInfo;

    useEffect(() => {
      if(weathermood){
        switch (weathermood) {
            case "Clouds": setWeatherState("wi-cloudy");
                break;
            case "Haze": setWeatherState("wi-fog");
                break;
            case "Clear": setWeatherState("wi-night-cloudy");
                break;
            case "Mist": setWeatherState("wi-day-cloudy-gusts");
                break;
            case "Rain": setWeatherState("wi-rain");
                break;
            case "Thunderstorm": setWeatherState("wi-day-thunderstorm");
                break;
            case "Lightning": setWeatherState("wi-night-alt-sleet-storm");
                break;
            case "Fog": setWeatherState("wi-night-fog");
                break;
            case "Smoke": setWeatherState("wi-smoke");
                break;
            case "Drizzle": setWeatherState("wi-sleet");
                break;
            case "Snow": setWeatherState("wi-night-snow");
                break;
        
            default:setWeatherState("wi-day-cloudy");
                break;
        }
      }
    }, [weathermood]);
    

    // converting sec into time for sunset 
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <>
        {/* For main div content */}
        <article className="widget">
            <div className='weatherIcon'>
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='weatherCondition'>{weathermood}</div> 
                    <div className='place'>{name}, {country}</div>
                </div>

            </div>
            <div className='date'>
                { new Date().toLocaleString()}
            </div>

            {/* four coloum sections */}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                {/* first one  */}
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className='extra-info-leftside'>{timeString}<br />Sunset PM</p>
                    </div>
                {/* second one  */}

                    <div className='two-sided-section'>
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className='extra-info-leftside'>{humidity} <br />Humidity</p>
                    </div>
                </div>

                <div className='weather-extra-info'>
                {/* third one  */}
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className='extra-info-leftside'>{pressure} <br />Pressure</p>
                    </div>
                    {/* fourth one  */}

                    <div className='two-sided-section'>
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className='extra-info-leftside'>{speed} <br />Speed</p>
                    </div>

                </div>
            </div>
        </article>
    </>
  )
}

export default Weathercard