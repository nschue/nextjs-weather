function Hour() {
    return (
        <div className={"w-24 flex-shrink-0"}>
            <p>☁</p>
            <p>64°</p>
            <p>Cloudy</p>
            <p>💧 1%</p>
            <p>5 mph</p>
            <p>12 am</p>
        </div>
    );
}

export default function HourlyForecast() {
    return (
        <>
            <h2>Hourly</h2>
            <div className={"w-screen max-w-screen-lg overflow-x-auto flex"}>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
                <Hour/>
            </div>
        </>
    )
}