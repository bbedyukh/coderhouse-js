let firstName, lastName, age, team, operation, option, operationResult;

firstName = prompt("¿Cómo es tu nombre?");
lastName = prompt("¿Cómo es tu apellido?");
age = prompt("¿Cuántos años tenes?");
team = prompt("¿De qué equipo de fútbol sos?");

operation = confirm("Como último paso: \n¿Queres realizar una operación matemática?");

if (operation) {
    option = prompt("Ingrese la operación que quiere realizar entre dos números. \n 1. Suma \n 2. Resta \n 3. División \n 4. Multiplicación");
    operationResult = doOperation(parseInt(option));
}

function doOperation(operation) {
    let n1 = prompt("Ingrese el primer número.");
    let n2 = prompt("Ingrese el segundo número.");
    switch (operation) {
        case 1:
            return parseInt(n1) + parseInt(n2)
        case 2:
            return parseInt(n1) - parseInt(n2)
        case 3:
            return parseInt(n1) / parseInt(n2)
        case 4:
            return parseInt(n1) * parseInt(n2)
        default:
            return 'Ha ingresado una operación inexistente.'
    }
}


result = `Hola, tu nombre completo es <strong>${firstName} ${lastName}</strong>. <br />Tenes <strong>${parseInt(age)}</strong> años. <br />Sos de <strong>${team}</strong>. <br />El resultado de la operación es: <strong>${operationResult}</strong>.`;

document.write(result);
console.log(result);