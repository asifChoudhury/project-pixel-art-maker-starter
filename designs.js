// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
form.addEventListener('submit', function(){
    event.preventDefault();
    makeGrid();
});
//get the table element
const table = document.getElementById('pixel_canvas');
//reduce frequent expensive DOM access by saving the hight and width element in variables
var height_elem = document.getElementById("input_height");
var width_elem = document.getElementById("input_width");
//create the grid
function makeGrid() {
    //clear existing grid
    table.innerHTML = '';

    let tr, td,tableRow, cell;

    //get user submitted size data
    const height = height_elem.value;
    const width = width_elem.value;
    //create the table with the requested height and width
    for(let row = 0; row < height; row++) {
        tableRow = table.insertRow(row);
        for(let col = 0; col < width; col++) {
            cell = tableRow.insertCell(col);
        }
    }
}
//fill the chosen cell with the chosen color
const colorPicker = document.getElementById('colorPicker');
table.addEventListener('click', (function(event){
    let colorValue = colorPicker.value;
    event.target.style.backgroundColor =  colorValue;
}));
