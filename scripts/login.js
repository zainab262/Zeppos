let loginurl="https://honey-natural-gallium.glitch.me/signupusers"
let login=document.getElementById("loginform")
login.addEventListener("submit",function(){
   event.preventDefault()
   let email=login.loginemail.value;
   let password=login.loginpass.value;
   let userobj={email,password}
   fetch(loginurl)
   .then((res)=>res.json())
   .then((data)=>{
       console.log(data)
       let user=data.filter((ele)=>ele.email==email)
       console.log(user)
       if (user.length!=0){
           if (user[0].password==password){
               alert(" Login Scuccessfully")
               form.reset()
               localStorage.setItem("loginData", JSON.stringify(user[0]))
            
           }else{
               alert("please enter the correct password")
           }
       }
       else{
           alert("Please Signup to proceed Further")
        
       }
   })
   .catch((err) => {
       console.log(err);
       alert("Something wenr wrong, Please try again later");
     });
})
