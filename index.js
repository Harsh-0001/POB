alert("Hello World!");
console.log("Hello World!");
document.getElementById("submit").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    let flag=0;
   for(var i = 0; i < 3; i++) {
        if(name == "" || email == "" || message == "") {
             alert("Please fill in all fields.");

             break;
        } else {
             alert("Thank you for your message.");
               flag=1;
    }   
    if(flag===1)
    {
     var emailAddress = "recipient@example.com";
     var emailSubject = email;
     var emailBody = "Name: " + name + "%0D%0A" + "Message: " + message + "%0D%0A" + "Email: " + email + "%0D%0A" + "I would like to be contacted";
     var mailtoUrl = "mailto:" + emailAddress + "?subject=" + emailSubject + "&body=" + emailBody;
     window.location.href = mailtoUrl;
     console.log("Message sent");
}
    }
});

