// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



function makeGrid(h,w) {
  console.log("Height is " + h + " and width is " + w + ".");
  var tableGrid = document.getElementById("pixelCanvas");
  for (var r=0; r<h; r++) {
    var row = tableGrid.insertRow(r)
    for (var c=0; c<w; c++) {
      var column = row.insertCell(c);

    };
  };
  $('td').addClass('selectable');
  $('.selectable').click(function(event) {
    var color = $('#colorPicker').val();
    $(this).css('background-color', color);
  })
};

$('#sizePicker').submit(function(event){
  event.preventDefault();
  var height = $('#inputHeight').val();
  var width = $('#inputWeight').val();
  makeGrid(height, width);
});
