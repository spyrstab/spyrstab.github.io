src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">


$("input:checkbox").attr("checked".flase).click(function()
{
var shcolumn= "," +$(this).attr("name");
$(shcolumn).toggle();
});


//serviceworker
if("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("sw.js").then(register=>
    {
    console.log("SW Registerd!");
    console.log(registration);

}).catch(error => {
    console.log("SW Registerd Faild!");
    console.log(error);
});
}

var array =[["2014","1280","0","1 : 1","30","10"],
["2015","576","0","1 : 2","70","50"],
["2016","210","3","42 : 15","10","5"],
["2017","91","1","52 : 30","9","5"],
["2018","15","2","56 : 30","7","5"],
["2019","6","3","38 : 19","7","0"],
["2020","6","1","18 : 11","10","0"],
["2021","5","100","17 : 90","7","14"]],
table = document.getElementById("t1");

for(var i = 1; i < table.rows.length; i++)
{
// cells
for(var j = 0; j < table.rows[i].cells.length; j++)
{
table.rows[i].cells[j].innerHTML = array[i - 1][j];
}
}

var table = document.getElementById("t1"), sumVal = 0;

for(var i = 1; i < table.rows.length; i++)
{
sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
}

document.getElementById("ΤΙΤΛΟΙ").innerHTML = "ΤΙΤΛΟΙ = " + sumVal;
console.log(sumVal);

var table = document.getElementById("t1"), sumVal0= 0;

for(var i = 1; i < table.rows.length; i++)
{
sumVal0 = sumVal0 + parseInt(table.rows[i].cells[3].innerHTML);
}

document.getElementById("ΟΛΟΙ ΟΙ ΑΓΩΝΕΣ").innerHTML = "ΑΓΩΝΕΣ = " + sumVal0;
console.log(sumVal0);


var table = document.getElementById("t1"), sumVal1 = 0;

for(var i = 1; i < table.rows.length; i++)
{
sumVal1 = sumVal1 + parseInt(table.rows[i].cells[4].innerHTML);
}
document.getElementById("ΝΙΚΕΣ").innerHTML = "ΝΙΚΕΣ = " + sumVal1;
console.log(sumVal1);

var table = document.getElementById("t1"), sumVal2 = 0;

for(var i = 1; i < table.rows.length; i++)
{
sumVal2 = sumVal2 + parseInt(table.rows[i].cells[5].innerHTML);
}
document.getElementById("ΗΤΤΕΣ").innerHTML = "ΗΤΤΕΣ= " + sumVal2;
console.log(sumVal2);
document.getElementById("ΤΙΤΛΟΙ").style.color = "red";
document.getElementById("ΝΙΚΕΣ").style.color = "red";
document.getElementById("ΗΤΤΕΣ").style.color = "red";
document.getElementById("ΟΛΟΙ ΟΙ ΑΓΩΝΕΣ").style.color = "red";
document.getElementById("ΤΙΤΛΟΙ").style.fontSize = "larger";
document.getElementById("ΝΙΚΕΣ").style.fontSize = "larger"
document.getElementById("ΗΤΤΕΣ").style.fontSize = "larger"
document.getElementById("ΟΛΟΙ ΟΙ ΑΓΩΝΕΣ").style.fontSize = "larger"

function sortTable(n) {
var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
table = document.getElementById("t1");
switching = true;
dir = "asc";

while (switching) {
switching = false;
rows = table.rows;

for (i = 1; i < (rows.length - 1); i++) {
shouldSwitch = false;
x = rows[i].getElementsByTagName("td")[n];
y = rows[i + 1].getElementsByTagName("td")[n];

if (dir == "asc") {
if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
shouldSwitch = true;
break;
}
} else if (dir == "desc") {
if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
shouldSwitch = true;
break;
}
}
}
if (shouldSwitch) {
rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
switching = true;
switchcount ++;
} else {
if (switchcount == 0 && dir == "asc") {
dir = "desc";
switching = true;
}
}
}
}
function addrow() {
    var table = document.getElementById("t1");
    var row = table.insertRow(1);
    var cell1g = row.insertCell(0);
    var cell2g = row.insertCell(1);
    var cell3g = row.insertCell(2);
    var cell4g = row.insertCell(3);
    var cell5g = row.insertCell(4);
    var cell6g = row.insertCell(5);

    cell1g.innerHTML = document.querySelector('#newCellOneText').value;
    cell2g.innerHTML = document.querySelector('#newCellTwoText').value;
    cell3g.innerHTML = document.querySelector('#newCellThreeText').value;
    cell4g.innerHTML = document.querySelector('#newCellFourText').value;
    cell5g.innerHTML = document.querySelector('#newCellFourText').value;
    cell6g.innerHTML = document.querySelector('#newCellFourText').value;
    localStorage.tableDatag=tableg.innerHTML; 
  

  }
  
  
