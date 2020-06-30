from flask import Flask, render_template, request

app = Flask(__name__)
templates = ('q1.html', 'q2.html', 'q3.html', 'q4.html', 'q5.html', 'wd.html')


@app.route("/", methods=['POST', 'GET'])
def run():
    if request.method == 'POST':
        return render_template(templates[1])
    else:
        return render_template(templates[0])


if __name__ == "__main__":
    app.run()
