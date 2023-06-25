const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)]
const bgImage = document.querySelector("html")
bgImage.style.backgroundImage = `url(img/${chosenImage})`
bgImage.classList.add("bg")