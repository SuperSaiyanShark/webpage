console.log("js/script.js")

const submitBtn = document.getElementById("submitBtn");

const bgthemeToggle = document.getElementById("themeToggle");


themeToggle.addEventListener("click",function(){

    document.body.classList.toggle("dark-mode-bg");

    if (document.body.classList.contains("dark-mode-bg")){
        themeToggle.textContent = "Toggle Light Mode";
    }else{
        themeToggle.textContent = "Toggle Dark Mode";
    }
});

function toggleText(){}

const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

toggleSkills.addEventListener("click",function()
{
    skillsSection.classList.toggle("hidden")
})

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name===""||email===""){
        alert("Please fill in all required fields.");
    }else{
        alert("Thank you! Your message has been received!")
        alert("Form submitted successfully!");
    }
});

