
    const form = document.getElementById('bmiForm'); 
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const weight = parseInt(document.querySelector('#weight').value);
        const height = parseInt(document.querySelector('#height').value);
        const result = document.querySelector('#results');


        if( (height || weight) ==='' || (height || weight) <0 || isNaN(height) || isNaN(weight)){
          result.innerHTML = 'Please enter a valid height and weight';
        } else{
            const bmi = (weight/ ((height*height)/10000)).toFixed(2);
            result.innerHTML = `Your BMI is : <span>${bmi}</span>`;
        }
    });

