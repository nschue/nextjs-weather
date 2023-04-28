import useSWR from "swr";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function useForecast() {
    const {data, error, isLoading} = useSWR('https://api.weather.gov/gridpoints/EWX/133,57/forecast', fetcher)

    return {
        forecast: data,
        isLoading,
        isError: error
    }
}

export function useHourlyForecast() {
    const {data, error, isLoading} = useSWR('https://api.weather.gov/gridpoints/EWX/133,57/forecast/hourly', fetcher)

    return {
        forecast: data,
        isLoading,
        isError: error
    }
}
