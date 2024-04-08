let menuDetails = [
    {
        id: 1,
        img: "./assets/burger.png",
        itemName: "Burger",
        price: 35,
        item: "Breakfast",
        ItemDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga corporis, hic repellat expedita atque!"
    },
    {
        id: 2,
        img: "./assets/chaumeen.png",
        itemName: "Veg Chaumin",
        price: 35,
        item: "Breakfast",
        ItemDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga corporis, hic repellat expedita atque!"
    },
    {
        id: 3,
        img: "./assets/DalFry.png",
        itemName: "Dal Fry",
        price: 35,
        item: "Breakfast",
        ItemDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga corporis, hic repellat expedita atque!"
    },
    {
        id: 4,
        img: "./assets/lachhaPrantha.png",
        itemName: "Lachha Prantha",
        price: 35,
        item: "Lunch",
        ItemDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga corporis, hic repellat expedita atque!"
    },
    {
        id: 5,
        img: "./assets/menchurian.png",
        itemName: "Manchurian",
        price: 35,
        item: "Lunch",
        ItemDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga corporis, hic repellat expedita atque!"
    },
    {
        id: 6,
        img: "./assets/nanRoti.png",
        itemName: "Nan Roti",
        price: 35,
        item: "Lunch",
        ItemDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga corporis, hic repellat expedita atque!"
    },
    {
        id: 7,
        img: "./assets/ShahiPaneer.png",
        itemName: "Shahi Paneer",
        price: 35,
        item: "Dinner",
        ItemDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga corporis, hic repellat expedita atque!"
    },
    {
        id: 8,
        img: "./assets/springRoll.png",
        itemName: "Spring Roll",
        price: 35,
        item: "Dinner",
        ItemDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga corporis, hic repellat expedita atque!"
    },
    {
        id: 9,
        img: "./assets/twaRoti.png",
        itemName: "Twa Roti",
        price: 35,
        item: "Dinner",
        ItemDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga corporis, hic repellat expedita atque!"
    },

];

let menu = document.getElementById("menu");
let filterBtns = document.querySelectorAll(".filterBtns");

// Initialize display with all menu items
window.addEventListener("DOMContentLoaded", function () {
    // console.log("Hello world")
    displayMenuItems(menuDetails);

});

filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let category = e.currentTarget.dataset.id;
        let allItem = menuDetails.filter(function(menuItems){
            if(menuItems.item === category){
                return menuItems;
            }
        })
        if(category === "All"){
            displayMenuItems(menuDetails);
        }else{
            displayMenuItems(allItem);
        }
    })
})

// Function to display menu items
function displayMenuItems(menuitems) {
    let displayMenu = menuitems.map(function (item) {
        return `<section class="menuSection">
        <div class="menuImg">
            <img src=${item.img} alt=${item.itemName}>
        </div>
        <div class="itemDetails">
            <div>
                <h3>${item.itemName}</h3>
                <p class="price">$ ${item.price}</p>
            </div><hr>
            <p>${item.ItemDetails}</p>
        </div>
    </section>`
    })
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    menu.innerHTML = displayMenu;
}
