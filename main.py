from flask import Flask, render_template, redirect, request, make_response

app = Flask(__name__)

@app.route('/')
def home():
    cookies = dict(request.cookies)
    cookie_not_found = False
    if not 'theme' in cookies:
        cookies['theme'] = 'dark'
        cookie_not_found = True
    resp = make_response(render_template('home.html', cookies=cookies))
    if cookie_not_found:
        resp.set_cookie('theme', cookies['theme'])
    return render_template('home.html', cookies=cookies)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5647)