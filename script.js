//when user send form without full all the input
//  1-the message will apper
// 2- red border will go to red
const signUpForm = document.getElementById("signupForm");
signUpForm.addEventListener('submit', (e) => {
    let valid = true;
    function validateField(input, message) {
        const errorElement = input.nextElementSibling; //refer to span
        if (!input.value.trim()) {
            console.log("wrong");
            input.classList.add("error");
            errorElement.style.display = "block";
            errorElement.textContent = message; 
            valid = false;
        } else {
            input.classList.remove("error");
            errorElement.style.display = "none";
        }
    }
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    validateField(firstName, "First Name cannot be empty");
    validateField(lastName, "Last Name cannot be empty");
    validateField(email, "Looks like this is not an email");
    validateField(password, "Password cannot be empty");
    if (!valid) {
        e.preventDefault(); // not sending the form
    }
});


console.log("hello");










































// document.querySelector("#signupForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // منع إرسال النموذج
    
//     let valid = true;

//     function validateField(input, message) {
//         let errorMessage = input.nextElementSibling; // الحصول على عنصر الخطأ المرتبط بالحقل
//         if (!input.value.trim()) {
//             input.classList.add("error");
//             errorMessage.style.display = "block";
//             errorMessage.textContent = message;
//             valid = false;
//         } else {
//             input.classList.remove("error");
//             errorMessage.style.display = "none";
//         }
//     }

//     let firstName = document.querySelector("#firstName");
//     let lastName = document.querySelector("#lastName");
//     let email = document.querySelector("#email");
//     let password = document.querySelector("#password");

//     validateField(firstName, "First Name cannot be empty");
//     validateField(lastName, "Last Name cannot be empty");
//     validateField(email, "Looks like this is not an email");
//     validateField(password, "Password cannot be empty");

//     // التحقق من صحة البريد الإلكتروني
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email.value.trim())) {
//         email.classList.add("error");
//         email.nextElementSibling.textContent = "Looks like this is not an email";
//         email.nextElementSibling.style.display = "block";
//         valid = false;
//     }

//     if (valid) {
//         alert("Form submitted successfully!");
//         document.querySelector("#signupForm").submit(); // إرسال النموذج بعد التحقق
//     }
// });
