//Constructor function for all Donut Shops
function DonutShop(name, minCustomers, maxCustomers, avgDonutsCustomer, hoursDay) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgDonutsCustomer = avgDonutsCustomer;
    this.hoursDay = hoursDay;

    //Function that calculates the number of estimate customers per hour
    this.estCustomers = function() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //reinforces the minimum - push it to start at the minimum
    };

    this.donutsPerHour = function() {
        this.bakePerHour = Math.floor(this.estCustomers() * this.avgDonutsCustomer);
        return this.bakePerHour;
    };

    this.donutsPerDay = function() {
        var bakePerDay = Math.floor(this.donutsPerHour() * this.hoursDay);
        return bakePerDay;
    };


}


var downtown = new DonutShop('Downtown', 5, 10, 20, 8);

//Capitol Hill Shop Object
var capitolHill = new DonutShop('Capitol Hill', 4, 37, 2.00, 10);

//South Lake Union Shop Object
var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6.33, 24);

//Wedgewood Shop Object
var wedgewood = new DonutShop('Wedgewood', 2, 28, 1.25, 24);

//Ballard Shop Object
var ballard = new DonutShop('Ballard', 8, 58, 3.75, 24);

//New Shop and the report
var fremont = new DonutShop('Fremont', 1, 2, 3, 15);


function DonutMaster() {

    this.newList = [];

    this.addShop = function(DonutShop) {
        //adds a new DonutShop to a list //
        this.newList.push(DonutShop);
    };

    this.addTableRows = function() {
        for (var i = 0; i < this.newList.length; i++) {
            $("tbody").append("<tr id='row" + i + "'></tr>");
            $("#row" + i).append("<td>" + this.newList[i].name + "</td>");
            $("#row" + i).append("<td id='day" + i + "'></td>");
            $("#row" + i).append("<td id='hour" + i + "'></td>");
        }

    };

    this.updateReport = function() {
        //loops through the list of DonutShops and output location/donutperhour/donutperday //
        for (var i = 0; i < this.newList.length; i++) {
            $("#day" + i).text(this.newList[i].donutsPerDay());
            $("#hour" + i).text(this.newList[i].donutsPerHour());
            console.log("The " + this.newList[i].name + " shop needs to bake " +
                this.newList[i].donutsPerDay() + " donuts per day." +
                this.newList[i].donutsPerHour() + " donuts per hour.");
        }
    };

    var that = this;

    this.generateForm = function() {
        for (var i = 0; i < this.newList.length; i++) {
            var formText = "<td><form>" +
                "<input type='text' data-group='" + i + "' id='minCust" + i + "' " +
                "placeholder='minCust' name='minCust'>" +
                "</input>" +
                "<input type='text' data-group='" + i + "'" +
                "placeholder='maxCust' name='maxCust'>" +
                "</input>" +
                "<button data-group='" + i + "' id='btn" + i + "'>Regenerate</button></form></td>";
            $("#row" + i).append(formText);
            $("#btn" + i).on("click", function(e) {
                e.preventDefault();
                var group = $(this).attr("data-group");
                var minCust = $("[name='minCust'][data-group=" + group + "]").val();
                var maxCust = $("[name='maxCust'][data-group=" + group + "]").val();
                console.log("Min cust " + minCust);
                console.log("Max cust " + maxCust);
                that.newList[group].minCustomers = minCust;
                that.newList[group].maxCustomers = maxCust;

                //Only update the location associated with that form
                $("#day" + group).text(that.newList[group].donutsPerDay());
                $("#hour" + group).text(that.newList[group].donutsPerHour());
            });
        }
    };
}



var donutMaster = new DonutMaster();
donutMaster.addShop(downtown);
donutMaster.addShop(capitolHill);
donutMaster.addShop(southLakeUnion);
donutMaster.addShop(wedgewood);
donutMaster.addShop(ballard);
donutMaster.addShop(fremont);

donutMaster.addTableRows();
donutMaster.updateReport();
donutMaster.generateForm();
//console.log(downtown);

//get specific button
//get the id for the button
//use the id to access the shop in the list inside master object
//update the form values
//console log objects and check if the values were updated properly
//redraw the object values onto the page

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
