/* =========================================
   MIGUEL'S BAKERY
   PART 3 - JAVASCRIPT FUNCTIONALITY
   ========================================= */


/* 1. AUTOMATIC FOOTER YEAR */

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});


/* 2. SET THE MINIMUM ENQUIRY DATE */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const localDate =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    dateInput.min = localDate;
}


/* 3. PRODUCT SEARCH AND FILTERING */

const productSearch = document.getElementById("productSearch");

const productCards = document.querySelectorAll(".product-card");

const filterButtons = document.querySelectorAll(".filter-button");

const noProducts = document.getElementById("noProducts");

let selectedCategory = "all";


function filterProducts() {

    if (!productSearch) {
        return;
    }

    const searchValue = productSearch.value.toLowerCase();

    let visibleProducts = 0;

    productCards.forEach(function(card) {

        const category = card.dataset.category;

        const productName = card.textContent.toLowerCase();

        const matchesCategory =
            selectedCategory === "all" ||
            selectedCategory === category;

        const matchesSearch = productName.includes(searchValue);

        if (matchesCategory && matchesSearch) {

            card.style.display = "block";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    // Hide empty category headings.

    document.querySelectorAll(".product-category").forEach(function(section) {

        const cards = section.querySelectorAll(".product-card");

        let visibleInSection = 0;

        cards.forEach(function(card) {

            if (card.style.display !== "none") {
                visibleInSection++;
            }

        });

        section.style.display =
            visibleInSection > 0 ? "block" : "none";

    });


    if (noProducts) {

        noProducts.hidden = visibleProducts > 0;

    }

}


// Search products as the user types.

if (productSearch) {

    productSearch.addEventListener("input", filterProducts);

}


// Category filter buttons.

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedCategory = button.dataset.filter;

        filterButtons.forEach(function(item) {

            item.classList.remove("active");

        });

        button.classList.add("active");

        filterProducts();

    });

});


/* 4. PRODUCT IMAGE LIGHTBOX */

const galleryImages = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");


galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        if (!lightbox || !lightboxImage) {
            return;
        }

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("show");

        lightbox.setAttribute("aria-hidden", "false");

    });

});


function closeLightbox() {

    if (lightbox) {

        lightbox.classList.remove("show");

        lightbox.setAttribute("aria-hidden", "true");

        if (lightboxImage) {
            lightboxImage.src = "";
        }

    }

}


if (lightboxClose) {

    lightboxClose.addEventListener("click", closeLightbox);

}


if (lightbox) {

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


/* 5. ENQUIRY FORM VALIDATION */

const enquiryForm = document.getElementById("enquiryForm");

const enquiryResponse = document.getElementById("enquiryResponse");


if (enquiryForm) {

    // Preselect a category if the visitor came from Products.

    const queryProduct = new URLSearchParams(window.location.search).get("product");

    const productSelect = document.getElementById("product");

    if (queryProduct && productSelect) {

        const matchingOption = Array.from(productSelect.options).find(function(option) {

            return option.value.toLowerCase() === queryProduct.toLowerCase();

        });

        if (matchingOption) {
            productSelect.value = matchingOption.value;
        }

    }


    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!enquiryForm.checkValidity()) {

            enquiryForm.reportValidity();

            return;

        }


        const name = document.getElementById("fullname").value.trim();

        const product = document.getElementById("product").value;

        const quantity = document.getElementById("quantity").value;

        const date = document.getElementById("date").value;


        if (!name || !product || Number(quantity) < 1 || !date) {

            showMessage(
                enquiryResponse,
                "Please complete all required enquiry details.",
                "error"
            );

            return;

        }


        const chosenDate = new Date(date + "T00:00:00");

        const today = new Date();

        today.setHours(0, 0, 0, 0);


        if (chosenDate < today) {

            showMessage(
                enquiryResponse,
                "Please select today or a future collection date.",
                "error"
            );

            return;

        }


        // Display an enquiry confirmation.

        showMessage(
            enquiryResponse,
            "Thank you, " + name + "! Your enquiry for " +
            quantity + " " + product +
            " has been completed successfully. Your preferred collection date is " +
            date +
            ". Please contact Miguel's Bakery to confirm availability and pricing.",
            "success"
        );


        enquiryForm.reset();

    });

}


/* 6. CONTACT FORM VALIDATION AND EMAIL */

const contactForm = document.getElementById("contactForm");

const contactResponse = document.getElementById("contactResponse");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        if (!contactForm.checkValidity()) {

            contactForm.reportValidity();

            return;

        }


        const name = document.getElementById("contactName").value.trim();

        const email = document.getElementById("contactEmail").value.trim();

        const phone = document.getElementById("contactPhone").value.trim();

        const type = document.getElementById("messageType").value;

        const message = document.getElementById("contactMessage").value.trim();


        if (name.length < 2 || message.length < 10) {

            showMessage(
                contactResponse,
                "Please check your name and message before sending.",
                "error"
            );

            return;

        }


        // Prepare the email.

        const subject = "Miguel's Bakery - " + type;

        const emailBody =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + (phone || "Not provided") + "\n" +
            "Message Type: " + type + "\n\n" +
            "Message:\n" + message;


        const mailtoLink =
            "mailto:ST10537696@emeris.edu.za" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(emailBody);


        showMessage(
            contactResponse,
            "Your message has been prepared. Your email application will open so you can review and send it.",
            "success"
        );


        // Open the visitor's email application.

        window.location.href = mailtoLink;

    });

}


/* 7. REUSABLE MESSAGE FUNCTION */

function showMessage(element, message, type) {

    if (!element) {
        return;
    }

    element.textContent = message;

    element.className = "form-response " + type;

    element.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/* LEAFLET MAP - THREE BAKERY LOCATIONS */

const mapElement = document.getElementById("bakeryMap");

if (mapElement && typeof L !== "undefined") {

    // Create the map.

    const bakeryMap = L.map("bakeryMap");


    // Load OpenStreetMap.

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
            '&copy; OpenStreetMap contributors'
        }
    ).addTo(bakeryMap);


    // Bakery locations.

    const locations = [

        {
            name: "Miguel's Bakery - Edendale Mall",
            address: "Shop 89, Edendale Mall, Pietermaritzburg",
            lat: -29.64865,
            lng: 30.33863
        },

        {
            name: "Miguel's Bakery - Ohrtmann Road",
            address: "1 Ohrtmann Road, Pietermaritzburg",
            lat: -29.59685,
            lng: 30.37275
        },

        {
            name: "Miguel's Bakery - Scottsville",
            address: "50 Alan Paton Avenue, Scottsville",
            lat: -29.61559,
            lng: 30.39404
        }

    ];


    // Store marker locations for automatic zooming.

    const markerPositions = [];


    // Add all three markers.

    locations.forEach(function(location) {

        const marker = L.marker([
            location.lat,
            location.lng
        ]).addTo(bakeryMap);


        marker.bindPopup(
            "<strong>" + location.name + "</strong><br>" +
            location.address
        );


        markerPositions.push([
            location.lat,
            location.lng
        ]);

    });


    // Automatically display all three locations.

    const allLocations = L.latLngBounds(markerPositions);

    bakeryMap.fitBounds(allLocations, {
        padding: [40, 40]
    });

}