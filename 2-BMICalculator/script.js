const form = document.querySelector('form')
const results = document.getElementById('results')
const message = document.getElementById('message')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)

    if (height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`
    }
    else if (weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            message.innerHTML = `Underweight ${bmi}`
        }
        else if (bmi > 24.9) {
            message.innerHTML = `Overweight ${bmi}`
        }
        else {
            message.innerHTML = `Normal-Range ${bmi}`
        }
    }
})