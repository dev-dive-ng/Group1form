// Wait for the DOM to load before running any scripts
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const isValid = validateForm(); // Validate all fields in the form
    if (isValid) {
      // Simulate form submission with async behavior
      alert("Form submitted successfully!");
      form.reset(); // Reset the form fields
      document.getElementById("preview").src = ""; // Clear the profile picture preview
    }
  });

  // Real-time validation for form fields
  form.addEventListener("input", (e) => {
    validateField(e.target); // Validate the specific field being interacted with
    if (e.target.id === "password") {
      updatePasswordStrength(e.target.value); // Update password strength indicator if the password field is changed
    }
  });

  // Handle profile picture preview
  document.getElementById("profilePicture").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        document.getElementById("preview").src = reader.result; // Display the image preview
      };
      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  });
});

// Validate the entire form
function validateForm() {
  const inputs = document.querySelectorAll(
    "#registrationForm input, #registrationForm select"
  );
  let isValid = true; // Tracks overall form validity
  const errors = []; // Collects error messages for the summary

  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false; // Mark the form as invalid if any field fails validation
      errors.push(input.placeholder || input.name); // Add the field name to the error summary
    }
  });

  showErrorSummary(errors); // Display the error summary if there are errors
  return isValid;
}

// Validate a single field
function validateField(field) {
  const errorMessage = field.nextElementSibling; // Locate the error message element

  if (!field.checkValidity()) {
    // Use HTML5 validation rules
    showError(field, field.validationMessage || "Invalid input."); // Show the error message
    return false; // Mark the field as invalid
  }

  // Additional validation for file uploads
  if (field.type === "file" && field.files.length) {
    const file = field.files[0];
    if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      showError(field, "Only JPEG, PNG, and GIF files are allowed."); // Show file type error
      return false;
    }
  }

  hideError(field); // Hide any existing error messages if the field is valid
  return true;
}

// Update the password strength indicator
function updatePasswordStrength(password) {
  const strengthEl = document.getElementById("passwordStrength");

  if (!strengthEl) {
    console.error("Password strength indicator element not found.");
    return;
  }

  // Determine password strength
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[\d]/.test(password);
  const hasMinLength = password.length >= 6;

  let strength = "Weak";

  // Determine strength level
  if (hasMinLength && hasUppercase && hasLowercase && hasNumber) {
    strength = "Strong"; // Meets all criteria
  } else if (
    hasMinLength &&
    ((hasUppercase && hasLowercase) ||
      (hasUppercase && hasNumber) ||
      (hasLowercase && hasNumber))
  ) {
    strength = "Medium"; // Meets at least two criteria
  }

  // Update strength indicator text and color
  strengthEl.textContent = `Strength: ${strength}`;

  strengthEl.style.color =
    strength === "Strong" ? "green" : strength === "Medium" ? "orange" : "red";
}

// Show an error message for a specific field
function showError(field, message) {
  let errorMessage = field.nextElementSibling; // Locate the error message element

  if (!errorMessage || !errorMessage.classList.contains("error-message")) {
    // Create a new error message element if it doesn't exist
    errorMessage = document.createElement("span");
    errorMessage.className = "error-message";
    field.parentNode.insertBefore(errorMessage, field.nextSibling);
  }

  errorMessage.textContent = message; // Set the error message text
  field.classList.add("error"); // Apply error styling to the field
}

// Hide the error message for a specific field
function hideError(field) {
  const errorMessage = field.nextElementSibling; // Locate the error message element

  if (errorMessage && errorMessage.classList.contains("error-message")) {
    errorMessage.textContent = ""; // Clear the error message text
  }

  field.classList.remove("error"); // Remove error styling from the field
}

// Show a summary of all form errors
function showErrorSummary(errors) {
  const summary = document.getElementById("errorSummary");

  if (!summary) {
    console.error("Error summary element not found.");
    return;
  }

  if (errors.length > 0) {
    // Populate and show the error summary
    summary.innerHTML = errors
      .map((err) => `<li>${err} is invalid.</li>`)
      .join("");
    summary.classList.remove("hidden"); // Ensure the summary is visible
  } else {
    // Hide the error summary when there are no errors
    summary.classList.add("hidden");
    summary.innerHTML = ""; // Clear previous errors
  }
}
