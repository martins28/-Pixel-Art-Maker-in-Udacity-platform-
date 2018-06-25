// Select color input
// Select size input
const a = document.getElementById('pixel_canvas');

var height ='#inputHeight';

var width = '#inputWeight';

$('#work').on('click', function (b) {

	event.preventDefault();

	makeGrid();
	// body...
})
var color = $('#colorPicker');


// When size is submitted by the user, call makeGrid()

function makeGrid() {


	 a.innerHTML = '';
    var gridHieght = height.val();
    var gridWidth = width.val();


// Your code goes here!

 var addEvent = function(cell){

 	cell.addEventListener('click',function() {

 		cell.style.backgroundColor = color.val();
 	});
 }

 	for ( i = 0; i < height; i++) {
        var row = a.insertRow(i);
        for ( j = 0; j < width; j++) {
            var cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));

		
		}
	}
}			