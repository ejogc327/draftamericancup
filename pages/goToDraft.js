window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const storedValue = urlParams.get('user');

    fetch('../tables/names.csv')
    .then(response => response.text())
    .then(text => {
        namesTable = csvToJson(text);
        let field = namesTable.find(o => o.id == storedValue);
        if (!field.teamname) {
            $('#teamname').prop('disabled', false);
        } else {
            $('#teamname').prop('disabled', true);
            $('#teamname').val(field.teamname);
        }
    
    });
    console.log("The value from page 1 is: " + storedValue);
};

$(document).ready(function(){
    
    $("#btnEditTeamName").click(function() {

        //console.log("Botón presionado");
        $('#teamname').prop('disabled', false);
        $(this).prop('disabled', true);
        $('#btnSaveTeamName').prop('disabled', false);
    });

    $("#btnSaveTeamName").click(function() {
        let teamnameTyped = $('#teamname').val();

        $('#teamname').prop('disabled', true);
        $(this).prop('disabled', true);
        $('#btnEditTeamName').prop('disabled', false);
        
        const urlParams = new URLSearchParams(window.location.search);
        const storedValue = urlParams.get('user');
        let blobData = "";
        fetch('../tables/teams.csv', {method:"POST", body:blobData})
                .then(response => console.log(response.text()))













        fetch('../tables/names.csv')
        .then(response => response.text())
        .then(text => {
            let result = csvToJson(text);
            let field = result.find(o => o.id == storedValue);
            //console.log(user);
            if (field.teamname != teamnameTyped) {
                console.log(result);
                console.log("Es diferente");
                field.teamname = teamnameTyped;
                console.log(result);
                var blob = new Blob(["This is my first text."], {type: "text/plain;charset=utf-8"});
                save(blob, './testfile1.txt');

                var data = new FormData();
                data.append("upfile", new Blob(["CONTENT"], {type: "text/plain"}));
                fetch("SERVER.SCRIPT", { method: "POST", body: data });
            }
            else {
                console.log("Es igual");
            }
        });
    });

    $("#btnToDraft").click(function() {
        let teamnameTyped = $("#teamname").val();
        let passwordTyped = $("#password").val();
        if (!email || !password) {
            alert("Entradas vacías.");
            return;
        }

        fetch('../tables/users.csv')
        .then(response => response.text())
        .then(text => {
            let result = csvToJson(text);
            let user = result.find(o => o.name == usernameTyped);
            console.log(user);
            if (user.password != passwordTyped){
                console.log("Error");
            }
            else{
                window.location.href = './goToDraft.html?user=' + encodeURIComponent(usernameTyped);
                //console.log("Login");
            }
        });
    });    
});