function validate_inputPassword5(inputPassword5) {
    if (inputPassword5.value !== $("#inputPassword4").val()) {
        inputPassword5.setCustomValidity("Duplicate passwords do not match");
    } else {
        inputPassword5.setCustomValidity(""); // is valid
    }
}