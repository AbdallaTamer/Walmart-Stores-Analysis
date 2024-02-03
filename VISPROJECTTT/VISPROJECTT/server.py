from flask import Flask, jsonify, render_template
import sqlite3
import pandas as pd
from sqlalchemy import create_engine
import numpy as np

app = Flask(__name__)

data = pd.read_csv('VISPROJECTT/weekly_sales_data.csv')

def create_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as ex:
        print(ex)
    return conn

db_url = 'sqlite:///weekly_sales_data.db'
engine = create_engine(db_url, echo=False)
create_connection("weekly_sales_data.db")
connection = create_connection("weekly_sales_data.db")
df=pd.read_csv("VISPROJECTT/weekly_sales_data.csv")
df.to_sql("weekly_sales_data", connection, if_exists="replace")

@app.route('/')
def index():
    return render_template('index.html')

df = pd.read_sql( 'select * from weekly_sales_data', engine)
df2 = pd.read_csv("weekly_sales_data_with_timestamps.csv")
print(df2)
@app.route('/get-data')
def get_chartdata():
    dfn = pd.read_sql('select Store, avg(Weekly_Sales) as counter from weekly_sales_data group by Store', engine)  
    category = dfn["Store"]
    values = dfn["counter"]
    data = [{"Store": c, "Mean_Weekly_Sales": int(v)} for c, v in zip(category, values)]
    #print(data)
    return jsonify(data)


# @app.route('/get-data2')
# def get_chartdata2():
#     category = df["Holiday_Flag"].value_counts().index
#     values = df["Weekly_Sales"].value_counts().values
#     data = [{"value":int(v) , "category":c } for c, v in zip(category, values)]
#     sales_by_holiday = data.groupby('Holiday_Flag')['Weekly_Sales'].sum().reset_index()
#     return jsonify(sales_by_holiday)


@app.route('/get-data2')
def get_chartdata2():
    holiday_counts = df["Holiday_Flag"].value_counts()
    category = holiday_counts.index
    values = holiday_counts.values
    data = pd.DataFrame({"value": values, "category": category})
    sales_by_holiday = data.groupby('category')['value'].sum().reset_index()
    return jsonify(sales_by_holiday.to_dict(orient='records'))


@app.route('/get-data3')
def get_chartdata3():
    transformed_data = []
    selected_columns = ["Temperature", "Weekly_Sales", "Store"]
    selected_data = df[selected_columns]
    for i in range (len(selected_data)):
        transformed_data.append({"x": int(selected_data["Temperature"][i]), "y": int(selected_data["Weekly_Sales"][i]), "value": int(selected_data["Store"][i])})

    return jsonify(transformed_data)


# @app.route('/get-data4')
# def get_chartdata4():
#     transformed_data = []
#     selected_columns = ["Date", "Fuel_Price", "Store"]
#     selected_data = df[selected_columns]
#     for i in range (len(selected_data)):
#         transformed_data.append({"x": int(selected_data["Date"][i]), "y": int(selected_data["Fuel_Price"][i]), "value": int(selected_data["Store"][i])})

#     return jsonify(transformed_data)



@app.route('/get-data4')
def get_chartdata4():
    chart_data = df2[["Timestamp", "Fuel_Price", "Store"]]
    chart_data_grouped = chart_data.groupby("Store")
    
    series_data = {}
    
    for store, data_frame in chart_data_grouped:
        series_data[store] = [{"x": date, "y": fuel_price} for date, fuel_price in zip(data_frame["Timestamp"], data_frame["Fuel_Price"])]
    data=series_data
    print(data[1])
    return jsonify(data[1])


if __name__ == '__main__':
    app.run()