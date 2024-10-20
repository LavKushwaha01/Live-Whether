const city = ["sasaram", "New Delhi" , "Kolkata", "Prayagraj", "Gurgaon" , "Bangalore"];

city.forEach(elmt => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=29e4d42b777d459cac6112945242506&q=${elmt}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        document.getElementById(`${elmt}`).innerHTML = `${elmt}\n${data.current.temp_c}°C`
    })
    .catch((error) => document.getElementById(`${elmt}`).innerHTML = `${elmt}\nError`)
})

fetch(`https://api.weatherapi.com/v1/current.json?key=29e4d42b777d459cac6112945242506&q=sasaram`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        document.getElementById("time").innerHTML = `${data.location.localtime}`;
        document.getElementById("w_img").innerHTML = `<span style="font-size:50px;">⛅</span>`;
        document.getElementById("temp").innerHTML = `${data.current.temp_c}°C`;
        document.getElementById("day").innerHTML = `${data.current.condition.text}`;
        document.getElementById("feel").innerHTML = `Feel Like ${data.current.temp_c}°C`;
        document.getElementById("air").innerHTML = `<p>UV Index</p>\n${data.current.uv}`;
        document.getElementById("wind").innerHTML = `<p> Wind</p>\n${data.current.wind_kph} km/h`;
        document.getElementById("humidity").innerHTML = `<p> Humidity</p>\n${data.current.humidity}%`;
        document.getElementById("dew").innerHTML = `<p> Dew Point</p>\n${data.current.dewpoint_c}°`;
    })
    .catch((error) => {
        document.getElementById("time").innerHTML = `Error, Invalid Location.`
        document.getElementById("w_img").innerHTML = ``
        document.getElementById("temp").innerHTML = ``
        document.getElementById("day").innerHTML = ``
        document.getElementById("feel").innerHTML = ``
        document.getElementById("air").innerHTML = ``
        document.getElementById("wind").innerHTML = ``
        document.getElementById("humidity").innerHTML = ``
        document.getElementById("dew").innerHTML = ``
    })


    const submit = document.getElementById("btm");

submit.addEventListener('click', function (e) {
    e.preventDefault();

    const search = (document.getElementById('search').value);
    fetch(`https://api.weatherapi.com/v1/current.json?key=29e4d42b777d459cac6112945242506&q=${search}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.getElementById("time").innerHTML = `${data.location.localtime}`;
            document.getElementById("w_img").innerHTML = `<span style="font-size:50px;">⛅</span>`;
            document.getElementById("temp").innerHTML = `${data.current.temp_c}°C`;
            document.getElementById("day").innerHTML = `${data.current.condition.text}`;
            document.getElementById("feel").innerHTML = `Feel Like ${data.current.temp_c}°C`;
            document.getElementById("air").innerHTML = `<p>UV Index</p>\n${data.current.uv}`;
            document.getElementById("wind").innerHTML = `<p> Wind</p>\n${data.current.wind_kph} km/h`;
            document.getElementById("humidity").innerHTML = `<p> Humidity</p>\n${data.current.humidity}%`;
            document.getElementById("dew").innerHTML = `<p> Dew Point</p>\n${data.current.dewpoint_c}°`;
        })
        .catch((error) => {
            document.getElementById("time").innerHTML = `Error, Invalid Location.`
            document.getElementById("w_img").innerHTML = ``
            document.getElementById("temp").innerHTML = ``
            document.getElementById("day").innerHTML = ``
            document.getElementById("feel").innerHTML = ``
            document.getElementById("air").innerHTML = ``
            document.getElementById("wind").innerHTML = ``
            document.getElementById("humidity").innerHTML = ``
            document.getElementById("dew").innerHTML = ``
        })
});

const instagram = document.getElementById('instagram');
const twitter = document.getElementById('twitter');
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
instagram.addEventListener('click', function (e) {
    window.open('https://www.instagram.com/sanatani_lav/', '_blank');
});

github.addEventListener('click', function (e) {
    window.open('https://github.com/LavKushwaha01', '_blank');
});

linkedin.addEventListener('click', function (e) {
    window.open('https://www.linkedin.com/in/lav-kushwaha-b9057b292/', '_blank');
});

twitter.addEventListener('click', function (e) {
    window.open('https://x.com/lavkushwaha2?t=DX3w-BKImPfXYcJhb6VFnw&s=08', '_blank');
});