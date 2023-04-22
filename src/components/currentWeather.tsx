export default function CurrentWeather() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        }}>
            <div>
                <p>San Antonio, Texas</p>
                <p>☁️ 77° F</p>
                <p>Partly Sunny</p>
                <p>Updated as of 8:15 PM</p>
            </div>
            <div>
                <p><span>Feels like 77°</span> <span>Wind 15 mph</span> <span>Visibility 9.9 mi</span></p>
                <p><span>Barometer 29.79 in</span> <span>Humidity 70%</span> <span>Dew Point 67°</span></p>
                <p><span>Air Quality Index 48</span> <span>Severity</span> <span>Good air quality</span></p>
            </div>
        </div>);
}