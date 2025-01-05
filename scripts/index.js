let url="https://honey-natural-gallium.glitch.me/signupusers"
function initializeNavigation() {
    document.getElementById('nav-container').innerHTML = `
        

        <button class="upperbtn" id="signupBtn">SIGNUP</button>
        

        <div class="form-container" id="signupForm">
                <button class="close-btn" id="closeBtn">&times;</button>
                <h2>Signup Form</h2>
                <form id=form>
                    <input id="name" type="text" placeholder="Enter your name" required>
                    <input id="email" type="email" placeholder="Enter your email" required>
                    <input id="password" type="password" placeholder="Enter your password" required>
                    <button id="submitbtn" type="submit">Submit</button>
                </form>
        </div>
        
    `;

    const signupBtn = document.getElementById('signupBtn');
    const signupForm = document.getElementById('signupForm');
    const closeBtn = document.getElementById('closeBtn');

        // Show the form
    signupBtn.addEventListener('click', () => {
        signupForm.style.display = 'block';
    });

        // Hide the form
    closeBtn.addEventListener('click', () => {
        signupForm.style.display = 'none';
        form.reset()
    });

        // Close the form if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target === signupForm) {
            signupForm.style.display = 'none';
        }
    });
}
initializeNavigation()
let form=document.getElementById("form")

form.addEventListener("submit",function(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let userobj={name,email,password}
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let user=data.filter((el)=>el.email==email)
        if (user.length!==0){
            alert("user already registerd login please")
            window.location.href="index.html"

        }else{
            fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(userobj)
            })
            .then(()=>{
                alert("Signup Successfully")
                window.location.href = "index.html"
            })
            
        }
    }).catch((err)=>{
        console.log(err)
    })
})





