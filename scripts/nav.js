let nav = `<div>
        <div class="upper">
            <div class="img">
                <img height="80px" width="80px" src="https://st2.depositphotos.com/5142301/7567/v/450/depositphotos_75675633-stock-illustration-colorful-sun-logo.jpg" alt="logo.png">
            </div>
            <div class="search">
                <input type="search" placeholder="Search for Shoes,Cloth,etc">
            </div>   
            <div class="btn">
               
                <input class="upperbtn" type="button" popovertarget="my-popover1" value="LOGIN">
                <div popover id="my-popover1" class="popup-container"> 
                    <form id="loginform">
                       
                        <h3>Login Form</h3>
                        <div class="email">
                            <label for="email">Email :</label>
                            <input id="loginemail" type="email">
                        </div>
                        <div class="password"> 
                            <label for="password">Password :</label>
                            <input id="loginpass" type="password">
                        </div>    
                        <button type="submit">Login</button>
                    </form>
                    <form id="signupform" class="hidden">
                        <label for="name">Name </label>
                        <input type="text" ><br>
                        <div class="email">
                            <label for="email">Email :</label>
                            <input type="email">
                        </div>
                        <div class="password"> 
                            <label for="password">Password :</label>
                            <input type="password">
                        </div>    
                        <button>Login</button>
                    </form>
                </div>          
                <button class="upperbtn">My Bag</button>
            </div>    
        </div>
        <div class="lower">
            <li><a href="index.html">Home</a></li>
            <li><a href="new.html">New</a></li>
            <li><a href="men.html">Men</a></li>
            <li><a href="women.html">Women</a></li>
            <li><a href="kids.html">Kids</a></li>
            <div class="helpbtn">
                <button>Help & Support</button>
            </div>    
        </div>
        
    </div>`;
document.getElementById("navbar").innerHTML = nav;
