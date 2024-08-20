
const resultSection = document.querySelector("#Results");
const searchInput = document.querySelector("#IdCardNumberInput");

function clear(){
    resultSection.innerHTML ='<h1>No results, waiting for data to be displayed</h1>';
    const existingNode = document.querySelector('#IdCardNumberGenerated');
    if(existingNode) existingNode.remove();
    searchInput.value ='';
    searchInput.removeAttribute("disabled");
    const contactInputList = document.querySelectorAll('.contact');
     if(contactInputList.length > 1){
        for(let i = contactInputList.length-1; i>0; i--){
            document.querySelector('#contactGroup').removeChild(contactInputList[i])
        }
     }
}

export {clear}