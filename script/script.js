const numbers = document.getElementById('numbers')
const values = document.getElementById('values')
const nextNo = document.getElementById('next')
numbers.focus()
let arr = [1, 4, 7, 2, 5, 9, 3];

const btnadd = document.getElementById('add')
btnadd.addEventListener('click', () => {
    // Adds numbers to array
    let i = arr.length;
    arr[i] = numbers.value
    if (i >= 1) {
        values.innerHTML += ', '
    }
    values.innerHTML += (arr[i])
    numbers.focus()
    numbers.value = ''
    i++;
})

// adds numbers to array on enter 
numbers.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        btnadd.click()
    }
})

const btnCalc = document.getElementById('calculate')
btnCalc.addEventListener('click', () => {

    const iterator = arr.values();
    let x = iterator.next().value;
    nextNo.innerHTML += x 
})

const btnReset = document.getElementById('reset')
btnReset.addEventListener('click', () => {
    numbers.value = '';
    values.innerHTML = '';
    nextNo.innerHTML = '';
    arr = [1, 4, 7, 2, 5, 9, 3]
})

//copyright
let year = new Date().getFullYear()
document.getElementById('copyright').innerHTML = '&copyAbdus-Samad Charles ' + year;
document.getElementById('copyright').innerHTML = '&copyAbdus-Samad Charles ' + year;

// [1,4,7,2,5,9,3];