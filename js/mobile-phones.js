"use strict";

const mobilePhones = [
    {
        id: 1,
        brandname: "Apple",
        brandmodel: "IPhone 15",
        color: "Black",
        price: 3999,
        memory: "128GB",
        img: "img/iphone-15-128-black.webp"
    },
    {
        id: 2,
        brandname: "Apple",
        brandmodel: "IPhone 16 Pro",
        color: "Black",
        price: 4999,
        memory: "128GB",
        img: "img/iphone-16-128-black.webp"
    },
    {
        id: 3,
        brandname: "Apple",
        brandmodel: "IPhone 17",
        color: "Black",
        price: 8999,
        memory: "256GB",
        img: "img/iphone-17-256-black.webp"
    },
    {
        id: 4,
        brandname: "Apple",
        brandmodel: "IPhone 17",
        color: "White",
        price: 8999,
        memory: "256GB",
        img: "img/iphone-17-256-white.webp"
    },
    {
        id: 5,
        brandname: "Apple",
        brandmodel: "IPhone 17 Pro Max",
        color: "Black",
        price: 10999,
        memory: "256GB",
        img: "img/iphone-17-pro-max-256-black.webp"
    },
    {
        id: 6,
        brandname: "OnePlus",
        brandmodel: "OnePlus 11 5G",
        color: "Titan Black",
        price: 5499,
        memory: "128GB",
        img: "img/oneplus-11-5G-128-titan-black.webp"
    },
    {
        id: 7,
        brandname: "OnePlus",
        brandmodel: "OnePlus 15",
        color: "Infinite Black",
        price: 6499,
        memory: "256GB",
        img: "img/oneplus-15-256-infinite-black.webp"
    },
    {
        id: 8,
        brandname: "Samsung",
        brandmodel: "Samsung S25",
        color: "Navy",
        price: 4999,
        memory: "128GB",
        img: "img/samsung-s25-128-navy.webp"
    },
    {
        id: 9,
        brandname: "Samsung",
        brandmodel: "Samsung S25",
        color: "Blue Black",
        price: 5999,
        memory: "256GB",
        img: "img/samsung-s25-256-blueblack.webp"
    },
    {
        id: 10,
        brandname: "Samsung",
        brandmodel: "Samsung S26",
        color: "Black",
        price: 6999,
        memory: "256GB",
        img: "img/samsung-s26-256-black.webp"
    },
    {
        id: 11,
        brandname: "Samsung",
        brandmodel: "Samsung S26 Ultra",
        color: "Black",
        price: 7499,
        memory: "256GB",
        img: "img/samsung-s26-ultra-256-black.webp"
    }
]

const phonesContainer = document.querySelector("#phones-container");

function displayPhones(phoneList) 
{
    phonesContainer.innerHTML += "";
    phoneList.forEach((item) => {
        phonesContainer.innerHTML += `
        <article>
            <h2>${item.brandmodel}</h2>

            <ul>

                <li>${item.brandname}</li>
                <li>${item.color}</li>
                <li>${item.price}</li>

            </ul>

            <figure>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer"><img src="${item.img}" alt="${item.title}"></a>
                <figcaption>${item.brandmodel}</figcaption>
             </figure>
   
        </article>
        `;
    });
}

displayPhones(mobilePhones);