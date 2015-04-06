function drawImages(data) {
	console.log(data);
	
	var item = data.data[0];
	console.log(item);
	
	var likes = item.likes.count;
	console.log(likes);
	
	var image = item.images.standard_resolution.url;
	console.log(image);
	
	var link = item.link;
	console.log(link);
}
