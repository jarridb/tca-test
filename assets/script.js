const getWeather = async() => {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    const obj = res.json()
    return obj["current"]["temperature_2m"]
}

(() => {
    document.querySelector("#change-text-btn").addEventListener("click", () => {
        document.querySelector("h1").textContent = "bingus"
    })

    getWeather().then(res => 
        document.querySelector("#weather-text").textContent = res
    ).catch(e => console.error)
})