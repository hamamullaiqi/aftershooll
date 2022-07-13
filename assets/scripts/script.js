const humberger = document.getElementById("humberger")
const menuList = document.getElementById("nav-menu")
const closeBtn = document.getElementById("btn-close")
const section = document.getElementsByClassName("scrollable")
const navigation = document.getElementById("navigation")


humberger.addEventListener("click", () => {
    console.log("masuk")
    menuList.classList.add("show")
    humberger.classList.add("hidden")
    closeBtn.classList.add("show")
})

closeBtn.addEventListener("click", () => {
    console.log("remove")
    menuList.classList.remove("show")
    humberger.classList.remove("hidden")
    closeBtn.classList.remove("show")
})

function scrollEvent(){
    
    for(let i=0; i < section.length; i++){
        const winHeight = window.innerHeight
        const elementTop = section[i].getBoundingClientRect().top
        const elementVisble = 100
    
    
        if(elementTop < winHeight - elementVisble){
            section[i].classList.add("active")
        } else {
            section[i].classList.remove("active")
        }
    }

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        navigation.style.display = "block";
      } else {
        navigation.style.display = "none";
      }
    
}

window.addEventListener("scroll", scrollEvent);

navigation.addEventListener("click", () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


