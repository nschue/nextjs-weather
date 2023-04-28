import CurrentWeather from "@/components/currentWeather";
import TenDayForecast from "@/components/tenDayForecast";
import HourlyForecast from "@/components/hourlyForecast";
import {useForecast} from "@/services/useForecast";

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default function Home() {
    const {forecast, isLoading, isError} = useForecast()
    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    const futureForecast = forecast.properties.periods.filter((period: any) => {
        return days.includes(period.name)
    })

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <h1 style={{textAlign: "center"}}>Forecast</h1>
            <CurrentWeather location={"Converse, Texas"}/>
            <TenDayForecast/>
            {futureForecast.map((day: any) => {
                return <HourlyForecast key={day.number} date={new Date(day.startTime)}/>
            })}
        </div>
    )
}