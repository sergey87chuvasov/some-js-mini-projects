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
    return (
        <div className='container'>
            <div className="top-bar">
                <input className='cityInput' type="text" placeholder='Search' />
                <div className="search-icon">
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
                        <div className="humidity-percent">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WheatherApp