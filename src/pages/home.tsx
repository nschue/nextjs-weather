import CurrentWeather from "@/components/currentWeather";
import TenDayForecast from "@/components/tenDayForecast";
import useForecast from "@/services/useForecast";

export default function Home() {


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <h1 style={{textAlign: "center"}}>Forecast</h1>
            <CurrentWeather location={"Converse, Texas"} />
            <TenDayForecast/>
        </div>
    )
}