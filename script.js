window.onload = function() {
    document.getElementById('preloader').style.display = 'none';
};


document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('skillChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 85, 80, 75, 70],
                backgroundColor: ['#6c63ff', '#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.backgroundColor = "#ffd700";
            skill.style.color = "#1a1a2e";
        });
        skill.addEventListener("mouseout", () => {
            skill.style.backgroundColor = "#1a1a2e";
            skill.style.color = "white";
        });
    });
});

// contact.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const phone = form.querySelector("input[type='text']").value.trim();
        const message = form.querySelector("textarea").value.trim();
        
        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        alert("Thank you for your message, " + name + "!");
        form.reset();
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
