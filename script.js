document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dogForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent real form submission

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (!name || !phone || !address) {
      alert("⚠️ Please fill out all required fields before submitting.");
      return;
    }

    alert(`✅ Thank you ${name}! Your Dog Adoption Application has been submitted.`);
    form.reset(); // clear form after submission
  });
});