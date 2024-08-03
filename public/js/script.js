
// Button Pagination
const buttonPaginations = document.querySelectorAll("[button-pagination]");
console.log(buttonPaginations);

if(buttonPaginations.length > 0){
    const url = new URL(window.location.href);
    buttonPaginations.forEach(button => {
        button.addEventListener("click", () => {
            // console.log(button);
            const page = button.getAttribute("button-pagination");
            url.searchParams.set("page", page);
            url.searchParams.set("results", 10);
            window.location.href = url.href;
        })
    })
}

// End Button Pagination