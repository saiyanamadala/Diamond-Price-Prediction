from flask import Flask,request,jsonify
import util

app=Flask(__name__)
@app.route('/get_cut_quality')
def get_cut_quality():
    response=jsonify({
        'cut_quality':util.get_cut_quality()
    })
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route('/predict_diamond_price',methods=['POST'])
def predict_diamond_price():
    carat=float(request.form['carat'])
    depth=float(request.form['depth'])
    table=float(request.form['table'])
    x_=float(request.form['x'])
    y=float(request.form['y'])
    z=float(request.form['z'])
    cut=request.form['cut']
    color=request.form['color']
    grade=request.form['grade']
    print('data:',carat,depth,table,x_,y,z,cut,color,grade)
    response=jsonify({
        'estimated_price':util.get_estimated_price(carat,depth,table,x_,y,z,cut,color,grade)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__=="__main__":
    app.run()