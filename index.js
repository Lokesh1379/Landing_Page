let items = [{

    name: "Dosa",
    image: "./Images/break-fast/Dosa.jpg",
    price: 75
},
{

    name: "Idli",
    image: "./Images/break-fast/idli.jpg",
    price: 50
},
{

    name: "Uttapam",
    image: "./Images/break-fast/uttapaam.jpg",
    price: 60
},
{

    name: "LemonRice",
    image: "./Images/break-fast/lemon-rice.jpg",
    price: 60
},
{

    name: "Poori",
    image: "./Images/break-fast/puri.jpg",
    price: 60
},
{

    name: "Upma",
    image: "./Images/break-fast/pmaa.jpg",
    price: 50
},
{

    name: "Chicken biryan",
    image: "./Images/lunch/chicken-biryani.webp",
    price: 159,

},
{

    name: "Mutton biryan",
    image: "./Images/lunch/mutton-biryanii.jpg",
    price: 199,

},
{

    name: "Andhra Chikenfry ",
    image: "./Images/lunch/andhra-chicken-fry.webp",
    price: 100,

},
{

    name: "Chicken-65 ",
    image: "./Images/lunch/chicken-65.jpg",
    price: 199,

},
{

    name: "Chicken friredrice",
    image: "./Images/lunch/chicken-fried rice.webp",
    price: 199,

},
{

    name: "chicken Lollipop",
    image: "./Images/lunch/chicken-lollipop.jpg",
    price: 199,

},
{

    name: "Egg Friedrice",
    image: "./Images/lunch/egg-fried-rice.jpg",
    price: 199,

},
{

    name: "Gobi Friedrice",
    image: "./Images/lunch/gobi-fried-rice.jpg",
    price: 199,

},
{

    name: "Gobi Manchurian",
    image: "./Images/lunch/gobi-manchurian.jpg",
    price: 199,

},
{

    name: "paratha",
    image: "./Images/lunch/paratha.jpg",
    price: 199,

},
{

    name: "Punjabi Chicken",
    image: "./Images/lunch/punjabi-chicken.jpg",
    price: 199,

},
{

    name: "roti",
    image: "./Images/lunch/roti.jpg",
    price: 20,

},
{

    name: "Veg-Loaded",
    image: "./Images/lunch/veg-loaded.avif",
    price: 199,

},
{

    name: "Ckiken Loaded",
    image: "./Images/lunch/chickenloaded.jpg",
    price: 199,

},
]

let menu = document.getElementById("food-items");

let newData = items.map((eachitem) => {
    const { name, image, price } = eachitem
    return `
    <div class='item-card'>
    <img  class='item-img'src="${image}" alt="${name}">
    <h2>${name}</h2>
    <h4>price: ₹${price}</h4>
    <button class='order-btn'>Order Now</button>
    </div>
    `

})
menu.innerHTML = newData.join('')