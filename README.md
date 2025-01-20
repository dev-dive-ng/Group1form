# Group1Form

## Overview

Group1Form is a web-based registration form application designed to collect user information, validate inputs, and provide real-time feedback. The form includes fields for personal details, a profile picture upload, and a password strength indicator.

### Steps to run:

```bash
cd group1form
```

## Features

- **Real-time Validation**: Provides immediate feedback on form fields as the user types.
- **Password Strength Indicator**: Displays the strength of the entered password.
- **Profile Picture Preview**: Allows users to preview their profile picture before submission.
- **Error Summary**: Summarizes all form errors at the top of the form.
- **Responsive Design**: Ensures the form looks good on all devices.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

To run this application, you need a web browser that supports HTML5, CSS3, and JavaScript.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/group1form.git
   ```

2. Navigate to the project directory:

   ```bash
   cd group1form
   ```

3. Open the `index.html` file in a web browser to view the form.

### Local Development

If you want to make changes or run the application locally:

1. Open the project folder in your preferred code editor.
2. Make edits to `index.html`, `styles.css`, and `script.js` as needed.
3. Refresh your browser to see changes.

## Features in Detail

### 1. Real-time Validation

The form provides real-time validation for each field as users interact with the form. Invalid inputs will be highlighted and the user is notified immediately about the error.

### 2. Password Strength Indicator

The password field has an integrated strength indicator, which checks for basic criteria like length, uppercase letters, and digits to determine if the password is weak, medium, or strong.

### 3. Profile Picture Preview

Users can upload their profile picture, and the selected image will be previewed immediately after the file is chosen. This feature is implemented using JavaScript’s `FileReader` API.

### 4. Error Summary

If there are any errors in the form, they will be summarized at the top of the form in an error summary list. This ensures users can easily review and correct their mistakes.

### 5. Responsive Design

The form layout adjusts automatically for different screen sizes, ensuring a good user experience on mobile devices, tablets, and desktops.

## Example Usage

### Password Strength Indicator Example

- **Weak**: Passwords shorter than 6 characters will be flagged as "Weak".
- **Medium**: Passwords that are 6 characters or longer but do not contain both uppercase and digits will show a "Medium" strength.
- **Strong**: Passwords that meet the criteria of being at least 6 characters long, with uppercase letters and digits, are flagged as "Strong".

### Profile Picture Example

- The user uploads a picture, and a preview will appear below the file input field. Only JPEG, PNG, and GIF files are accepted.

## Contributing

We welcome contributions to enhance the functionality and improve the user experience of the Group1Form project.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your forked repository (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the need for an easy-to-use and responsive registration form.
- Thanks to all contributors and open-source libraries used in this project.
