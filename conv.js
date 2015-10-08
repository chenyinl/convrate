var office_default_cost = 30000;
var server_default_cost = 15000;
var employee_default_cost = 30000;
var webhost_default_cost = 200;
var chartProperty = {
    "caption": "Your Conversion Funnel",
    "subcaption": "From Traffic to Sales",
    "streamlinedData": "0",
    "showLegend": "1",
    "showLabels": "0",
    "showLabelsAtCenter": "1",
    "formatNumberScale": "0",
    "theme": "fint"
};

var chartProperty_standard = {
    "caption": "Standard Conversion Funnel",
    "subcaption": "From Traffic to Sales",
    "streamlinedData": "0",
    "showLegend": "1",
    "showLabels": "0",
    "showLabelsAtCenter": "1",
    "formatNumberScale": "0",
    "theme": "fint"
    //"paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
    //"bgColor": "#ffffff",
    //"decimals": "1",
    //"showBorder": "0",
    //"isHollow": "0",
    //"labelDistance": "15",
    //"is2D": "1",
    //"showLabels": "1",
    //"isSliced": "1",
    //"plotTooltext": "Success : $percentOfPrevValue",
    //"showPercentValues": "1"
};

function drawChart(){
    var traffic=parseInt(document.getElementById("trafficInput").value);
    var leads = parseInt(document.getElementById( "leadsRate").value * traffic/100);
    var sales = parseInt(document.getElementById( "salesRate" ).value * leads/100);
    var cost = parseInt(document.getElementById( "cost" ).value);
    var commission = parseInt( document.getElementById( "commission").value);
    var cost_webhost = parseInt( document.getElementById( "cost_webhost").value );
    var cost_server = parseInt( document.getElementById( "cost_server").value);
    var cost_office = parseInt( document.getElementById( "cost_office").value);
    var cost_employee = parseInt( document.getElementById( "cost_employee").value);

  var data = [
      {
          "label": "Unique Website Visits",
          "value": traffic
      }, 
      {
          "label": "Leads",
          "value": leads
      }, 
      {
          "label": "Successful Sales",
          "value": sales
      }
    ];
  var fullData = {
        "chart": chartProperty,
        "data": data
    };
  var conversionChart = new FusionCharts({
        type: 'funnel',
        renderAt: 'chartContainer',
        width: '400',
        height: '400',
        dataFormat: 'json',
        dataSource: fullData
    }).render();

  var revenue = sales * commission;
  document.getElementById( "leads" ).innerHTML = leads;
  document.getElementById( "sales" ).innerHTML = sales;
  document.getElementById( "traffic" ).innerHTML = traffic;
  //document.getElementById( "revenue" ).innerHTML = revenue;

    totalCost = cost + cost_employee + cost_office + cost_server + cost_webhost;

  document.getElementById( "net" ).innerHTML = revenue - totalCost;
}

function drawStandardChart(){
  var standardData = [
      {
          "label": "Unique Website Visits",
          "value": 1000
      }, 
      {
          "label": "Leads",
          "value": 100
      }, 
      {
          "label": "Successful Sales",
          "value": 10
      }
    ];
  var fullData = {
        "chart": chartProperty_standard,
        "data": standardData
    };
  var conversionChart = new FusionCharts({
      type: 'funnel',
      renderAt: 'chartContainer_standard',
      width: '300',
      height: '400',
      dataFormat: 'json',
      dataSource: fullData
  }).render();
}  
  

function setDefaultValue( divid, value ){
    document.getElementById( divid ).value = value;
}