d3.json("../../samples.json").then((data) => {
    console.log(data);
   //  Create the Traces
    var trace1 = {
      x: data.samples[0].sample_values.slice(0,9),
      y: data.samples[0].otu_ids.slice(0,9),
      text: data.samples[0].otu_labels.slice(0,9),
      type: "bar",
      name: "Top_10",
      orientation: "h"
    };

    //console.log(trace1.text)

    //// Slice the first two names
    //var left = names.slice(0, 2);

    var trace2 = {
        x: data.samples[0].otu_ids,
        y: data.samples[0].sample_values,
        mode: "markers",
        marker: {
            size: data.samples[0].sample_values,
            color: data.samples[0].otu_ids
        },
        text:  data.samples[0].otu_labels
    };
    




    // Create the data array for the plot
    var data1 = [trace1];
    var data2 = [trace2];
  
    // Define the plot layout
    var layout1 = {
      title: "Top 10 OTU's / individual",
      xaxis: { title: "Occurences"}  ,
      yaxis: { title: "OTU's",
      type: "category" }
    };

    var layout2 = {
        title: "Bubble Chart",
        xaxis: { title: "OTU ID"}  ,
        yaxis: { title: "Sample Values"},
        width: 900
    };
  

    Plotly.newPlot("bar", data1, layout1);
    Plotly.newPlot("bubble", data2,layout2);


    //class="panel-body

  

  });




var id = 943;
d3.json("../../samples.json").then((data)=> {
    

    //console.log(data)

    // filter meta data info by id

    var current = data.metadata.filter(record => record.id === id);
    console.log(current);

    var demoInfo = d3.select("#sample-metadata");
    
    
    demoInfo.html("");

    
    console.log("what up");
    console.log(current);    
    for (let [key, value] of Object.entries(current[0])) {
        demoInfo.append("h5").text(key + ": " + value + "\n");
        }
});

function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var theID = d3.select("#selDataset").node().value;
    console.log(theID);
  
    // clear the input value
    d3.select("#selDataset").node().value = "";
  
    // Build the plot with the new stock
    buildPlot(theID);
    fillDemo(theID);

};

  
    

  

  