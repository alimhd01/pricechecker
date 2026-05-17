let allProducts = [];
async function searchProduct() {

    const searchValue =
        document.getElementById("searchInput").value;

    const resultsDiv =
        document.getElementById("results");

    resultsDiv.innerHTML = "Loading products...";

    try {

        const response = await fetch(
            `https://dummyjson.com/products/search?q=${searchValue}`
        );

        const data = await response.json();
        allProducts = data.products;

        resultsDiv.innerHTML = "";

        if (data.products.length === 0) {

            resultsDiv.innerHTML =
                "No products found";

            return;
        }

        data.products.forEach(product => {

            const amazonPrice =
                product.price + 2000;

            const flipkartPrice =
                product.price;

            const cromaPrice =
                product.price + 1000;

            resultsDiv.innerHTML += `

                <div class="product-card">

                    <img src="${product.thumbnail}">

                    <h3>${product.title}</h3>

                    <div class="store-price">

                        🛒 Amazon:
                        ₹${amazonPrice}

                        <br><br>

                        <a
                            href="https://www.google.com/search?q=${product.title}+amazon"
                            target="_blank"
                        >

                            <button>
                                Buy Now
                            </button>

                        </a>

                    </div>

                    <div class="store-price cheapest">

                        🛍️ Flipkart:
                        ₹${flipkartPrice}

                        ✅ Cheapest

                        <br><br>

                        <a
                            href="https://www.google.com/search?q=${product.title}+flipkart"
                            target="_blank"
                        >

                            <button>
                                Buy Now
                            </button>

                        </a>

                    </div>

                    <div class="store-price">

                        🏬 Croma:
                        ₹${cromaPrice}

                        <br><br>

                        <a
                            href="https://www.google.com/search?q=${product.title}+croma"
                            target="_blank"
                        >

                            <button>
                                Buy Now
                            </button>

                        </a>

                    </div>

                </div>

            `;
        });

    } catch(error) {

        resultsDiv.innerHTML =
            "Error loading products";

        console.log(error);
    }
}
function sortProducts() {

    allProducts.sort((a, b) => a.price - b.price);

    const resultsDiv =
        document.getElementById("results");

    resultsDiv.innerHTML = "";

    allProducts.forEach(product => {

        const amazonPrice =
            product.price + 2000;

        const flipkartPrice =
            product.price;

        const cromaPrice =
            product.price + 1000;

        resultsDiv.innerHTML += `

            <div class="product-card">

                <img src="${product.thumbnail}">

                <h3>${product.title}</h3>

                <div class="store-price">

                    🛒 Amazon:
                    ₹${amazonPrice}

                </div>

                <div class="store-price cheapest">

                    🛍️ Flipkart:
                    ₹${flipkartPrice}

                    ✅ Cheapest

                </div>

                <div class="store-price">

                    🏬 Croma:
                    ₹${cromaPrice}

                </div>

            </div>

        `;
    });
}