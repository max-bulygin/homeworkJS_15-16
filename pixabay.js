function getRequestedImages(request) {
    var xhr = new XMLHttpRequest();
    var API_KEY = '3327118-7066e63c6f87011be10e115fb';
    var URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + encodeURIComponent(request);

    xhr.open('GET', URL);

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE && xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            var resData = JSON.parse(xhr.responseText);
            var preview = '';
            for (var i = 0; i < 20; i++){
                preview += '<img src="' + resData.hits[i].previewURL + '">';
            }
            var results = document.getElementById('results');
            results.innerHTML = preview;
        }
    };
}

var submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    var userRequest = document.getElementById('imageRequest').value;
    getRequestedImages(userRequest);
});