Belly Button Biodiversity 

This interactive dashboard project focuses on exploring the Belly Button Biodiversity dataset. The dataset catalogs various microbes, known as operational taxonomic units (OTUs), that colonize human navels. Key findings indicate a small number of OTUs present in a majority of the population, while others are rare.


1. Data Integration:

I used D3.js to read the samples.json from the URL= https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
2. Visualization - Bar Chart:

I will create a horizontal bar chart with a dropdown menu. In this chart, I will display the top 10 OTUs found in an individual. For the bar chart values, I will use sample_values. The otu_ids will serve as labels for the chart, and otu_labels will be used as hovertext to provide additional information when hovering over each bar in the chart.

3. Visualization - Bubble Chart:

I will implement a bubble chart to visually represent each sample in the dataset. For this chart, the otu_ids will be used to determine the values along the x-axis. The sample_values will be utilized for two purposes: they will dictate the y-axis values and also determine the size of each bubble marker in the chart. Additionally, I'll use the otu_ids to assign different colors to the bubble markers, enhancing the visual differentiation between them. Lastly, the otu_labels will be employed as text values, providing informative labels for each bubble when interacted with or hovered over.


4. Display Metadata:

I will display the sample metadata, which includes the demographic information of each individual in the dataset. To achieve this, I will present each key-value pair from the metadata JSON object. This will involve extracting and presenting details such as age, gender, ethnicity, and any other relevant demographic information contained within the metadata.