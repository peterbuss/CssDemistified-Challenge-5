const nav = document.querySelector(".bottom-left-nav");

nav.addEventListener("click", (event) => {

    nav.querySelector('.active')?.classList.remove('active');
    event.target.classList.add('active');    

    // console.log(navToggle.getAttribute("aria-expanded"))
})
