// ==========================
// Testimonials Slider
// ==========================

const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {

    let current = 0;

    function showTestimonial() {

        testimonials.forEach((item) => {
            item.classList.remove("active");
        });

        testimonials[current].classList.add("active");

        current++;

        if (current >= testimonials.length) {
            current = 0;
        }
    }

    setInterval(showTestimonial, 3000);
}


// ==========================
// Login Role Redirect
// ==========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const role = document.getElementById("role").value;

        if (role === "admin") {
            window.location.href = "admin-dashboard.html";
        }
        else if (role === "staff") {
            window.location.href = "staff-dashboard.html";
        }
        else {
            alert("Please select a role");
        }

    });

}


// ==========================
// Mobile Hamburger Menu
// ==========================

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
    document.body.classList.toggle("menu-open");
}
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Successfully Registered");

        window.location.href = "login.html";
    });
}
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let count = 0;
    const target = parseInt(counter.innerText);

    const updateCounter = () => {
        if(count < target){
            count += Math.ceil(target / 50);
            counter.innerText = count;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});

