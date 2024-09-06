fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => res.json())
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById("author").textContent =`By: ${data.user.name}` 
}) 
.catch (error => {
  document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1517200578024-62d131797ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjU2NDkyMzV8&ixlib=rb-4.0.3&q=80&w=1080)`
})

fetch ("https://api/coingecko/com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))