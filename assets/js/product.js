let product = [
  {
    id: 1,
    img: "assets/img/21.jpg",
    name: "Hopscotch Baby Boy's Cotton Blend Shorts Set",
    highlights:"Material: 100% Cotton",
    price:757,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 2,
    img: "assets/img/22.jpg",
    name: "Clothing sets Full Sleeve T-shirt Pant & Cap",
    highlights:"Fit type: Regular",
    price:379,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 3,
    img: "assets/img/23.jpg",
    name: "Hopscotch Girls Polycotton Print Onesies",
    highlights:"Length: Mini",
    price:849,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 4,
    img: "assets/img/24.jpg",
    name: "Cotton T-Shirt And Shorts Clothing Set",
    highlights:"Style: Elegant",
    price:549,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 5,
    img: "assets/img/25.jpg",
    name: "Dhoti Style Salwar with Elastic Closure Dress",
    highlights:"Fit type: Regular",
    price:599,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 6,
    img: "assets/img/26.jpg",
    name: "Wish Cotton Clothing Sets For Baby Boys",
    highlights:"Closure type: Button",
    price:649,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 7,
    img: "assets/img/27.jpg",
    name: "T-shirt & Short Trendy Summer Clothing Sets",
    highlights:"Fit type: Regular",
    price:299,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 8,
    img: "assets/img/28.jpg",
    name: "INDHRANI Dungaree Set for Baby Boy and Girl ",
    highlights:"Age range: Baby",
    price:425,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 9,
    img: "assets/img/29.jpg",
    name: "Hopscotch Boys Shirt And Shorts Set",
    highlights:"Theme: Animal",
    price:749,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 10,
    img: "assets/img/30.jpg",
    name: "Neck A Line Frocks for Baby Girls (Pack of 2)",
    highlights:"Sleeve type: Long Sleeve",
    price:409,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 11,
    img: "assets/img/31.jpg",
    name: "Hopscotch Girls Polyester Text Print",
    highlights:"Material: Polyester",
    price:844,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 12,
    img: "assets/img/32.jpg",
    name: "Shorts Clothing Set for Infant Toddler Baby Girl",
    highlights:"Material type: Cotton",
    price:699,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 13,
    img: "assets/img/33.jpg",
    name: "Cotton Denim Casual Frocks Dress",
    highlights:"Length: Mini",
    price:419,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 14,
    img: "assets/img/34.jpg",
    name: "Printed Sweatshirt and Pant Set in Multi Color",
    highlights:"Pattern: All Over Print",
    price:434,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 15,
    img: "assets/img/35.jpg",
    name: "Half Sleeves T-Shirt And Jogger Kids Suit Set",
    highlights:"Fit type: Regular",
    price:580,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 16,
    img: "assets/img/36.jpg",
    name: "Polyester Checkered Shirt And Jogger Set",
    highlights:"Closure type: Button",
    price:999,
    qty: 1,
    pic: "assets/img/12.png",
  }
];

function viewProducts() {
  let tbl = "";
  product.map((val) => {
    tbl += `
       <div class = "col-3 ">
            <div class="card mb-4">
               <div class = "imgs m-3"><img src="${val.img}" class="card-img-top" style="width: 100%; height: 220px;"></div>
               <div class="card-body">
                    <h5 class="card-title">${val.name}</h5>
                    <p class="card-text mb-2">${val.highlights}</p>
                    <p class="card-text mb-2">RS.${val.price}</p>
                    <a onclick = "addToCart(${val.id})" class="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div> 
    `;
  });
  document.getElementById("product").innerHTML = tbl;
}
viewProducts();

let cart = [];
function addToCart(id) {
  let allcart = JSON.parse(localStorage.getItem("cart")) || [];
  let found = false;

  for (let i = 0; i < allcart.length; i++) {
    if (allcart[i].id == id) {
      allcart[i].qty++;
      found = true;
      break;
    }
  }
  if (!found) {
    let productToAdd = product.find((item) => item.id === id);
    if (productToAdd) {
      productToAdd.qty = 1;
      allcart.push(productToAdd);
    } else {
      console.error("Product not available!");
      return;
    }
  }
  localStorage.setItem("cart", JSON.stringify(allcart));
  alert("Added to Cart");
}
