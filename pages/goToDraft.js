window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const storedValue = urlParams.get('email');
    console.log("The value from page 1 is: " + storedValue);
};