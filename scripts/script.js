const modelOverlay = document.querySelector(".modal__overlay")
const cards = document.querySelectorAll(".card")
const modal = document.querySelector(".modal")

for (let card of cards){
    card.addEventListener("click", function(){
        modal.classList.remove("maximize")
        
        modelOverlay.classList.add("active")
        let cardid = card.getAttribute("id")
        modelOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cardid}`
        
    })
}

document.querySelector(".close_modal").addEventListener("click", function(){
    modelOverlay.classList.remove("active")
    modelOverlay.querySelector("iframe").src =""
})

document.querySelector(".maximize_modal").addEventListener("click", function(){
    if(modal.classList.contains("maximize")){
        modal.classList.remove("maximize")
        modal.classList.add("minimize")
    }else if ("minimize")
    {   
        modal.classList.remove("minimize")
        modal.classList.add("maximize")
    }
    
})