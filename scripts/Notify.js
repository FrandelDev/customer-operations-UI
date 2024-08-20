const viewsContainer = document.querySelector("#views-container");
function popupNotification(msg,error=false){
    if(error){
        viewsContainer.insertAdjacentHTML('afterbegin',`
    <div id="errorMsg">
    <img src="../images/error.png"/>
    <p><b>Something is wrong: </b>${msg}</p>
    </div>
    `);
    setTimeout(()=>document.querySelector('#errorMsg').remove(),5000);
    }
    else{
        viewsContainer.insertAdjacentHTML('afterbegin',`
    <div id="successMsg">
    <img src="../images/check.png"/>
    <p><b>Success: </b>${msg}</p>
    </div>
    `);
    setTimeout(()=>document.querySelector('#successMsg').remove(),5000);
    } 
}

export {popupNotification}