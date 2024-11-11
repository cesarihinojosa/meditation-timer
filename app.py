from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/timer', methods=['POST'])
def timer():
    minutes = request.form.get('minutes')
    if minutes is None:
        return render_template('index.html')
    else:
        return render_template('timer.html', minutes=int(minutes))
    
if __name__ == '__main__':
    app.run(debug=True)