alert("Ola")

const produtos = [
    { id: 1, nome: 'camisa em malha', preço: 100 },
    { id: 2, nome: 'camisa polo', preço: 150 },
    { id: 3, nome: 'camisa metálica', preço: 120 },
    { id: 4, nome: 'kit camisas', preço: 120},
    { id: 5, nome: 'camisa florida', preço: 120 }
];

document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("search");
        const suggestionsList = document.getElementById("suggestions");
    
       
    
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase();
            suggestionsList.innerHTML = "";
    
            if (query) {
                const filteredCamisas = camisas.filter(camisa => camisa.toLowerCase().includes(query));
                filteredCamisas.forEach(camisa => {
                    const li = document.createElement("li");
                    li.textContent = camisa;
                    suggestionsList.appendChild(li);
                });
            }
        });

        const handleAddItem = () => {
            // inserçao
        }

        const handleRemoveItem = () => {
            // remoçao
        }

        const handleUpdateItem = () => {
            // alteraçao de quantidade
        }
    
        suggestionsList.addEventListener("click", function (event) {
            if (event.target.tagName === "LI") {
                
                searchInput.value = event.target.textContent;
                suggestionsList.innerHTML = "";
            }
            function addProductToCart(event) {
                const button = event.target
                console.log(button)
            }

            
        });
    });
    <button onclick={handleAddItem}></button>