Name
Walmart Stores Dashboard

Description
This dashboard is addressed to answer some main questions to take important decisions related to the dataset provided by Walmart.

Provider: Walmart Stores

Input Data: Store, Date, Weekly_Sales, Holiday_Flag, Temperature, Fuel_Price, Unemployment, Timestamp
- Store
Store Numbers ranging from 1 to 10
- Date
The Week of Sales. It is in the format of mm-dd-yyyy. The date starts from 01-01-2023 to
01-01-2024.
- Weekly_Sales
The sales of the given store in the given week
- Holiday_Flag
If the week has a special Holiday or not.
1-The week has a Holiday
0-Fully working week
- Temperature
Average Temperature of the week of sales
- Fuel_Price
Price of the Fuel in the region of the given store
- Unemployment
Unemployment of the given store region

Used Tools:

Amcharts 5
SQL
JavaScript
Flask
Python
HTML
CSS
Questions Answered By This Dashboard:

My dashboard should answer the following:
- Avg Weekly Sales Per Store
- Proportion of Weekly Sales by Holiday vs. Non-Holiday
- Weekly Sales by Temperature and Store
- Fuel Price Variation by StoreDashboard Details

Dashboard Details:
![Dashboard](https://github.com/AbdallaTamer/Walmart-Stores-Analysis/assets/146376543/419a939d-5ebd-4cdc-9ee3-9a1e94dcc074)

Chart 1:
- Chart Details:
1. Chart Type: Bar Chart
2. Title: Average Weekly Sales per Store
3. Colors: Blue
4. Axis Titles:
 - X-Axis: Store
   	- Y-Axis: Mean Weekly Sales
6. Tooltip: Displays the value of Mean Weekly Sales for each bar.

- Questions the Chart Will Answer:
- What is the average weekly sales for each store?

- How the Chart Will Show Up:
- Timing: The chart is generated and displayed as soon as the DOM content is loaded.
- Frequency: The chart will always show up when the page is loaded or refreshed.

- Why the Selected Chart Type:
- Reasoning: A bar chart is chosen to visualize the average weekly sales per store. This choice is effective for comparing values across different stores. The length of each bar represents the mean weekly sales, making it easy to identify patterns and variations between stores.
- Alternatives Considered: A line chart could have been considered, but a bar chart is preferred when dealing with distinct categories (stores, in this case) and their corresponding values. The visual separation of bars makes it easier to interpret the average sales for each store.


Chart 2:
- Chart Details:
1. Chart Type: Pie Chart
2. Title: Proportion of Weekly Sales by Holiday vs. Non-Holiday
3. Colors: Blues
4. Legend: A legend is created to identify categories (Holiday and Non-Holiday).

- Questions the Chart Will Answer:
- What is the proportion of weekly sales attributed to Holidays vs. Non-Holidays?

- How the Chart Will Show Up:
- Timing: The chart is generated and displayed as soon as the DOM content is loaded.
- Frequency: The chart will always show up when the page is loaded or refreshed.

- Why the Selected Chart Type:
- Reasoning: A pie chart is chosen to visualize the proportion of weekly sales between two categories (Holiday and Non-Holiday). It effectively represents parts of a whole, making it easy to understand the distribution of sales. The legend provides a clear distinction between the two categories.
- Alternatives Considered: A bar chart or a stacked bar chart could have been considered, but a pie chart is more suitable for illustrating the percentage contribution of each category to the total weekly sales.


Chart 3:
- Chart Details:
1. Chart Type: Scatter Plot
2. Title: Weekly Sales by Temperature and Store
3. Colors: Blue
4. Axis Titles:
  	 - X-Axis: Temperature
   	- Y-Axis: Weekly Sales
5. Tooltip:
   - Displays Weekly Sales, Temperature, and Store information for each data point.
6. Cursor: Enabled cursor for better data exploration.
7. Scrollbars: Both horizontal and vertical scrollbars are added for enhanced data navigation.

- Questions the Chart Will Answer:
- How does weekly sales vary concerning temperature and store?
- Is there any correlation between temperature and weekly sales?

- How the Chart Will Show Up:
- Timing: The chart is generated and displayed as soon as the DOM content is loaded.
- Frequency: The chart will always show up when the page is loaded or refreshed.

- Why the Selected Chart Type:
- Reasoning: A scatter plot is chosen to visualize the relationship between two continuous variables, temperature, and weekly sales, for different stores. It is suitable for identifying patterns, clusters, and trends in the data. The tooltips provide detailed information for each data point, enhancing interpretability.
- Alternatives Considered: Other options like a bubble chart or line chart could have been considered, but a scatter plot is straightforward and effective for visualizing the distribution of data points along two axes.


Chart 4:
- Chart Details:
1. Chart Type: Line Chart
2. Title: Fuel Price Variation by Store
3. Colors: Blues
4. Axis Titles:
   	- X-Axis: Date
   	- Y-Axis: Fuel Price
5. Legend: A legend is created for each store, allowing users to toggle the visibility of individual store data.
6. Tooltip:
   	- Displays the fuel price for each data point.
   	- Tooltip orientation is set to horizontal for better readability.

- Questions the Chart Will Answer:
- How does the fuel price vary over time for different stores?
- Is there any noticeable pattern or trend in fuel price variation among stores?

- How the Chart Will Show Up:
- Timing: The chart is generated and displayed as soon as the DOM content is loaded.
- Frequency: The chart will always show up when the page is loaded or refreshed.

- Why the Selected Chart Type:
- Reasoning: A line chart is chosen to visualize the temporal variation in fuel prices for different stores. It effectively shows trends and patterns over time, making it suitable for time-series data. The legend allows users to focus on specific stores by toggling their visibility.
- Alternatives Considered: Other options, such as a stacked area chart or multiple bar charts, could have been considered. However, a line chart is preferred for its clarity in showing the changes in fuel prices over time for each store.
