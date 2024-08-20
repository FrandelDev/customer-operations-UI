import {clear} from "./clear.js";
import {CustomerRender} from "./CustomerRender.js"


const form = document.querySelector("form");
const btnGetAll = document.querySelector("#get-all");


const url = "http://localhost:5001/api/Customer";


btnGetAll.addEventListener('click',GetAllCustomers)
async function GetAllCustomers(){
    form.style.display = "none";
    document.querySelector("#title").innerText = "Get All Customers";
    clear();
    const response = await fetch(url,{
        method: "GET",
        headers:{
            "Content-Type": "application/json; charset=utf-8",
        }
    });

    const customers = await response.json()
    document.querySelector('#Results').innerHTML = '';
    customers.data.forEach(customer => {
        
       CustomerRender(customer);
       const details = document.querySelectorAll("details");
       details.forEach(element => {
        element.firstElementChild.addEventListener('click',()=>{
            details.forEach(otherElements =>{
                if(otherElements != element){
                    otherElements.removeAttribute('open');
                }
            })
        });
       });

    });
}

export {GetAllCustomers}
