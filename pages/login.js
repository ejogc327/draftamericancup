
$(document).ready(function(){
    $("#btnSignIn").click(function() {
        let usernameTyped = $("#user").val();
        let passwordTyped = $("#password").val();
        if (!usernameTyped || !passwordTyped) {
            alert("Entradas vacías.");
            return;
        }

        fetch('../tables/users.csv')
        .then(response => response.text())
        .then(text => {
            result = csvToJson(text);
            let user = result.find(o => o.name == usernameTyped);
            console.log(user);
            if (user.password != passwordTyped){
                console.log("Error");
            }
            else{
                
                window.location.href = './goToDraft.html?user=' + encodeURIComponent(user.id);
                //console.log("Login");
            }
        });
    });    
});