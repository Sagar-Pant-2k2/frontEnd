const registerLoginPage = `<div class="modalOverlay">

<div class="modal">

  <div>
    <h1>GBmart</h1>
  </div>
  <img src="./logo.jpg" style="max-width: 100%; object-fit: cover; ">
 
  <span>

    <button class="login">Login</button>
    <button class="register">Register</button>
  </span>
 </div>
</div>
</div>`;
    
    const loginPage = `<div class="modalOverlay">
    
    <div class="modal">
    <div class="upperModal">
    <div>
    <h1>GBmart</h1>
    </div>
    <div>
    <h2>Member Login</h2>
    </div>
    <div>
    
    <p>Access your <b>GBmart</b> account</p>
    </div>
    </div>
    <div class="lowerModal">
    <div>
    <input type="text" placeholder="UserEmail" class="inputFields">
    </div>
    <div>
    <input type="password" placeholder="password" class="inputFields">
    </div>
    <div style="display:flex;align-items:center">
    <input type="checkbox">&nbsp&nbsp Remember me 
    </div>
    <button id="login">Login</button>
    </div>
    </div>
    </div>`;
    
    const registerPage = `<div class="modalOverlay">

<div class="modal registrationForm">
<div class="upperModal">
<div>
<h1>GBmart</h1>
</div>
<div>
<h2>Member Registration</h2>
</div>

</div>
<div class="lowerModal">
<div>
<input type="text" placeholder="UserName" class="inputFields">
</div>
<div>
<input type="email" placeholder="xyz@abc.jkl" class="inputFields">
</div>
<div>
<input type="password" placeholder="password" class="inputFields">
</div>

<button id="register">Register</button>
</div>
</div>
</div>`


const addFunctionToLoginAndRegister = ()=>{
    Array.from(document.querySelectorAll('.register')).map((x)=>{
        console.log("chal to ra h bro")
        x.addEventListener('click',()=>{openRegister();}) 
    })
    Array.from(document.querySelectorAll('.login')).map((x)=>{
        x.addEventListener('click',()=>{openLogin();})
    })
}



Array.from(document.querySelectorAll('.addToCart')).map((x)=>{
    x.addEventListener('click',()=>{
        const modalOverlay = document.querySelector('.modalOverlay');
        if (modalOverlay && document.body.contains(modalOverlay)) {
            document.body.removeChild(modalOverlay);
        }
        document.body.insertAdjacentHTML('afterbegin',registerLoginPage);
        addFunctionToLoginAndRegister();
    })})
    
Array.from(document.querySelectorAll('.addToWishlist')).
    map((x)=>{
        x.addEventListener('click',()=>{
            if (modalOverlay && document.body.contains(modalOverlay)) {
                document.body.removeChild(modalOverlay);
            }
        document.body.insertAdjacentHTML('afterbegin',registerLoginPage);
        addFunctionToLoginAndRegister();
    })})



// opening of registration window
const openRegister = ()=>{
    const modalOverlay = document.querySelector('.modalOverlay');
    if (modalOverlay && document.body.contains(modalOverlay)) {
        document.body.removeChild(modalOverlay);
    }
    document.body.insertAdjacentHTML('afterbegin',registerPage);
    modalOverlay = document.querySelector('.modalOverlay');
    modalOverlay.addEventListener('click',()=>{
        if (modalOverlay && document.body.contains(modalOverlay)) {
            document.body.removeChild(modalOverlay);
        }
        console.log("done");
    })  
}


// opening of login window
const openLogin = ()=>{
    const modalOverlay = document.querySelector('.modalOverlay');
    if (modalOverlay && document.body.contains(modalOverlay)) {
        document.body.removeChild(modalOverlay);
      }
    document.body.insertAdjacentHTML('afterbegin',loginPage);
    modalOverlay = document.querySelector('.modalOverlay');
    modalOverlay.addEventListener('click',()=>{
        if (modalOverlay && document.body.contains(modalOverlay)) {
            document.body.removeChild(modalOverlay);
        }
        console.log("done");
    })
}



// function for closing modal windows
const closeModal = ()=>{
    const modalOverlay = document.querySelector('.modalOverlay');
    if (modalOverlay && document.body.contains(modalOverlay)) {
        document.body.removeChild(modalOverlay);
    }
}


addFunctionToLoginAndRegister();
