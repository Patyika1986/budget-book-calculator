function addDoubleBorder(w,h,c1,c2) {

	var lines = new Array(
		{"w":w,"h":1,"t":0,"l":0,"c":c1},
		{"w":1,"h":h,"t":0,"l":w-1,"c":c1},
		{"w":w,"h":1,"t":h-1,"l":0,"c":c1},
		{"w":1,"h":h,"t":0,"l":0,"c":c1},
		{"w":w-2,"h":1,"t":1,"l":1,"c":c2},
		{"w":1,"h":h-2,"t":1,"l":w-2,"c":c2},
		{"w":w-2,"h":1,"t":h-2,"l":1,"c":c2},
		{"w":1,"h":h-2,"t":1,"l":1,"c":c2}
	);
			
	for ( var i = 0; i < lines.length ; i++ ) {
		var lineDiv = document.createElement("div");
		with ( lineDiv.style ) {
			position = "absolute";
			width = lines[i].w + "px";
			height = lines[i].h + "px";
			left = lines[i].l + "px";
			top = lines[i].t + "px";
			backgroundColor = lines[i].c;
			zIndex = 1000000;
		}
		document.getElementsByTagName("body")[0].insertBefore( lineDiv, document.getElementsByTagName("body")[0].firstChild );
	}

}