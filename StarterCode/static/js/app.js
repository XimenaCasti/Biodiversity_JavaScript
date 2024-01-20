// Load the data once and initialize the dashboard
const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/\
v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Initialize the dashboard at startup
function init(data) {
    // Get the names from the data
    let names = data.names;
    let initialID = names[0];
    
    // Populate the dropdown menu with the names
    let dropdown = d3.select("#selDataset");
        
    names.forEach( id => {
        dropdown.append("option").attr("value", id).text(id);
    });
    optionChanged(initialID);
}


d3.json(URL).then(init);


function getSubjectSample(dataArray, subjectID) {
    console.log(dataArray);
    console.log(subjectID);

    let subjectSample = dataArray.find(sample => sample.id == subjectID);
    return subjectSample;  
}


function createMetadata(subjectMetadata){
    let box = d3.select("#sample-metadata");
    box.html("");
    Object.entries(subjectMetadata).forEach(([key, value]) => {
        box.append("h5").text(`${key.toUpperCase()}: ${value}`);
    });
}

function createBarChart(subjectSample){

    let top10OTUs = subjectSample.otu_ids.slice(0, 10).map(otu => `OTU ${otu}`).reverse();
    let top10Values = subjectSample.sample_values.slice(0, 10).reverse();
    let top10Labels = subjectSample.otu_labels.slice(0, 10).reverse();

    // Create the bar chart trace
    let trace = {
        x: top10Values,
        y: top10OTUs,
        text: top10Labels,
        type: "bar",
        orientation: "h"
    };

    // Define the layout 
    
    let layout = {
        title: "Top 10 OTUs"
      };
    // Plot the bar chart

    Plotly.newPlot('bar', [trace], layout);
    

}
 


function createbubblechart(subjectSample){
    console.log(`createbubblechart ${subjectSample}`);
    let sampleValues = subjectSample.sample_values;
    let otu_ids = subjectSample.otu_ids
            let data = [{
                x:otu_ids,
                y: sampleValues,
                text: subjectSample.otu_labels,
                mode: 'markers',
                marker: {
                  size: sampleValues,
                  color: otu_ids,
                  colorscale: "Earth"
                }
            }];
            var layout = {
                title: "OTU Values",
                xaxis: {title: {text: 'OTU ID'}},
                yaxis: {title: {text: 'SAMPLE VALUES'}},
                showlegend: false
            };
            
            Plotly.newPlot('bubble', data, layout);
}
 

function optionChanged(subjectID) {
    console.log(subjectID);
    d3.json(URL).then(data => {
        let subjectMetadata = getSubjectSample(data.metadata, subjectID);
        let subjectSample = getSubjectSample(data.samples, subjectID);

        createMetadata(subjectMetadata); 
        createBarChart(subjectSample);
        createbubblechart(subjectSample);


    });

}

// // Function to create the bar chart
    
    // Get the top 10 OTUs
    let top10OTUs = sample.otu_ids.slice(0, 10).map(otu => `OTU ${otu}`);
    let top10Values = sample.sample_values.slice(0, 10);
    let top10Labels = sample.otu_labels.slice(0, 10);

    // Create the bar chart trace
    let trace = {
        x: top10Values,
        y: top10OTUs,
        text: top10Labels,
        type: "bar",
        orientation: "h"
    };

    // Define the layout 
    
    let layout = {
        title: "Top 10 OTUs"
      };
    // Plot the bar chart

    Plotly.newPlot('bar', [trace], layout);
    
// }
