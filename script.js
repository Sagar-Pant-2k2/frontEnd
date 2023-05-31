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
    <div>
    <input type="checkbox">Remember me on this computer
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
<h2>Member Login</h2>
</div>
<div>

<p>Access your <b>GBmart</b> account</p>
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
Array.from(document.querySelectorAll('.addToCart')).map((x)=>{
    x.addEventListener('click',()=>{
        const modalOverlay = document.querySelector('.modalOverlay');
        if (modalOverlay && document.body.contains(modalOverlay)) {
            document.body.removeChild(modalOverlay);
        }
        document.body.insertAdjacentHTML('afterbegin',registerLoginPage);
    })})
    
Array.from(document.querySelectorAll('.addToWishlist')).
    map((x)=>{
        x.addEventListener('click',()=>{
            if (modalOverlay && document.body.contains(modalOverlay)) {
                document.body.removeChild(modalOverlay);
            }
        document.body.insertAdjacentHTML('afterbegin',registerLoginPage);
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
    document.body.insertAdjacentHTML('afterbegin',registerLoginPage);
    modalOverlay = document.querySelector('.modalOverlay');
    modalOverlay.addEventListener('click',()=>{
        if (modalOverlay && document.body.contains(modalOverlay)) {
            document.body.removeChild(modalOverlay);
        }
        console.log("done");
    })
}



// function for closing modal windows




Array.from(document.querySelectorAll('.register')).map((x)=>{
    console.log("chal to ra h bro")
    x.addEventListener('click',()=>{openRegister();}) 
})
Array.from(document.querySelectorAll('.login')).map((x)=>{
    x.addEventListener('click',()=>{openLogin();})
})
