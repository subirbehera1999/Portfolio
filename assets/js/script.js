function toggleMenu() {
    const navItems = document.querySelector("nav .nav-items");
    const menubar = document.querySelector(".menubar");
    
    navItems.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    if (navItems.classList.contains("active")) {
        menubar.innerHTML = "<i class=\"fa-solid fa-xmark\" style=\"color: #ff5757;\"></i>"
    } else {
        menubar.innerHTML = "<i class=\"fa-solid fa-bars-staggered\" style=\"color: #ff5757;\"></i>"
    }

}


//expandiv functionality
document.addEventListener('DOMContentLoaded', () => {
    const expandableDivs = document.querySelectorAll('.expandiv');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the div is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetDiv = entry.target;
                const expandWidth = targetDiv.getAttribute('data-expand-width');
                targetDiv.style.width = expandWidth;
                observer.unobserve(targetDiv); // Stop observing once the animation is done
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    expandableDivs.forEach(div => {
        observer.observe(div);
    });
});


document.addEventListener('DOMContentLoaded', ()=>{
    const navbar = document.querySelector('nav');
    
    
   
    
    window.addEventListener('scroll', ()=>{
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {

           // navbar.style.background = "linear-gradient(90deg,#ff5f6d7b,#ffc3717b)"
            navbar.style.backdropFilter = "blur(15px)";
            
            

        } else {
           // navbar.style.background = 'transparent';
            
            navbar.style.backdropFilter = "blur(0px)";
            
        }
    });
});