const numbers = document.getElementById('numbers')
const values = document.getElementById('values')
const sumvalue = document.getElementById('sum')
numbers.focus()
let arr = [];

const btnadd = document.getElementById('add')
btnadd.addEventListener('click', () => {
    // Adds numbers to array
    arr.push(parseInt(numbers.value))

    values.innerHTML = (arr)
    numbers.focus()
    numbers.value = ''
    
})

// adds numbers to array on enter 
numbers.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        btnadd.click()
    }
})

// Calculates Sum
const btnCalc = document.getElementById('calculate')
btnCalc.addEventListener('click', (sum) => {
sum = 0 
for (let i = 0 ; i < arr.length; i++) {
    sum += arr[i] 
}
sumvalue.innerHTML = sum
})

const btnReset = document.getElementById('reset')
btnReset.addEventListener('click', () => {
    numbers.focus()
    numbers.value = '';
    values.innerHTML = '';
    sumvalue.innerHTML = '';
    arr = []
})

//copyright
let year = new Date().getFullYear()
document.getElementById('copyright').innerHTML = '&copyAbdus-Samad Charles ' + year;
document.getElementById('copyright').innerHTML = '&copyAbdus-Samad Charles ' + year;
