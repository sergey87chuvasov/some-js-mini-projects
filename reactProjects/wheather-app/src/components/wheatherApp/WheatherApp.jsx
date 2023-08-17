import './WheatherApp.css'

import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const WheatherApp = () => {

    let api_key = 'ef1c3da20737a13b4cc1d32a1d918269';

    const search = async () => {
        const element = document.getElementsByClassName('cityInput');

        if (element[0].value === '') {
            return 0;
        }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);

    let data = await response.json();

    // console.log(data);

    const humidity = document.getElementsByClassName('humidity-percent');
    const wind = document.getElementsByClassName('wind-rate');
    const temperature = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location')
    
    };


    return (
        <div className='container'>
            <div className="top-bar">
                <input className='cityInput' type="text" placeholder='Search' />
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="search-icon-pic" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="wheather pic icon" />
            </div>
            <div className="weather-temp">24 °C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img className='icon' src={humidity_icon} alt="humidity pic" />
                    <div className="data">
                        <div className="humidity-percent">64 %</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img className='icon' src={wind_icon} alt="wind pic" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WheatherApp