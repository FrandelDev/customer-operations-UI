import { CustomerRender, RenderSearchInput } from "./CustomerRender.js";
import { clear } from "./clear.js";
import { GetOneCustomer } from "./GetOneCustomer.js";
import { popupNotification } from "./Notify.js";

const btnDelete = document.querySelector("#delete");

const url = "http://localhost:5001/api/Customer/";

async function DeleteCustomer(event, id = document.querySelector('#IdCardNumberInputGenerated').value){
    if (event.preventDefault) {
        event.preventDefault();
      }
   await fetch(url + id,{
    method: "DELETE"
   })
   .then(res =>{
    if(!res.ok){
        return res.json().then(error =>{
            popupNotification(`${error.message}`,"error")
            throw new Error(error.message);
        });
    }
    else{
        popupNotification("Customer successfully deleted.")
        document.querySelector('details').remove();
        document.querySelector('#btn-delete').remove();
        return res.json();
    }
})
.catch(error => console.error('Error: '+ error.message));
}
async function confirmDelete(event, id = document.querySelector('#IdCardNumberInputGenerated').value){
    if (event.preventDefault) {
        event.preventDefault();
      }
    await GetOneCustomer({},id);
   document.querySelector('#Results').insertAdjacentHTML('beforeend',`
    <input type="button" value="Delete this customer" id="btn-delete">
    `);
    document.querySelector("#btn-delete").addEventListener('click',DeleteCustomer);
}
RenderSearchInput(btnDelete,confirmDelete,"Delete Customer");
