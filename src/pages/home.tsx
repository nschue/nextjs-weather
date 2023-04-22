import CurrentWeather from "@/components/currentWeather";
import TenDayForecast from "@/components/tenDayForecast";

export default function Home() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <h1 style={{textAlign: "center"}}>Forecast</h1>
            <CurrentWeather/>
            <TenDayForecast/>
        </div>
    )
}