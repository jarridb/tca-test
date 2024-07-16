
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

// weather

async function getWeather() {
    try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
        const data = await res.json();

        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return {
            temp: data.current.temperature_2m,
            tempUnit: data.current_units.temperature_2m,
        };
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        return null;
    }
};

async function updateWeatherText() {
    // find dom element
    const weatherText = document.querySelector("#weather-text");
    if (!weatherText) { return }

    // get temp
    const { temp, tempUnit } = await getWeather();
    if (temp === null) {
        weatherText.textContent = "Unable to fetch weather data";
        return
    }
    weatherText.textContent = `${temp}${tempUnit}`;
};

updateWeatherText();

// modal

function showModal(modal) {
    // add eny other event based logic
    modal.showModal();
}

function closeModal(modal) {
    // add eny other event based logic
    modal.close();

}
// click outside the dialog handler
const closeOutsideModal = ({target:modal}) => {
    if (modal.nodeName === 'DIALOG') {
      modal.close('dismiss')
    }
 }
  

const modalOpen = document.querySelector('#galleryModal-open');
const modal = document.querySelector('#galleryModal');
const closeModalBtn = document.querySelector('#galleryModal-close');
if (modalOpen) {
    modalOpen.addEventListener('click', () => showModal(modal));
}
if (modal) {
    modal.addEventListener('click', closeOutsideModal)
}
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => closeModal(modal));
}
