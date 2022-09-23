let products = {
  data: [
    {
      productName: "Audi 2022",
      category: "catgory1",
      price: "00,000,00",
      image: "Audi_SQ5_Sportback_3_0T_Prestige_quattro_2023.jpg",
    },
    {
      productName: "Audi 2022",
      category: "catgory1",
      price: "00,000,00",
      image: "Audi_Q3_2023.jpg",
    },

    {
      productName: "BMW X1",
      category: "catgory2",
      price: "00,000,00",
      image: "BMW_X1_2023_1.jpg",
    },
    {
      productName: "Land rover 2021",
      category: "catgory4",
      price: "00,000,00",
      image: "Land_Rover_Range_Rover_Westminster_2021.jpg",
    },


    {
      productName: "BMW 7 Series",
      category: "catgory4",
      price: "00,000,00",
      image: "BMW-7-Series-745e-xDrive-Plug-In-Hybrid-2021.jpg",
    },

    {
      productName: "Jeep wagoneer 2022",
      category: "catgory4",
      price: "00,000,00",
      image: "Jeep_Wagoneer_Series_III_2022.jpg",
    },


    {
      productName: "audi TTRS 25 quattro",
      category: "catgory1",
      price: "00,000,00",
      image: "Audi_TT_RS_2_5_TFSI_quattro_Heritage_Edition_2022_1.jpg",
    },
    {
      productName: "Honda hybrid 2023",
      category: "catgory3",
      price: "00,000,00",
      image: "Honda_Accord_Hybrid_Touring_2023.jpg",
    },
    {
      productName: "BMW M3",
      category: "catgory2",
      price: "00,000,00",
      image: "BMW_M3_Touring_2023.jpg",
    },
    {
      productName: "Honda pilot 2022",
      category: "catgory3",
      price: "00,000,00",
      image: "Honda_Pilot_2022.jpg",
    },

    {
      productName: "Honda AWD 2022",
      category: "catgory3",
      price: "00,000,00",
      image: "Honda_Passport_Sport_AWD_2022-.jpg",
    },

    {
      productName: "BMW X5",
      category: "catgory2",
      price: "00,000,00",
      image: "BMW_X5_M_2022_1.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "LKR:" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
