
//to store the input entered by the users
function store_input(){

  var row = document.getElementById('row').value;
  var col = document.getElementById('column').value;

  var dimension=[]
  dimension.push(row, col);
  console.log('inside store_input:', dimension)
  return dimension

}



//function to draw the table
function drawTable(row, col) {

  //storing the row and column value from the store function
  var totalRows = parseInt(store_input()[0]);
  var cellsInRow = parseInt(store_input()[1]);

    console.log('total row inside draw', totalRows)

    var div1 = document.getElementById('div1');

    // creates a <table> element
    var tbl = document.createElement("table");
    var counter=0;
    // creating rows
    for (var r = 0; r < totalRows; r++) {
        var row = document.createElement("tr");

   // create cells in row

         for (var c = 0; c < cellsInRow; c++) {
            var cell = document.createElement("td");
            cell.setAttribute("id",counter++);

            row.appendChild(cell);
        }

tbl.appendChild(row); // add the row to the end of the table body
    }

 div1.appendChild(tbl); // appends <table> into <div1>
}


/*now we call the following function so that every time we click on the 'Validate' button,
then the old table will be deleted and the new one with new values of row and column will be
put instead
*/
function  remove() {
  console.log('console in remove: ',div1.firstChild)
    //we test if the div1 already contains an element in it, if yes then remove it.
    while (div1.firstChild) {
        div1.removeChild(document.querySelector('table'));
    }
}

//the function to call when we click on the button
function function_add(){
  //remove first if it exists a table in the div1
  remove();

  //then store the values
  store_input();
  //finally call the function that draws the table
  drawTable();
}






//a variable to store the element tag of the id 'div1'
var div1  = document.getElementById('div1');


console.log('color_box1 ', document.getElementById('box1').style["background-color"])
console.log('color_box2 ', document.getElementById('box2').style["background-color"])
console.log('color_box3 ', document.getElementById('box3').style["background-color"])


let selectedTd;


let target_classes = []

console.log('outside target onclick, table=', div1.firstChild)

div1.onclick = function(event) {

  let target = event.target; // where was the click?

  //Some errors which doesnt allow me to select the wanted color, going from box1, to box2 to... box4 color works
  //but  going backwards dont.

  console.log(typeof(className))
  target_classes.push(target.className);
  if(target_classes.length>1){
    target_classes = target_classes[target_classes.length -1].split(' ')
  }

  console.log('entering target onclick, table=', div1.firstChild)
  console.log('the target class name is: ', target.className, typeof(target_classes), target_classes);
  console.log('target type', typeof(target))
  if (target.tagName == 'TD') //alert("Please click on the table cells") ; // not on TD? Then we're not interested
  {
    highlight(target); // highlight it
  }
  else {
    alert("Please click on the table cells");

  }

  var boxes = document.getElementById('color_block')
  boxes.onclick = function(event){
    let box_target = event.target;

    //make sure it was one of the colored boxes
    console.log(box_target.id)

    var selectBox = choose_colored_box(box_target);
    change_cell_color(selectBox.id, target );
  }

};


function change_cell_color(id, celltarget){
  console.log('target.id : ',celltarget.id, celltarget.class, typeof(celltarget))
  if (id == 'box1'){
    alert('yupi, box1 ')


    celltarget.classList.add('box1')

  }
  else if (id=='box2') {
    alert('that is box2')
    celltarget.classList.add('box2')

  }

  else if(id=='box3'){
    alert('baam, box3')
    celltarget.classList.add('box3')

  }
  else if (id=='box4'){
    alert('the last box')
    celltarget.classList.add('box4')
  }
}

//choose from one the the colored boxes below
function choose_colored_box(div){
  alert('Please select one color from the boxes below')
  selectedBox = div
  console.log('-inside-choose-colored-box- style is:', selectedBox.id)

  //console.log('box color id =',  selectedBox )
  return selectedBox;
}

//to highlight the selected TD
function highlight(td) {
  selectedTd = td;
  selectedTd.classList.add('highlight'); // highlight the new td
}
