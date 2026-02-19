document.getElementById("bookingForm").addEventListener("submit", function(e) {

    e.preventDefault();

    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("from", document.getElementById("from").value);
    localStorage.setItem("to", document.getElementById("to").value);
    localStorage.setItem("date", document.getElementById("date").value);
    localStorage.setItem("seats", document.getElementById("seats").value);

    window.location.href = "confirm.html";
});
