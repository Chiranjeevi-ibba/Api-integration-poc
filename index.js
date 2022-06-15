const spinnerEle = document.getElementById("spinner")
const productsEle = document.getElementById("products")

const API = "https://dummyjson.com/products?limit=20"

spinnerEle.classList.add("d-block")

const ProductTemplate = (productData) => {
    return (`
        <li class="li-width d-flex flex-column justify-content-between align-items-center card p-2 m-3">
            <img class="w-100" src=${productData.images[0]} />
            <h4>${productData.title}</h4>
            <div class="d-flex justify-content-between align-items-between w-100 mt-2 mb-2">
                <h6>$${productData.price}</h6>
                <h6>${productData.rating} <i class="fa-solid fa-star"></i></h6>
            </div>
            <button class="btn btn-warning w-100 font-weight-bold mt-2 mb-2">Add to Cart</button>
            <button class="btn btn-outline-info w-100 font-weight-bold mt-2 mb-2">Buy Now</button>
        </li>
    `)
}

const HandleApiData = (data) => {
    spinnerEle.classList.remove("d-block")
    console.log(data);
    data.products.map(each => {
        productsEle.innerHTML += ProductTemplate(each)
    })
}

fetch(API)
    .then(response => response.json())
    .then(data => HandleApiData(data))