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

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const barElements = document.querySelectorAll('.bar');
barElements.forEach((el) => observer.observe(el));

alert("Hello world! For legal purposes, my name is Zachary Kopenhaver. However, I am transgender and I go by Charlie and she/her pronouns.")


// Use event delegation to handle events on child elements
document.querySelector('#parent-element').addEventListener('click', function(event) {
    if (event.target.matches('#child-element')) {
      // Handle click event on child element
      // ...
    }
  });
  
  // Minify and compress JavaScript code using tools like UglifyJS or Terser
  
  // Optimize DOM manipulation
  function updateDOM() {
    var fragment = document.createDocumentFragment();
    // Batch changes to the DOM
    // ...
    // Append changes to the fragment
    document.querySelector('#target-element').appendChild(fragment);
  }
  
  // Use requestAnimationFrame for smoother animations
  function animate() {
    requestAnimationFrame(animate);
    // Update animation
    // ...
  }
  
  // Use touch events instead of mouse events for better touch support
  document.querySelector('#element').addEventListener('touchstart', function(event) {
    // Handle touchstart event
    // ...
  });
  
  // Use lazy loading for images
  document.querySelectorAll('img').forEach(function(img) {
    img.src = img.dataset.src;
  });