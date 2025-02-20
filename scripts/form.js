document.addEventListener("DOMContentLoaded", function () {
    const currentYear = document.querySelector("#current-year");
    const lastModified = document.querySelector("#lastModified");
    const today = new Date();
    const productItem = document.querySelector("#product-name");
    let submissionCounter = document.querySelector("#submission-counter");
    let numVisits = 0;
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];
    currentYear.innerHTML = today.getFullYear();
    lastModified.innerHTML = document.lastModified;
    createItems(products);


    visitCounter();



    function createItems(products) {
        for (let i = 0; i < products.length; i++) {
            productItem.innerHTML += `<option value="${products[i].id}">${products[i].name}</option>`;
        }
    }
    function visitCounter() {
        numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;
        numVisits++;
        localStorage.setItem("visits-ls", numVisits);
        if (submissionCounter) {
            submissionCounter.textContent = numVisits;
        }

    }
});