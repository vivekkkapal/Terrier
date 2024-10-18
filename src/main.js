

const selectEL = document.querySelector("select");
const CarouselContainerEl = document.querySelector(".carousel-inner");

console.log(selectEL);
console.log(CarouselContainerEl)

//https://dog.ceo/api/breeds/list/all

const Base_Url = "https://dog.ceo/api/";

// === MARK:Fetch

//Get the list of Dog breed form API
async function getDogList() {
    try {
        const response = await fetch(`${Base_Url}breeds/list/all`);  
        const data = await response.json();
        return Object.keys(data.message);
    } catch (error) {
        console.log(error);
    }
}

// Get the 10 images form API
async function getDogImage(breeds) {
    try {
        const response = await fetch(`${Base_Url}breed/${breeds}/images`);  
        const data = await response.json();
        return data.message.slice(0,10);
    } catch (error) {
        console.log(error);
    }
}

//=== MARK:Render

async function renderOption(){

    const breedlist = await getDogList();
    for(breed of breedlist){
       
        const option = document.createElement('option');
        //option.textContent = breed[0].toUpperCase()+breed[1].toLowerCase();
        option.textContent = breed;
        option.value = breed;
        selectEL.append(option);
    }
    

}
renderOption();


async function renderCarousle(breed){
   const images = await getDogImage(breed);
   console.log(images)
}


selectEL.addEventListener('change', (e)=>{
    renderCarousle(e.target.value);
})





