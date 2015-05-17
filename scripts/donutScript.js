//Function that calculates the number of estimate customers per hour
var estCustomers = function(minCustomersHour, maxCustomersHour) {
    return Math.floor(Math.random() * (maxCustomersHour - minCustomersHour + 1)) + minCustomersHour; //reinforces the minimum - push it to start at the minimum
};

function DonutMaster() {

    this.shopList = [];

    this.addShop = function(donutShop) {
        this.shopList.push(donutShop);
    };

    this.generateReport = function() {

        for (var i = this.shopList.length - 1; i >= 0; i--) {
            console.log("There is a new shop in " + this.shopList[i].name + " and it is making " + this.shopList[i].getDonutsPerDay() + " donuts per day and " + this.shopList[i].getDonutsPerHour() + " per hour.");
        }
    };

}

//Constructor function for all Donut Shops
function DonutShop(name, estCustomers, avgDonutsCustomer) {
    this.name = name;
    this.estCustomers = estCustomers;
    this.avgDonutsCustomer = avgDonutsCustomer;

    this.getDonutsPerDay = function() {
        return this.estCustomers * this.avgDonutsCustomer;
    };

    this.getDonutsPerHour = function() {
        return this.getDonutsPerDay() / 24;
    };
}

//Downtown Shop Object
var downtown = new DonutShop('Downtown', estCustomers(8, 43), 4.50);
// Select the element and store it in a variable.

//Object Output Test
// console.log(downtown);
//console.log(downtown.getDonutsPerDay());
//console.log(downtown.getDonutsPerHour());

//Number of donuts this shop needs to bake per day
console.log('The ' + downtown.name + ' shop will make ' + downtown.getDonutsPerDay() + ' donuts today.');

//Number of donuts this shop needs to bake per hour
console.log('The ' + downtown.name + ' shop will make ' + downtown.getDonutsPerHour() + ' donuts per hour today.\n');

//Capitol Hill Shop Object
var capitolHill = new DonutShop('Capitol Hill', estCustomers(4, 37), 2);

//Number of donuts this shop needs to bake per day
console.log('The ' + capitolHill.name + ' shop will make ' + capitolHill.getDonutsPerDay() + ' donuts today.');

//Number of donuts this shop needs to bake per hour
console.log('The ' + capitolHill.name + ' shop will make ' + capitolHill.getDonutsPerHour() + ' donuts per hour today.\n');

//South Lake Union Shop Object
var southLakeUnion = new DonutShop('South Lake Union', estCustomers(9, 23), 6.33);

//Number of donuts this shop needs to bake per day
console.log('The ' + southLakeUnion.name + ' shop will make ' + southLakeUnion.getDonutsPerDay() + ' donuts today.');

//Number of donuts this shop needs to bake per hour
console.log('The ' + southLakeUnion.name + ' shop will make ' + southLakeUnion.getDonutsPerHour() + ' donuts per hour today.\n');

//Wedgewood Shop Object
var wedgewood = new DonutShop('Wedgewood', estCustomers(2, 28), 1.25);

//Number of donuts this shop needs to bake per day
console.log('The ' + wedgewood.name + ' shop will make ' + wedgewood.getDonutsPerDay() + ' donuts today.');

//Number of donuts this shop needs to bake per hour
console.log('The ' + wedgewood.name + ' shop will make ' + wedgewood.getDonutsPerHour() + ' donuts per hour today.\n');

//Ballard Shop Object
var ballard = new DonutShop('Ballard', estCustomers(8, 58), 3.75);

//Number of donuts this shop needs to bake per day
console.log('The ' + ballard.name + ' shop will make ' + ballard.getDonutsPerDay() + ' donuts today.');

//Number of donuts this shop needs to bake per hour
console.log('The ' + ballard.name + ' shop will make ' + ballard.getDonutsPerHour() + ' donuts per hour today.\n');

//New Shop and the report
var fremont = new DonutShop('Fremont', estCustomers(5, 40), 6.5);
var master = new DonutMaster();
master.addShop(fremont);
console.log(master.shopList);
master.generateReport();

// Table creation
function addTable() {
    var myTableDiv = document.getElementById("donut_results");
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');

    table.border = '1';
    table.appendChild(tableBody);

    var heading = [];
    heading[0] = "";
    heading[1] = "Downtown";
    heading[2] = "Capitol Hill";
    heading[3] = "South Lake Union";
    heading[4] = "Wedgewood";
    heading[5] = "Ballard";
    heading[6] = "Fremont";

    var donutsData = [];
    donutsData[0] = new Array("Donuts per Hour", downtown.getDonutsPerHour(), capitolHill.getDonutsPerHour(), southLakeUnion.getDonutsPerHour(), southLakeUnion.getDonutsPerHour(), wedgewood.getDonutsPerHour(), ballard.getDonutsPerHour());
    donutsData[1] = new Array("Donuts per Day", downtown.getDonutsPerDay(), capitolHill.getDonutsPerDay(), southLakeUnion.getDonutsPerDay(), wedgewood.getDonutsPerDay(), ballard.getDonutsPerDay(), fremont.getDonutsPerDay());


    //TABLE COLUMNS
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH');
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    //TABLE ROWS
    for (i = 0; i < donutsData.length; i++) {
        tr = document.createElement('TR');
        for (j = 0; j < donutsData[i].length; j++) {
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(donutsData[i][j]));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table);
}

// Shake effect
jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
    this.each(function() {
        $(this).css("position", "relative");
        for (var x = 1; x <= intShakes; x++) {
            $(this).animate({
                    left: (intDistance * -1)
                }, (((intDuration / intShakes) / 4)))
                .animate({
                    left: intDistance
                }, ((intDuration / intShakes) / 2))
                .animate({
                    left: 0
                }, (((intDuration / intShakes) / 4)));
        }
    });
    return this;
};

//Shake images
$("#simpson_button").click(function() {
    $("#caption,#left_photos,#center_photos,#right_photos").shake(3, 7, 800);
});

//List interactivity
$(function() {
  var ids = '';
  var $listItems = $('#one,#two,#three,#four,#five,#six');

  $listItems.on('mouseover click', function() {
    ids = this.id;
    $listItems.children('span').remove();
    $(this).append(' <span class="priority">' + downtown.getDonutsPerHour() + '</span>');
  });

  $listItems.on('mouseout', function() {
    $(this).children('span').remove();
  });

});









