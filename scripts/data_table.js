d3.text("compiled_job_data.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select("#jobs-data-table")
        .append("table")
        .selectAll("tr")
            .data(parsedCSV).enter()
            .append("tr")

        .selectAll("td")
            .data(function(d) { return d; }).enter()
            .append("td")
            .text(function(d) { return d; });
});
