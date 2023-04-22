export default function TenDayForecast() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
    }}>
        <h2 style={{paddingLeft: "10px"}}>Daily</h2>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <DailyForecast/>
            <DailyForecast/>
            <DailyForecast/>
            <DailyForecast/>
            <DailyForecast/>
            <DailyForecast/>
            <DailyForecast/>
            <DailyForecast/>
            <DailyForecast/>
            <DailyForecast/>
        </div>
    </div>;
}

function DailyForecast() {
    return (
        <div style={{padding: "10px"}}>
            <p>Wed 19</p>
            <p>☁️</p>
            <p>80° 70°</p>
            <p>Mostly Cloudy</p>
        </div>
    );
}