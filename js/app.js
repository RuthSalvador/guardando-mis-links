window.addEventListener('load', function () {
  var insertLinks = document.getElementById('insert-links');
  var btnSave = document.getElementById('save');
  var containerLinks = document.getElementById('container-links');

// agregar links
  function addLinks(text) {
    var newLink = document.createElement('li');
    newLink.textContent = text;

    containerLinks.insertBefore(newLink, containerLinks.childNodes[0]);
  }

  btnSave.addEventListener('click', function() {
    addLinks(insertLinks.value);
  });

});