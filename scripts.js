    document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();

      const formData = document.getElementById("apply-form");

      emailjs.sendForm("service_cgvowxv", "template_q9ga9dn", formData)
        .then(function(response) {
          alert("✅ Message sent successfully!");
          document.getElementById("apply-form").reset();
        }, function(error) {
          alert("❌ Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        });
    });
