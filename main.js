google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyBer7RncpNU1iKU3gQu2TULHjUk4pYpT6s'
  });
  google.charts.setOnLoadCallback(drawMarkersMap);

   function drawMarkersMap() {
   var data = google.visualization.arrayToDataTable([
     ['City',   'Population'],
     ['Auckland',   1534700],
     ['Wellington', 412500],
     ['Christchurch',   396700],
     ['Tauranga',   137900],
     ['Napier-Hastings',    133000],
     ['Dunedin',    120200],
     ['Palmerston North',   85300],
     ['Nelson', 66700],
     ['Rotorua', 58800],
     ['Whangarei',  57700],
     ['New Plymouth',  57500],
     ['Invercargill', 50800],
     ['Whanganui',  40300],
     ['Gisborne',  36600]
   ]);

   var options = {
     region: 'NZ',
     resolution:'provinces',
     displayMode: 'markers',
     backgroundColor: '#7994df',
     colorAxis: {colors: ['#D81919', '#931111']}
   };

   var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 };

////////////////////////////////////////

   google.charts.setOnLoadCallback(drawRegionsMap);

   function drawRegionsMap() {
     var data = google.visualization.arrayToDataTable([
        ['Region',   'Average Weekly Income'],
     ['Northland', 665],
     ['Auckland',  868],
     ['Waikato', 760],
     ['Bay of Plenty', 756],
     ['Gisborne',  736],
     ['NZ-HKB', 736],
     ['Taranaki',  809],
     ['Manawatu-Wanganui',	691],
     ['Wellington', 945],
     ['Nelson',  731],
     ['Tasman',	731],
     ['Marlborough', 731],
     ['West Coast',  731],
     ['Canterbury',  799],
     ['Otago', 695],
     ['Southland', 719]
     ]);

     var options = {
       region: 'NZ',
       colorAxis: {colors: ['#00853f', '#5ae787']},
       backgroundColor: '#81d4fa',
       resolution:'provinces',
       defaultColor: '#f5f5f5',
     };

     var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
     chart.draw(data, options);
   };