import useForecast from "@/services/useForecast";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function DailyForecast({forecast}: { forecast: any }) {
    return (
        <div className={"w-36 flex-shrink-0 p-2 hover:border-2 active:bg-gray-400"}>
            <p>{forecast.name}</p>
            <p>☁️</p>
            <p className={"break-normal"}>{forecast.temperature}°</p>
            <p>{forecast.shortForecast}</p>
        </div>
    );
}

export default function TenDayForecast() {
    const {forecast, isLoading, isError} = useForecast()
    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    const futureForecast = forecast.properties.periods.filter((period: any) => {
        return days.includes(period.name)
    })

    return (
        <div className={"flex flex-col max-w-screen-lg w-screen"}>
            <h2 className={"pl-2"} style={{paddingLeft: "10px"}}>Daily</h2>
            <div className={"flex overflow-x-auto"}>
                {futureForecast.map((dayForecast: any) => {
                    return <DailyForecast key={dayForecast.number} forecast={dayForecast}/>
                })}
            </div>
        </div>
    );
}