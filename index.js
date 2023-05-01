
for(var i = 0; i < 5; i++) {
     document.querySelectorAll(".btn")[i].addEventListener("mouseover", function() {
          this.style.color = "white";
          this.style.backgroundColor = "rgb(0, 123, 255)";
     });
     document.querySelectorAll(".btn")[i].addEventListener("mouseout", function() {
          this.style.color = "";
          this.style.backgroundColor = "";
     });
}

// Makinng all fields of the form as compulsory generated an alert message if the user clicks on the submit button without filling the form

// Path: index.js
function validateForm() {
     let form = document.getElementById("myForm");
     let inputs = form.getElementsByClassName("compulsary");
     
     for (let i = 0; i < inputs.length; i++) {
       if (inputs[i].value === "") {
         alert(inputs[i].placeholder + " is required");
         return false;
       }
     }
     
     if (!document.getElementById("gridCheck").checked) {
       alert("You must agree to the terms and conditions");
       return false;
     }
   
     return true;
   }
   



//If the user clicks on the submit button without filling the form, then the fields will be highlighted in red     
// Path: index.js


document.querySelector(".btn").addEventListener("click", function() {
     var fields = document.querySelectorAll(".form-control");
     for(var i = 0; i < fields.length; i++) {
          if(!fields[i].value) {
               fields[i].style.borderColor = "red";
               alert("Please fill all the fields!");
          }
     }
});

//


// Changing the background of navbar on hover
// Path: index.js

var nav = document.getElementById("nav");
var navLinks = nav.getElementsByClassName("nav-link");
for (var i = 0; i < navLinks.length; i++) {
     navLinks[i].addEventListener("mouseover", function() {
          this.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
     });
     navLinks[i].addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
     });
     }