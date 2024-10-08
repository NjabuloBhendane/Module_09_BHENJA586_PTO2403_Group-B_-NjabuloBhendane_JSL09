fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => res.json())
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById("author").textContent =`By: ${data.user.name}` 
}) 
.catch (error => {
  document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1517200578024-62d131797ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjU2NDkyMzV8&ixlib=rb-4.0.3&q=80&w=1080)`
})

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
      

      document.getElementById("crypto").innerHTML = ` 
       <img src=${data.image.small} />
      <span>${data.name}</span`

     document.getElementById("crypto").innerHTML += `
      <p>🎯: R${data.market_data.current_price.zar}</p>
            <p>👆: R${data.market_data.high_24h.zar}</p>
            <p>👇: R${data.market_data.low_24h.zar} </p>
     `

    })
    .catch(err => console.error(err))

 function getCurrentTime() {
    const date = new Date()
document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})

 } 
    
setInterval(getCurrentTime, 1000)


navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units= metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p>${Math.round(data.main.temp)}º</p>
                <p>${data.name}</p>`
        })
        .catch(err => console.error(err))
    });