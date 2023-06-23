	fetch('https://whatyearisit-backend-five-eta.vercel.app/year')
    .then(response => response.json())
	.then(data => {
console.log(data);
const {year} = data;
document.querySelector("#year").textContent =year
    })