
// change text button
const changeHeadingEl = document.querySelector("#change-text-btn");
if (changeHeadingEl) {
    document.querySelector("#change-text-btn").addEventListener("click", () => {
        const headingEl = document.querySelector("h1");
        const originalText = "Red Text";
        const newText = "Bingus";
        if (headingEl === null ) { return }
        if (headingEl.textContent === originalText) {
            headingEl.textContent = newText;
            changeHeadingEl.textContent = `Revert Text to "${originalText}"`;
        } else {
            headingEl.textContent = originalText;
            changeHeadingEl.textContent = `Change Text to "${newText}"`;
        }
    });
}

const getWeather = async() => {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    const obj = res.json()
    return obj["current"]["temperature_2m"]
}

(() => {

    getWeather().then(res => 
        document.querySelector("#weather-text").textContent = res
    ).catch(e => console.error)
})