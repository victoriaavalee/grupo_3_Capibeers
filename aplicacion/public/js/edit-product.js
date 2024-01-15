let uploadButton = document.getElementById(upload-button);
let chosenImage = document.getElementById(chosen-image);
let fileNombre = document.getElementById(file-nombre);

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
    };
    fileNombre.textContent = uploadButton.files[0].name;
}