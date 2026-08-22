const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });

  });

}


/* QUOTE FORM */

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

  quoteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
      document.getElementById("customerName").value.trim();

    const phone =
      document.getElementById("customerPhone").value.trim();

    const service =
      document.getElementById("service").value;

    const location =
      document.getElementById("location").value.trim();

    const message =
      document.getElementById("message").value.trim();


    const whatsappMessage =
`Hello Home Heart Contractors,

I would like to request a quote.

Name: ${name}

Phone: ${phone}

Service: ${service}

Project location: ${location}

Project details:
${message}`;


    const whatsappURL =
      "https://wa.me/263786303666?text=" +
      encodeURIComponent(whatsappMessage);


    window.open(whatsappURL, "_blank");

  });

}
