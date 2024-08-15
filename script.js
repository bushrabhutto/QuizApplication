
const inputs = document.querySelectorAll('input[type="radio"]');


inputs.forEach(input => {

    input.addEventListener('click', function(event) {
      
        if (input.classList.contains('rightAns')) {
            alert('The answer is correct!');
        } else {
            alert('The answer is wrong!');
        }
    });
});

