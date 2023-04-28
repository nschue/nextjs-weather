import {useHourlyForecast} from "@/services/useForecast";

interface HourProps {
    forecast: any
}

function Hour({forecast}: HourProps) {
    const hour = new Date(forecast.startTime).getHours();
    return (
        <div className={"w-32 flex-shrink-0"}>
            <p>☁</p>
            <p>{forecast.temperature}°</p>
            <p>{forecast.shortForecast}</p>
            <p>💧{forecast.probabilityOfPrecipitation.value}%</p>
            <p>{forecast.windSpeed}</p>
            <p>{(hour === 0 || hour === 12) ? 12 : hour % 12} {hour >= 12 ? "PM" : "AM"}</p>
        </div>
    );
}

export default function HourlyForecast({date}: { date: Date }) {
    const {forecast, isLoading, isError} = useHourlyForecast();
    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    const hourlyForecast = forecast.properties.periods.filter((period: any) => {
        return date.getDate() === new Date(period.startTime).getDate()
    })
    return (
        <div id={date.getDate().toString()} className={"hidden hourly"}>
            <h2>Hourly</h2>
            <div className={"w-screen max-w-screen-lg overflow-x-auto flex"}>
                {hourlyForecast.map((hour: any) => {
                    return <Hour key={hour.number} forecast={hour}/>
                })}
            </div>
        </div>
    )
}