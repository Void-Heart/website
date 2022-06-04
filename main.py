from flask import Flask, render_template, redirect, request, make_response
import requests
from requests.auth import HTTPBasicAuth
import os

app = Flask(__name__)
if os.path.exists('key'):
    keyf = open('key', 'r')
    key = keyf.read().split(':')
    keyf.close()
    devmode = False
else:
    devmode = True
    key = None
if devmode:
    print('DevMode: ON')
else:
    print('DevMode: OFF')

def get_commit_id(sha):
    return sha[:5]

@app.route('/commits')
def commit_history():
    cookies = dict(request.cookies)
    cookie_not_found = False
    if not 'theme' in cookies:
        cookies['theme'] = 'dark'
        cookie_not_found = True
    if not devmode:
        print('https://api.github.com/repos/{}/commits?page=1'.format(key[0]))
        github_data = requests.get('https://api.github.com/repos/{}/commits?page=1'.format(key[0]), auth=HTTPBasicAuth(key[1], key[2])).json()
    else:
        github_data = []
    print(github_data)
    resp = make_response(render_template('home.html', cookies=cookies, github_data=github_data, devmode=devmode, get_commit_id=get_commit_id))
    if cookie_not_found:
        resp.set_cookie('theme', cookies['theme'])
    return resp

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5647)
