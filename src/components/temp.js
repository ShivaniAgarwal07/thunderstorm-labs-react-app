// https://api.openweathermap.org/data/2.5/weather?q=bareilly&appid=e0508d4124f96488a95272c7a7c964e1

import React, {useState, useEffect} from 'react';
import Weathercard from './weathercard';
import './style.css';

const Temp = () => {

    const [searchValue, setSearchValue]= useState("bareilly");

    const [tempInfo, setTempInfo]= useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e0508d4124f96488a95272c7a7c964e1`;
            const res = await fetch(url);
            const data = await res.json();
            const {temp, humidity, pressure} = data.main;
            const {main: weathermood} = data.weather[0];
            const {name}= data;
            const {speed}= data.wind;
            const {country, sunset}= data.sys;

        const myNewWeatherInfo ={
            temp, 
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        };
        setTempInfo(myNewWeatherInfo);
            
        } catch (error) {
            console.log(error);
        }
    };

    // for by default coming bareilly without searching 
    useEffect(() => {
        getWeatherInfo();
    }, []);
    
  return (
    <>
        {/* For search bar */}
        <div className='wrap'>
            <div className='search'>
                <input type="search" placeholder='Type here...' autoFocus id='search' className='searchTerm' value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
                <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
            </div>
        </div>
        <Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp