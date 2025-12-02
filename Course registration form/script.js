// Get elements
const subjects = document.querySelectorAll(".subject");
const totalBox = document.getElementById("total");
const form = document.getElementById("regForm");
const finalDiv = document.querySelector(".final");

// Function to calculate total fee
function calculateTotal() {
    let total = 0;

    subjects.forEach(sub => {
        if (sub.checked) {
            total += parseInt(sub.value);
        }
    });

    totalBox.textContent = "₹" + total;
}

// Event listener for each checkbox
subjects.forEach(sub => {
    sub.addEventListener("change", calculateTotal);
});

// Handle form submission
form.addEventListener("submit", function(e) {
    e.preventDefault();

    finalDiv.style.color = "red";   // error text in red
    finalDiv.style.padding = "10px";
    finalDiv.style.marginTop = "10px";

    const name = document.getElementById("name").value.trim();

    // Validate: Name should not be empty
    if (name === "") {
        finalDiv.innerHTML = "Please enter your name.";
        return;
    }

    // Validate: At least one subject should be selected
    let selectedSubjects = [];
    let total = 0;

    subjects.forEach(sub => {
        if (sub.checked) {
            selectedSubjects.push(sub.parentElement.innerText.trim());
            total += parseInt(sub.value);
        }
    });

    if (selectedSubjects.length === 0) {
        finalDiv.innerHTML = "Please select at least one subject.";
        return;
    }

    // If valid → show success message
    finalDiv.style.color = "black";  
    finalDiv.style.border = "1px solid #ccc";
    finalDiv.style.background = "#f4f9ff";

    finalDiv.innerHTML = `
        <h3>Registration Successful!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Subjects Selected:</strong><br> ${selectedSubjects.join("<br>")}</p>
        <p><strong>Total Fee:</strong> ₹${total}</p>
    `;
});
