
/**
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirm
 */
async function submitForm(username, email, password, passwordConfirm) {
    try {
      const response = await fetch(
        "https://questions.greatfrontend.com/api/questions/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            password_confirm: passwordConfirm,
          }),
        },
      );
  
      const { message } = await response.json();
      alert(message);
    } catch (_) {
      alert("Error submitting form!");
    }
  }
  
  const signUpForm = document.getElementById("signUpForm");
  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    const { username, email, password, confirmPassword } = fields;
  
  
    const passwordContainer = document.getElementById("password-container");
    if (password !== confirmPassword) {
      const error = document.createElement("p");
      error.setAttribute("id", "error");
      error.innerHTML = "Password do not match!";
      passwordContainer.appendChild(error);
    } else {
      submitForm(username, email, password, confirmPassword);
      const error = document.getElementById("error");
      error.style.color = "red";
      if (error) {
        passwordContainer.removeChild(error);
      }
    }
  });
  
  console.log("hello");
  