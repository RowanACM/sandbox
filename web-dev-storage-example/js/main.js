function updateImage() {
	var storage = firebase.storage();
	var pathReference = storage.ref("image.png");

	// Get the download URL
	pathReference.getDownloadURL().then(function(url) {
	  	document.getElementById("display").src = url;
	}).catch(function(error) {
		alert("error");
	});
}

function uploadImage() {
	var file = document.getElementById("input").files[0];
	var storage = firebase.storage();
	var pathReference = storage.ref("image.png");
	pathReference.put(file).then(function(snapshot) {
			alert("successful upload " + file.name);
	});
}