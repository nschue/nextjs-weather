import useSWR from "swr";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function useForecast () {
    const { data, error, isLoading } = useSWR('https://api.weather.gov/gridpoints/EWX/133,57/forecast', fetcher)

    return {
        forecast: data,
        isLoading,
        isError: error
    }
}
