document.getElementById('infantForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Redirect to the next page
    window.location.href = '../html/vaccine.html';
  });