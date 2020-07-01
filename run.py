from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)
templates = ('q1.html', 'q2.html', 'q3.html', 'q4.html', 'q5.html', 'wd.html')


@app.route("/", methods=['POST', 'GET'])
@app.route("/q1", methods=['POST', 'GET'])
def q1():
    if request.method == 'POST':
        return redirect(url_for('q2'))
    else:
        return render_template(templates[0])


@app.route("/q2", methods=['POST', 'GET'])
def q2():
    if request.method == 'POST':
        return redirect(url_for('q3'))
    else:
        return render_template(templates[1])


@app.route("/q3", methods=['POST', 'GET'])
def q3():
    if request.method == 'POST':
        return redirect(url_for('q4'))
    else:
        return render_template(templates[2])


@app.route("/q4", methods=['POST', 'GET'])
def q4():
    if request.method == 'POST':
        return redirect(url_for('q5'))
    else:
        return render_template(templates[3])


@app.route("/q5", methods=['POST', 'GET'])
def q5():
    if request.method == 'POST':
        return redirect(url_for('wd'))
    else:
        return render_template(templates[4])


@app.route("/wd", methods=['POST', 'GET'])
def wd():
    return render_template(templates[5])


if __name__ == "__main__":
    app.run(debug=True)
