import {useForecast} from "@/services/useForecast";

interface CurrentWeatherProps {
    location: string;
}

export default function CurrentWeather({location}: CurrentWeatherProps) {

    const {forecast, isLoading, isError} = useForecast()
    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    const currentForecast = forecast.properties.periods[0];
    const updatedTime = new Date(forecast.properties.updateTime)
    return (

        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        }}>
            <div>
                <p>{location}</p>
                <p>{currentForecast.temperature}° F</p>
                <p>{currentForecast.shortForecast}</p>
                <p>{`Updated as of ${updatedTime.getHours()}:${updatedTime.getMinutes()}`}</p>
            </div>
            <div>
                <p><span>{currentForecast.windSpeed} {currentForecast.windDirection}</span></p>
                <p><span>Humidity {currentForecast.relativeHumidity.value}%</span>
                    <span>Dew Point {9 / 5 * currentForecast.dewpoint.value + 32}°</span></p>
            </div>
        </div>);
}