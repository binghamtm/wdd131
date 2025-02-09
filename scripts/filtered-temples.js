/************************* variables **************/

const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');
const album = document.querySelector("#album");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const allLink = document.querySelector("#all");
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }/*,
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 25",
    area: 19184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },
  {
    templeName: "Oquirrh Mountian Utah",
    location: "South Jordan, Utah",
    dedicated: "2009, August, 23",
    area: 60000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-39513-main.jpg"
  },
  {
    templeName: "Houston Texas Temple",
    location: "Houston, Texas",
    dedicated: "2000, August, 27",
    area: 33970,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/houston-texas-temple/houston-texas-temple-23480-main.jpg"
  }*/
];

let templesOld = temples.filter(temple => {
  let year = parseInt(temple.dedicated.split(",")[0]);
  return year < 1900;
});
let templesNew = temples.filter(temple => {
  let year = parseInt(temple.dedicated.split(",")[0]);
  return year > 2000;
});
let templesLarge = temples.filter(temple => temple.area > 90000);
let templesSmall = temples.filter(temple => temple.area < 10000);

/****** current date functions and hamburger menu ***************/

currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
})

/***** filtered temples functionality ******/
filteredTemples(temples);

allLink.addEventListener("click", function () {
  filteredTemples(temples);
})

oldLink.addEventListener("click", function () {
  filteredTemples(templesOld);
})

newLink.addEventListener("click", function () {
  filteredTemples(templesNew);
})

largeLink.addEventListener("click", function () {
  filteredTemples(templesLarge);
})

smallLink.addEventListener("click", function () {
  filteredTemples(templesSmall);
})

function filteredTemples(temples) {
  album.innerHTML = "";
  for (let i = 0; i < temples.length; i++) {
    album.innerHTML += `<div class='card'><h2>${temples[i].templeName}</h2><p>Location: ${temples[i].location}</p><p>Dedicated: ${temples[i].dedicated}</p><p>Size: ${temples[i].area} sq ft</p>
    <img src='${temples[i].imageUrl}' alt='${temples[i].templeName}' loading="lazy"></div>`;
  }
}