const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const one = document.querySelector('#one'); 
const two = document.querySelector('#two'); 
const three = document.querySelector('#three'); 
const four = document.querySelector('#four'); 
const five = document.querySelector('#five'); 
const rate = document.querySelector('.rate');

btn.addEventListener("click", function() {
    const containerStyles = getComputedStyle(container);
    if (containerStyles.display === 'flex' && one.checked) {
        container.style.display = 'none';
        container2.style.display = 'flex';
        rate.innerHTML = "You selected 1 out of 5";
    }

    if (containerStyles.display === 'flex' && two.checked) {
        container.style.display = 'none';
        container2.style.display = 'flex';
        rate.innerHTML = "You selected 2 out of 5";
    }

    if (containerStyles.display === 'flex' && three.checked) {
        container.style.display = 'none';
        container2.style.display = 'flex';
        rate.innerHTML = "You selected 3 out of 5";
    }

    if (containerStyles.display === 'flex' && four.checked) {
        container.style.display = 'none';
        container2.style.display = 'flex';
        rate.innerHTML = "You selected 4 out of 5";
    }

    if (containerStyles.display === 'flex' && five.checked) {
        container.style.display = 'none';
        container2.style.display = 'flex';
        rate.innerHTML = "You selected 5 out of 5";
    }
});