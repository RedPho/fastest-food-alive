function createMenuPage() {
    let content = document.querySelector("#content");
    function addFood(name, description, price, imgSrc) {
        let foodCard = document.createElement("div");
        foodCard.innerHTML = "<img width=150px height=150px src=" + imgSrc + ">" + "<div>" + "<h3>"+ name +"</h3>" + "<p>" + description + "</p>" + "</div>" + "<p class='align-self-center'><b>" + price + "</b></p>";
        foodCard.classList.add("card");
        foodCard.classList.add("flex-row");
        content.appendChild(foodCard);
    }
    addFood("Hamburger", "a delicious hamburger", "10$", "media/hamburger.jpg");
    addFood("Hamburger", "another delicious hamburger", "10$", "media/hamburger.jpg");
    addFood("Hamburger", "a suspicious hamburger", "10$", "media/hamburger.jpg");
    addFood("Hamburger", "a hamburger", "10$", "media/hamburger.jpg");
    addFood("Hamburger", "believe me, this is different", "10$", "media/hamburger.jpg");
    addFood("Hamburger", "a delicious hamburger", "10$", "media/hamburger.jpg");
}

export { createMenuPage };