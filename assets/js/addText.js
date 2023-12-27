function saveTextAsFile() {
  var textToSave =
    "Name : " +
    document.getElementById("name").value +
    "Email : " +
    document.getElementById("email").value +
    "Subject : " +
    document.getElementById("subject").value +
    "Message : " +
    document.getElementById("message").value;

  var textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });
  var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  var fileNameToSaveAs =
    document.getElementById("email").value == ""
      ? new Date().toISOString().slice(0, 19)
      : document.getElementById("email").value +
        new Date().toISOString().slice(0, 19);

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  downloadLink.href = textToSaveAsURL;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

function loadFileAsText() {
  var fileToLoad = document.getElementById("fileToLoad").files[0];

  var fileReader = new FileReader();
  fileReader.onload = function (fileLoadedEvent) {
    var textFromFileLoaded = fileLoadedEvent.target.result;
    document.getElementById("inputTextToSave").value = textFromFileLoaded;
  };
  fileReader.readAsText(fileToLoad, "UTF-8");
}
