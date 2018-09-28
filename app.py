from flask import Flask, render_template

debug = __name__ == '__main__'

app=Flask(__name__,template_folder="ui/template")

@app.route('/')
def index():
    return render_template('index.html',debug=debug)

if __name__ == '__main__':  
    app.run(debug=debug, port=5000)
