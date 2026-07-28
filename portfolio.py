from flask import Flask, render_template

portfolio = Flask(__name__)

@portfolio.route('/')
def home():
    return render_template('portfolio.html')

if __name__ == '__main__':
    portfolio.run(debug=True)