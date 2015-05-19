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
//Array of Shops to display data
var donutShopList = [downtown, capitolHill, southLakeUnion, wedgewood, ballard, fremont];

//jQuery variable which will select all elements in the class shops
var $listItems = $('.shops');

//Loop which checks the array for each shop's and matches with the related number
for (var i = 0; i < donutShopList.length; i++) {

//i + 1 for accounting for array zero indexing
    var shopId = '#shop' + (i + 1);


//Shows 0 as a number for each shop, this number will be changed after user input
    $(shopId).append('Donuts Per Customer: ' + ' ' + donutShopList[i].avgDonutsCustomer * 0 + ' / ');
    $(shopId).append('Donuts Per Hour: ' + ' ' + donutShopList[i].getDonutsPerHour() * 0 + ' ');

}





