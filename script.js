let numUsers;
const NUM_JUGADORES = 23;



function csvToJson(_text) {
    let lines = _text.split('\r\n');
    const usersArray = new Array(lines.length - 1);
    const headers = lines[0].split(';');
    let result = [];
    for (let i = 0; i < usersArray.length; i++) {
        var obj = {};
        lineValues = lines[i + 1].split(';');
        for (let j = 0; j < lineValues.length; j++) {
            obj[headers[j]] = lineValues[j];
        }
        result.push(obj);
    }
    return result;
}