import { useEffect, useState } from "react"


export default function WeatherApp() {
    const [searchValue, setSearchValue] = useState('')
    const [weatherData, setWeatherData] = useState(null)

    const apiURL = 'https://api.openweathermap.org/data/2.5/weather'
    const apiKey = '40786829d9d99d70da461bd77acea702'

    const fetchWeatherData = async (param) => {
        try {
            const data = await (await fetch(`${apiURL}?q=${param}&appid=${apiKey}`)).json()

            if (data) {
                console.log(data)
                setWeatherData(data)


            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleWeatherSearch = () => {
        fetchWeatherData(searchValue)
    }

    const getCurrentDate = () => {
        return new Date().toLocaleString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    useEffect(() => {
        fetchWeatherData('Nairobi')
    }, [])

    return <>
        <div className="weather-container">
            <div className="search">
                <input type='text'
                    placeholder="Enter a city"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button onClick={() => handleWeatherSearch(searchValue)} className="weather-btn">
                Search city
                </button>
            </div>
            <div className="weather-content">
                <div className="city-name">
                    <h3>{weatherData ?.name}, <span>{weatherData?.sys?.country}</span></h3>
                </div>
                <div className="date">
                    <span>{getCurrentDate()}</span>
                </div>
                <div>Temp: {weatherData?.main?.temp}F</div>
                <p>Description: {weatherData && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].description}</p>

            </div>
        </div>

    </>
}