document.addEventListener("DOMContentLoaded", function() {
  // Variable to store the integer
  let myInteger = 1;

  // Get the "About" list item
  const aboutItem = document.getElementById("aboutItem");

  // Add click event listener to the "About" list item
  aboutItem.addEventListener("click", function() {
      // Update the integer to 2 when "About" is clicked
      myInteger = 2;
      console.log("Integer is now:", myInteger);

      // Check if myInteger is 2
      if (myInteger === 2) {
          // Clear the existing HTML content
          document.body.innerHTML = "";

          // Create a new header element
          const header = document.createElement("h1");
          header.textContent = "Test";

          // Append the header to the body
          document.body.appendChild(header);
      }
  });
});