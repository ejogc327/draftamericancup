userId = 1;
function choosePlayer(_userId, _playerId) {



}


fetch('../players.csv')
  .then(response => response.text())
  .then(text => console.log(text))

// readTextFile("texto.txt");
// function readTextFile(file) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function () {
//       if(rawFile.readyState === 4)  {
//         if(rawFile.status === 200 || rawFile.status == 0) {
//           var allText = rawFile.responseText;
//           console.log(allText);
//          }
//       }
//     }
//     rawFile.send(null);
//   }

/*$.ajax({
    url: '../players.csv',
    dataType: 'text',
}).done(successFunction);/* {
    console.log("Se leyó correctamente.");
};*/

function successFunction(_data) {
    console.log("Se leyó correctamente.");
}

$(document).ready(function(){
    
    $("table tr").click(function() {
        // Aquí puedes realizar alguna acción cuando se hace clic en una fila

        console.log("Fila clickeada:", $(this).find("td:nth-child(1)").text());
    });

    $("#filterName").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).find("td:eq(1)").text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#filterTeam").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).find("td:nth-child(3)").text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#filterPos").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).find("td:nth-child(4)").text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#filterVal").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).find("td").eq(4).text().toLowerCase().indexOf(value) > -1)
        });
    });
});