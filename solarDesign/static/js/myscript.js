
////////////////////////  Saving Form Validating Functions /////////////////////////

function validBill() {
        var bill = document.forms['form']['bill'].value;
        if (isNaN(bill) || bill == null){
            $('#bill').css('border-color','#d50000');
            $('#bill').css('box-shadow', '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d50000');
        }
        else{
            $('#bill').css('border-color','transparent');
            $('#bill').css('box-shadow', 'none');
        }
    }
    function validPincode() {
        var pincode = document.forms['form']['pincode'].value;
        if (isNaN(pincode)){
            $('#pincode').css('border-color','#d50000');
            $('#pincode').css('box-shadow', '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d50000');
        }
        else{
            $('#pincode').css('border-color','transparent');
            $('#pincode').css('box-shadow', 'none');
        }
    }
    function validConnectionLoad() {
        var connection_load = document.forms['form']['connection_load'].value;
        if (isNaN(connection_load)){
            $('#connection_load').css('border-color','#d50000');
            $('#connection_load').css('box-shadow', '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d50000');
        }
        else{
            $('#connection_load').css('border-color','transparent');
            $('#connection_load').css('box-shadow', 'none');
        }
    }
    function validArea() {
        var roof_area = document.forms['form']['roof_area'].value;
        if (isNaN(roof_area)){
            $('#roof_area').css('border-color','#d50000');
            $('#roof_area').css('box-shadow', '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d50000');
        }
        else{
            $('#roof_area').css('border-color','transparent');
            $('#roof_area').css('box-shadow', 'none');
        }
    }

////////////////////////////// Charts ////////////////////////////////////////
// var chart = Morris.Line({
//     element: 'card1Chart',
//     data: [
//         {year: '2008', a: 20,b: 0},
//         {year: '2009', a: 10,b: 10},
//         {year: '2010', a: 30,b: 20},
//         {year: '2011', a: 20,b: 10},
//         {year: '2012', a: 40,b: 30}
//     ],
//     xkey: 'year',
//     ykeys: ['a','b'],
//     labels: ['Series A', 'Series B'],
//     lineColors: ['#e65100','#311b92']
//     });
function get_data(value) {
    var ret=[];
    for (var i=0;i<=5;i++){
        var v = value+i;
        ret.push({
            x: i,
            a: v,
            b: (v*1.12).toFixed(2)
        });
    }
    return ret;
}
 var graph = Morris.Line({
    element: 'card1Chart',
    data: get_data(2),
    xkey: 'x',
    ykeys: ['a','b'],
    labels: ['Before', 'After'],
    lineColors: ['black','white'],
     parseTime: false,
    });

function update() {
    graph.setData(get_data(3));
}

// function drawBillChart()
// {
//     var value1 = document.forms['form']['bill'].value;
//     value1 = Number(value1);
//     var value2 = value1-400;
//     Morris.Line({
//     element: 'card1Chart',
//     data: [
//         {year: '2001', b: value1,a: value2},
//         {year: '2002', b: value1+200,a: value2+200},
//         {year: '2003', b: value1,a: value2-100},
//         {year: '2004', b: value1,a: value2+300},
//         {year: '2005', b: value1,a: value2-100}
//     ],
//     xkey: 'year',
//     ykeys: ['b','a'],
//     labels: ['Before', 'After'],
//     lineColors: ['black','white']
//     });
// }
function getSystemCost() {
    var cost=0;
    var connection_load = document.forms['form']['connection_load'].value;
    if(connection_load >=2 && connection_load <=10){
        cost = connection_load * 90000 * 0.889
    }
    else if ( connection_load >=11 && connection_load <=29){
        cost = connection_load * 90000 * 0.87
    }
    else if ( connection_load >=30 && connection_load <=39){
        cost = connection_load * 90000 * 0.86
    }
    else if ( connection_load >=40 && connection_load <=79){
        cost = connection_load * 90000 * 0.85
    }
    else if ( connection_load >=80 && connection_load <=100){
        cost = connection_load * 90000 * 0.845
    }
    else{
        alert("Please enter connection load between 1 to 100");
    }
    return cost;
}

function drawSystemCost(cost) {
    var data1 = "<h1 style=\"color: white; font-size: 20px; font-family: 'Wellfleet'; text-align: center\">System Cost</h1><h1 style=\"color: white; font-size: 60px; font-family: 'Wellfleet';text-align: center\"><span class=\"fa fa-rupee\"></span> ";
    var data2 = "</h1>"
    document.getElementById('card2Chart').innerHTML = data1 + cost.toString() + data2;
}
$(function () {
   //drawBillChart();
   drawSystemCost(getSystemCost());
});

function generateCharts() {
    //drawBillChart();
    drawSystemCost(getSystemCost());
}


var donut = Morris.Donut({
  element: 'card5Chart',
  data: [
    {label: "Savings", value: 12},
    {label: "Payable", value: 30}
  ],
    colors: ['#e65100','#311b92']
});


function get_1year_saving_units() {
    var connection_load = document.forms['form']['connection_load'].value;
    var bill = document.forms['form']['bill'].value;
    var saving;
    if ((bill*12)/8 < connection_load*1535)
    {
        saving = 100;
    }
    else
    {
        saving = ((1535*connection_load*8)/(bill*12))*100;
        saving = saving.toFixed(2);
    }
    var ret = []
    ret.push({
        label: "Saving", value: saving
    });
    ret.push({
        label: 'Payable', value: 100-saving
    });
    return ret;
}

function updateDonut() {
    donut.setData(get_1year_saving_units());

}
$(window).resize(function () {
    update(get_data(5));
    updateDonut();
});