
const addition = (fnum, snum)=> fnum + snum;

const subtraction = (fnum, snum)=> fnum - snum;

const multiplication = (fnum, snum)=> fnum * snum;

const division = (fnum, snum)=> fnum / snum;

const setError = () => alert("El divisor debe ser mayor a 0");

//function validNumber(num) {}
const onSubmit = e =>{
    const operationType = document.getElementById("operation").value;
    const firstNumber = document.getElementById("fstNumber");
    const secondNumber = document.getElementById("secNumber");
    const inputResult = document.getElementById("result");
    
    let result;
    e.preventDefault();

    switch (operationType) {
        case "ADD":
            result = addition(+firstNumber.value, +secondNumber.value);
            break;

        case "SUB":
            result = subtraction(+firstNumber.value, +secondNumber.value);
            break;

        case "MULT":
            result = multiplication(+firstNumber.value, +secondNumber.value);
            break;

        case "DIV":
            if (+secondNumber.value > 0) {
                result = division(+firstNumber.value, +secondNumber.value);
            } else setError();
            break;

        default:
            break;
    }
    console.log(result);
    if (result != undefined) inputResult.value = result;
}