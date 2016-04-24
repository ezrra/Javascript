$.ajax({
    url: "/files/store",
    type: "POST",
    enctype: 'multipart/form-data',
    data:
    	{
    		file: $('#input-type-file-id').val()
    	},
	})
.then(
	function () {
		console.log("Upload")
	}
);