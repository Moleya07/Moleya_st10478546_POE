The Good Foundation Website

The Beacon of Hope

The Good Foundation website is a Web Development and Design project created as part of a Portfolio of Evidence (PoE).

The website represents a non-profit organisation known as **The Good Foundation**, also referred to as **"The Beacon of Hope."** 

---

1. Project Purpose

The purpose of the website is to create an online presence for The Good Foundation and provide visitors with information about the organisation.

The website aims to:

- Introduce The Good Foundation to visitors.
- Explain the organisation's mission, vision and values.
- Provide information about community programmes.
- Display photographs of community activities.
- Encourage people to donate, volunteer or contact the organisation.
- Make information easy to access on different screen sizes.

---

2. Website Pages

The website consists of five main pages:

# Home
Introduces The Good Foundation and provides information about its values, mission and vision.

# About Us
Provides information about the organisation's story and contact details.

# Our Programmes
Provides information about community programmes such as:

- Food Distribution Drive
- Annual School Shoe Drive
- Career & Academic Development Workshop
- Mandela Day Outreach

# Gallery
Displays images showing the organisation's programmes and community activities.

# Donate
Encourages visitors to support the organisation and provides a contact form where users can enter their name, email address, phone number and message.

---

3. Technologies Used

The website was developed using:

- HTML
- CSS
- JavaScript
- Visual Studio Code

Note: An external CSS file is used to maintain consistent styling across the website.

---
4. Responsive Web Design

The website uses Responsive Web Design to improve its appearance on different screen sizes.

The following viewport setting is included in the HTML pages:

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

Media queries and breakpoints are used in the external CSS file to adjust the website for larger screen sizes.

The website follows a mobile-first approach, where the basic design is suitable for smaller screens before additional styling is applied for larger screens.

---

5. Project Structure

The project uses the following file structure:

The-Good-Foundation/
│
├── index.html
├── About_us.html
├── Our_Programmes.html
├── Gallery.html
├── Donate.html
├── style.css
│
└── images
    

---

6. Navigation

All main pages are connected using a navigation menu.

The navigation contains links to:

Home | About Us | Our Programmes | Gallery | Donate

This allows users to move between the different sections of the website easily.

---

7. Changelog

Part 1 – HTML Foundation

- Created the initial project structure.
- Created the Home page.
- Created the About Us page.
- Created the Our Programmes page.
- Created the Gallery page.
- Created the Donate page.
- Added navigation links between pages.
- Added organisation information.
- Added images and other website content.
- Added a contact form.

Part 2 – CSS Styling

- Created an external CSS stylesheet.
- Linked the stylesheet to the HTML pages.
- Added website colours and typography.
- Styled the header and navigation.
- Styled images and content sections.
- Applied the CSS Box Model.
- Added borders and border radius.
- Styled the donation/contact form.
- Added link pseudo-classes and hover effects.
- Added responsive styling.
- Added media queries and breakpoints.
- Applied a mobile-first approach.

Part 3 - JavaScript

Part 3 
Hamburger Menu & Navigation
- Added a hamburger menu button to all pages.
- Styled the hamburger icon with animated ☰ → ✕ transition.
- Wrote JavaScript to toggle the navigation menu on click.
- Added aria-label and aria-expanded attributes for screen readers.
- Ensured the menu closes automatically when a nav link is clicked.

Form Functionality & Validation
- Added a "Reason for Contact" dropdown with four options.
- Added a consent checkbox with required validation.
- Wrote JavaScript validation for all form fields.
- Added required-field checks for name, email, phone, reason, message, and consent.
- Added minimum-length validation (name ≥ 2 chars, message ≥ 10 chars).
- Added email format validation using a regular expression.
- Added phone number validation (7–15 digits with +, -, and spaces).
- Implemented real-time validation on blur and input events.
- Added inline error messages beneath each invalid field.
- Styled invalid fields with red borders and a light-red background.
- Moved focus to the first invalid field on failed submission.
- Implemented form input processing and a personalised success message.
- Added role="status" and aria-live="polite" to the success message.
- Reset the form after a successful submission.
- Auto-hid the success message after 8 seconds.

Google Map
- Added a Google Maps embed to the About Us page.
- Wrapped the map in a styled container with a gold/green border.
- Applied loading="lazy" and referrerpolicy for performance and security.
- Added contact cards (phone, email, address) above the map.

Footer
- Added a consistent footer to all five pages.
- Included three footer columns: organisation info, quick links, and contact details.
- Added a copyright bar with the current year.
- Styled the footer to match the site's brand colours.
- Made the footer responsive (1 column mobile → 3 columns tablet+).

Image Handling & Fixes
- Renamed image files to remove spaces (e.g. food drive.jpg → food-drive.jpg).
- Changed all image paths from backslashes to forward slashes.
- Applied object-fit: cover to remove white letterboxing.
- Set fixed heights on feature, programme, and gallery images.
- Built a responsive CSS Grid gallery layout (1 → 2 → 4 columns).
- Added <figure> and <figcaption> elements to each gallery image.
- Rewrote all alt attributes to be descriptive.

HTML Fixes & Validation
- Replaced all invalid <p1> tags with valid <p> tags.
- Removed the nested <body> tag from Donate.html.
- Closed all unclosed <section> and <main> tags in Gallery.html.
- Unified the header layout across all five pages.
- Standardised page titles using the format The Good Foundation | Page Name.

CSS Cleanup
- Consolidated duplicate h2 and a:link rules.
- Split the stylesheet into clearly commented sections.
- Removed unused header img and p1 selectors.
- Added focus-visible styles for keyboard users.
- Added smooth transitions to nav links, buttons, and inputs.
- Replaced decorative <hr> elements with border-bottom on sections.

---

8. References

Visual Studio Code (n.d.) Visual Studio Code for the Web. Available at: https://vscode.dev/ (Accessed: 17 September 2026).

W3Schools (2024) CSS tutorial. Available at: https://www.w3schools.com/Css/ (Accessed: 17 September 2026).

web.dev (n.d.) Learn CSS. Available at: https://web.dev/learn/css/ (Accessed: 17 September 2026).

W3Schools (2024) CSS introduction. Available at: https://www.w3schools.com/Css/css_intro.asp (Accessed: 17 September 2026).

edX (2024) Learn CSS. Available at: https://www.edx.org/learn/css (Accessed: 17 September 2026).

Google. (2026). *45 Rissik Street, Louis Trichardt, 0920* [Map]. Available at: https://www.google.com/maps (Accessed: 27 October 2026).

MDN Web Docs. (2026). *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 27 October 2026).

MDN Web Docs. (2026). *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 27 October 2026).

Mozilla. (2026). *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 27 October 2026).

W3C. (2026). *The W3C Markup Validation Service*. Available at: https://validator.w3.org/ (Accessed: 27 October 2026).

W3C. (2026). *CSS Validation Service*. Available at: https://jigsaw.w3.org/css-validator/ (Accessed: 27 October 2026).

web.dev. (2026). *Learn Accessibility*. Available at: https://web.dev/learn/accessibility (Accessed: 27 October 2026).

---

9. Author

Student: Lehlogonolo Moleya  
Institution: Rosebank International  
Project:** Web Development and Design PoE  
Year: 2026
