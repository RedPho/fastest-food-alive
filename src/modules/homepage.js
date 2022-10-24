function createHomePage() {
    let content = document.querySelector("#content");

    let amazing = document.createElement("div");
    amazing.innerText = "We are the Fastest Food Alive! Call us and we will bring your food in a second!";
    amazing.classList.add("info");
    content.appendChild(amazing);

    let restaurantImage = document.createElement("img");
    restaurantImage.setAttribute("src", "../media/restaurant.jpg");
    content.appendChild(restaurantImage);

    let contactCard = document.createElement("div");
    contactCard.innerHTML = "<h3>Contact Us</h3><p>055555555555</p><p>realmail@realmailservice.com</p>";
    contactCard.classList.add("card");
    content.appendChild(contactCard);

    let adressCard = document.createElement("div");
    adressCard.classList.add("card");
    adressCard.innerHTML = "<h3>You can (or can't?) find us here:</h3><p>Gerçekadres Cad. Aşırıgerçek Sok. Kesinlikledoğruadres Mah. 10/26 İstanbul/Almanya.</p>";
    content.appendChild(adressCard);
}

export { createHomePage };