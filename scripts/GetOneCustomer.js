
import { CustomerRender, RenderSearchInput } from "./CustomerRender.js";
import { popupNotification } from "./Notify.js";


const btnGetOne = document.querySelector("#get-one");
const url = "http://localhost:5001/api/Customer/";

async function GetOneCustomer(event ={}, id =  document.querySelector("#IdCardNumberInputGenerated").value){
    if (event.preventDefault) {
        event.preventDefault();
      }
        const customer = await fetch(url+id)
        .then(res => {
          if(!res.ok){
            return res.json().then(error =>{
              popupNotification(`${res.status == '404' ? "Customer Not Found" : error.message}`,'error');
              document.querySelector('form').style.display='none';
              
              throw new Error(error.message);
            });
          }
          else{
            return res.json();
          }
        })
          .catch(error => console.log('Error: '+error.message));
          document.querySelector('#Results').innerHTML = '';
        CustomerRender(customer.data,true);
        return customer.data;
    }


    RenderSearchInput(btnGetOne,GetOneCustomer,"Get Customer");

export{GetOneCustomer}