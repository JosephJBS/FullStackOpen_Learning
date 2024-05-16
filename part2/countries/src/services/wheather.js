import axios from "axios";

const appid = import.meta.env.VITE_SOME_KEY

const getWheatherByCapital = (capital) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${appid}`)
    return request.then(response => response.data)
}

export default { getWheatherByCapital }