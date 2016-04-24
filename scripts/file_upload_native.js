function upload_file(file) {

  var data  = new FormData(),
      xhr   = new XMLHttpRequest();

  xhr.onloadstart = function () {

    console.log('Uploading ...', file.name);

  };

  xhr.onerror = function (e) {

    console.log( 'Error :(');

  };

  data.append('file', file, file.name);
  xhr.open('POST', '/url-to-post');
  xhr.send(data);

};

upload_file(document.getElementById('file_input').files[0]);