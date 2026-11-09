# Miguel's Bakery Website

## Project Information

**Student Name:** Somila Dlamini  
**Student Number:** ST10537696  
**Module:** WEDE5020  
**Assessment:** Website Project – Part 3  
**Project:** Miguel's Bakery

## 1. Project Overview

Miguel's Bakery is a five-page website developed for a bakery in Pietermaritzburg, KwaZulu-Natal.

The purpose of the website is to introduce the bakery, showcase its products, provide information about its services and locations, and allow customers to contact the bakery or make product enquiries.

The website uses a black-and-white design inspired by the bakery logo, complemented by cream and gold accents to create a professional bakery appearance.

## 2. Website Pages

The website consists of five main pages:

1. **Home:** Introduces Miguel's Bakery and displays featured products.
2. **About Us:** Provides information about the bakery, its mission, vision and values.
3. **Products:** Displays cakes, pastries, doughnuts, bread and other bakery products.
4. **Enquiry:** Allows customers to enquire about products and provide their preferred collection details.
5. **Contact:** Provides contact information, bakery locations, opening hours and a contact form.

## 3. Technologies Used

- HTML5 – Website structure and content.
- CSS3 – Website styling and responsive layouts.
- JavaScript – Interactive features and form validation.
- Leaflet.js – Interactive map.
- OpenStreetMap – Map information and tiles.
- Visual Studio Code – Development environment.
- GitHub – Project repository and version control.

## 4. Part 2 – CSS Styling and Responsive Design

The website was improved by applying consistent styling across all five pages.

### CSS Improvements

- Created one shared external stylesheet to control the appearance of all website pages.
- Removed the individual CSS files previously used for separate pages.
- Linked all five HTML pages to the shared stylesheet.
- Applied consistent colours, typography, spacing and layouts.
- Used a black-and-white colour scheme with cream and gold accents.
- Improved the navigation menu to maintain a consistent appearance.
- Added hover effects and transitions.
- Used Flexbox and CSS Grid for page layouts.
- Added media queries to improve the website on desktop, tablet and mobile screens.

Using one shared stylesheet makes it easier to maintain the website because changes to common elements can be applied across all pages.

## 5. Part 3 – JavaScript Functionality

JavaScript was introduced to improve the website's functionality and user experience.

### Interactive Features

- Added product search functionality.
- Added category filtering for bakery products.
- Implemented a lightbox gallery that allows visitors to enlarge product photographs.
- Added image animations when visitors scroll through the website.
- Added automatic updating of the footer year.
- Improved the homepage hero section by placing the welcome message and buttons over a bakery background photograph.
- Removed the changing-image behaviour from the hero section to keep the background stable.

### Enquiry Form

The enquiry form includes:

- Customer name.
- Email address.
- Phone number.
- Product selection.
- Quantity.
- Preferred collection date.
- Additional message.

JavaScript validation checks the information entered before displaying an enquiry confirmation.

### Contact Form

The contact form allows customers to provide their contact information and write a general message.

JavaScript validates the information and prepares an email containing the customer's details using a mailto link.

The customer must still send the email through their email application.

### Interactive Map

Leaflet.js and OpenStreetMap were used to create an interactive map displaying three bakery location markers:

1. Shop 89, Edendale Mall.
2. 1 Ohrtmann Road.
3. 50 Alan Paton Avenue, Scottsville.

Visitors can select the markers to view the corresponding location information.

## 6. Search Engine Optimisation (SEO)

The website includes SEO improvements to help search engines understand its content and structure.

These improvements include:

- Descriptive page titles.
- Meta descriptions.
- Appropriate heading structures.
- Descriptive image filenames and alternative text.
- Internal links between website pages.
- Responsive layouts for mobile devices.
- A robots.txt file.
- An XML sitemap.

## 7. Project Structure

The project is organised into the following structure:

```text
Miguel's Website/
│
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
│
├── CSS/
│   └── styles.css
│
├── Javascript/
│   └── script.js
│
├── images/
│   ├── logo.png
│   ├── bakery-hero.jpg
│   ├── cake.jpeg
│   ├── pastries.jpg
│   ├── donuts.jpeg
│   └── bread.jpeg
│
├── robots.txt
├── sitemap.xml
└── README.md
```

The images folder also contains the additional product and bakery photographs used throughout the website.

## 8. Setup and Viewing Instructions

1. Download or clone the project repository from GitHub.
2. Open the project folder in Visual Studio Code.
3. Check that the HTML, CSS, JavaScript and image files are in their correct folders.
4. Open `index.html` using the Live Server extension.
5. Use the navigation menu to move between the five website pages.
6. Test the product search, category filters, image gallery and forms.
7. Visit the Contact page to test the interactive map.

An internet connection is required for the Leaflet map and OpenStreetMap tiles.

## 9. Testing

The website should be tested on different screen sizes using the browser's developer tools.

Testing includes:

- Navigation between all five pages.
- Product search and category filtering.
- Opening and closing the lightbox.
- Enquiry form validation.
- Contact form validation and email preparation.
- Display of all three map markers.
- Image loading and animations.
- Desktop, tablet and mobile layouts.

## 10. Changelog

### Version 1.0 – Part 1: HTML Development

- Created the initial five-page website.
- Added the website navigation menu.
- Added headings, paragraphs, images, lists and forms.
- Created the initial README documentation.

### Version 2.0 – Part 2: CSS Styling and Responsive Design

- Created external CSS styling for the website.
- Consolidated the website styling into one shared CSS stylesheet.
- Removed the individual CSS files previously used for separate pages.
- Linked all five HTML pages to the shared stylesheet.
- Introduced a consistent black-and-white design with cream and gold accents.
- Improved the navigation menu across all pages.
- Added typography, spacing, borders, shadows and hover effects.
- Used Flexbox and CSS Grid to improve the layout.
- Added responsive styling using media queries.
- Improved the appearance of the Home, About Us, Products, Enquiry and Contact pages.

### Version 3.0 – Part 3: Functionality and SEO

- Added JavaScript functionality to improve website interaction.
- Implemented product search and category filtering.
- Added a lightbox feature to enlarge product images.
- Added image animations and transitions.
- Updated the homepage hero section to use a bakery photograph as its background.
- Positioned the welcome heading, description and buttons over the hero background.
- Improved the hero section to prevent unwanted image flickering.
- Added JavaScript validation to the enquiry form.
- Added JavaScript validation and email preparation to the contact form.
- Added a Leaflet interactive map displaying three bakery locations.
- Added automatic updating of the footer year.
- Created a robots.txt file.
- Created an XML sitemap.
- Improved SEO through page titles, descriptions, image alternative text and internal links.

## 11. References

### HTML, CSS and JavaScript

- MDN Web Docs. HTML, CSS and JavaScript documentation.  
  https://developer.mozilla.org/

### Leaflet and Interactive Maps

- Leaflet. Quick Start Guide.  
  https://leafletjs.com/examples/quick-start/

- OpenStreetMap. Copyright and attribution information.  
  https://www.openstreetmap.org/copyright

### Sitemap and Robots.txt

- Google Search Central. Build and submit a sitemap.  
  https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

- Google Search Central. Introduction to robots.txt.  
  https://developers.google.com/search/docs/crawling-indexing/robots/intro

### YouTube Learning References

- YouTube. XML Sitemap creation and SEO tutorials.  
  https://www.youtube.com/results?search_query=XML+sitemap+creation+SEO+tutorial

- YouTube. Robots.txt file creation and SEO tutorials.  
  https://www.youtube.com/results?search_query=robots.txt+file+SEO+tutorial

- YouTube. JavaScript image gallery and lightbox tutorials.  
  https://www.youtube.com/results?search_query=HTML+CSS+JavaScript+image+gallery+lightbox+tutorial

- YouTube. Leaflet.js interactive map tutorials.  
  https://www.youtube.com/results?search_query=Leaflet.js+interactive+map+tutorial

*Learning resources are listed for the relevant techniques. Individual videos should be credited according to the tutorials actually consulted.*
