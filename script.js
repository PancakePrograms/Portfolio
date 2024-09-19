const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('bar')) {
                entry.target.classList.add('bar-animation'); 
            }
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.remove('bar-animation'); 
        }
    });
});

let debounceTimer;
window.addEventListener('scroll', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const barElements = document.querySelectorAll('.bar');
barElements.forEach((el) => observer.observe(el));
}, 100); // Adjust the delay as needed
});

alert("Hello world! For legal purposes, my name is Zachary Kopenhaver. However, I am transgender and I go by Charlie and she/her pronouns.")