var maxCustomersHour;
var minCustomersHour;
var avgDonutsCustomer;

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


//By clicking a send button, store all values
//Array of Shops to display data
var donutShopList = [downtown, capitolHill, southLakeUnion, wedgewood, ballard, fremont];

//jQuery variable which will select all elements in the class shops
var $listButtons = $('.buttons');

$listButtons.on("click", function(e) {
    e.preventDefault();
    // get input button

    for (var i = 0; i < donutShopList.length; i++) {
        //i + 1 for accounting for array zero indexing
        var buttonId = '#sendButton' + (i + 1);
        var minCustId = '#minCust' + (i + 1);
        var maxCustId = '#maxCust' + (i + 1);
        var avgDonutsCustId = '#avgDonutsCust' + (i + 1);
        minCustomersHour = ($(minCustId).val());
        maxCustomersHour = ($(maxCustId).val());
        avgDonutsCustomer = ($(avgDonutsCustId).val());

        console.log(minCustomersHour);
        console.log(maxCustomersHour);
        console.log(avgDonutsCustomer);

    }

});

//Create all shop Objects
//Downtown Shop Object
var downtown = new DonutShop('Downtown', estCustomers(minCustomersHour, maxCustomersHour), avgDonutsCustomer);

//Capitol Hill Shop Object
var capitolHill = new DonutShop('Capitol Hill', estCustomers(minCustomersHour, maxCustomersHour), avgDonutsCustomer);

//South Lake Union Shop Object
var southLakeUnion = new DonutShop('South Lake Union', estCustomers(minCustomersHour, maxCustomersHour), avgDonutsCustomer);

//Wedgewood Shop Object
var wedgewood = new DonutShop('Wedgewood', estCustomers(minCustomersHour, maxCustomersHour), avgDonutsCustomer);

//Ballard Shop Object
var ballard = new DonutShop('Ballard', estCustomers(minCustomersHour, maxCustomersHour), avgDonutsCustomer);

//New Shop and the report
var fremont = new DonutShop('Fremont', estCustomers(minCustomersHour, maxCustomersHour), avgDonutsCustomer);
var master = new DonutMaster();
master.addShop(fremont);
console.log(master.shopList);
master.generateReport();

//List interactivity

//jQuery variable which will select all elements in the class shops
var $listItems = $('.shops');

//Show data by clicking on an element
$listItems.on('click', function(e) {
    //Loop which checks the array for each shop's and matches with the related number
    for (var i = 0; i < donutShopList.length; i++) {

        //i + 1 for accounting for array zero indexing
        var shopId = '#shop' + (i + 1);


        //Shows 0 as a number for each shop, this number will be changed after user input
        $(shopId).append('<span> Donuts Per Hour:' + ' ' + donutShopList[i].getDonutsPerHour() + '</span>');
        $(shopId).append('<span> Donuts Per Day: ' + ' ' + donutShopList[i].getDonutsPerDay() + '<span>');
    }

});


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
