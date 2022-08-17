const searcjElement = document.querySelector("#search")


searcjElement.addEventListener("keyup" , event => {
    console.log(event);
    let searchQuery = event.target.value.toLowerCase()
    let itemElement = document.querySelectorAll(".item")

    for(let i = 0; i < itemElement.length; i++) {
        const cerrentItem = itemElement[i].textContent.toLowerCase()

        if(cerrentItem.includes(searchQuery)) {
            itemElement[i].style.display = "block"
        } else {
            itemElement[i].style.display = "none"
        }
    }
})