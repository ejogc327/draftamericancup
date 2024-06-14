
$(document).ready(function(){
    $("#btnSignIn").click(function() {
        let email = $("#email").val();
        let password = $("#password").val();
        // if (!email || !password) {
        //     alert("Entradas vacías.");
        //     return;
        // }

        
        fetch('../users.csv')
            .then(response => response.text())
            .then(text => {
                let lines = text.split('\r\n');
                const usersArray = new Array(lines.length - 1);
                const headers = lines[0].split(';');
                //console.log(array);
                for (let i = 0; i < usersArray.length; i++) {
                    lineValues = lines[i + 1].split(';');
                    str = "";
                    //str = "{";
                    for (let j = 0; j < lineValues.length; j++) {
                        str += "'" + headers[j] + "':'" + lineValues[j] + "',";
                    }
                    str = str.slice(0, -1);
                    //str += "}";
                    usersArray[i] = str;
                }
                //str = str.slice(0, -1);
                //usersArray] = str;
                console.log(usersArray);
                //myArray = [{'id':'73','foo':'bar'},{'id':'45','foo':'bar'}, etc.]
                let obj = usersArray.find(o => o.name === 'fat');
                console.log(obj);

                //$(this).toggle($(this).find(array).text().toLowerCase().indexOf(value) > -1)
            })

        //window.location.href = './goToDraft.html?email=' + encodeURIComponent(email);
    
    });
});