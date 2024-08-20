import { clear } from "./clear.js";

const form = document.querySelector("form");
const resultSection = document.querySelector("#Results");

function CustomerRender(customer,isOpen){

    const contactFilter = customer.contacts.reduce((accumulator,current)=>{
           
        if(current.email != null && current.email != ''){
            accumulator.emails.push(current.email);
         }
         if(current.phoneNumber != null && current.phoneNumber != ''){
             accumulator.phoneNumbers.push(current.phoneNumber);
         }
         return accumulator; 
        
     },{phoneNumbers:[],emails:[]})
     
     resultSection.innerHTML += `
     <details ${isOpen?"open":''}>
     <summary><strong>${customer.firstName} ${customer.lastName}</strong></summary>
     <ul>
          <li><b>Identification Card Number: </b>${customer.customerId}</li>
         <li><b>First Name: </b> ${customer.firstName}</li>
         ${customer.secondName?`<li><b>Second Name: </b>${customer.secondName}</li>`:''}
         <li><b>Last Name: </b>${customer.lastName}</li>
         <li><b>Second Last Name: </b>${customer.secondLastName}</li>
         <li><b>Nationality: </b>${customer.nationality}</li>
         <li><b>Gender: </b>${customer.gender}</li>
         <li><b>Birth Date: </b>${customer.birthDate.slice(0,10)}</li>
         <br>
         <li><b>Address: </b>─┐
               <ol>
                 <b>Country:</b> ${customer.address.countryName}<br>
                 <b>City:</b> ${customer.address.cityName}<br>
                 <b>Region:</b> ${customer.address.regionName}<br>
                 <b>Sector:</b> ${customer.address.sectorName}<br>
                 <b>Postal Code:</b> ${customer.address.postalCode}
               </ol>
         </li><br>
         <li><b>For Contact: </b>─┐
                 <ol>
                 <b>Phone Numbers: </b>${contactFilter.phoneNumbers.map(x => ' '+x)}<br>
                 </ol>
                 <ol>
                 <b>E-mails: </b>${contactFilter.emails.map(x => ' '+x)}<br>
                 </ol>
         </li>
     </ul>
 </details>

     `
}
function RenderSearchInput(btn,fn,title){
btn.addEventListener('click',Render)
function Render(){
    form.style.display = "none";
    clear()
    resultSection.insertAdjacentHTML("beforebegin",`
    <label for="IdCardNumberInputGenerated" id="IdCardNumberGenerated">
    Identification Card Number:
    <input type="text" id="IdCardNumberInputGenerated" placeholder="000-0000000-0" required>
    <button id="btn-search">Search</button>
    </label>
    `);
   document.querySelector("#btn-search").addEventListener('click',fn);
   document.querySelector("#title").innerText = title;
}
}

export {CustomerRender, RenderSearchInput}