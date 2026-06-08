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