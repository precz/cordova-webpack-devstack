Cordova + Webpack, devstack
===========================
> You must gather your party before venturing forth.

Create your project
-------------------
* Fork or clone this repository:
`git clone git@github.com:precz/cordova-webpack-devstack.git`.
* Install dependencies: `npm install`.
* Update package.json with your data.
* Run prepare script: `npm run prepare`.

Development
-----------
* Run watch task: `npm run watch`.
* Navigate to [localhost:8080](http://localhost:8080/). Page would be automaticly refreshed with rebuild scripts when you save your work.

Cordova
-------
You should use standard cordova commands.
Example for Android:
* `cordova platform add android`
* `cordova build android`

Update your project
-------------------
Update to never version of devstack.
* Add the remote, call it `devstack`:
`git remote add devstack git@github.com:precz/cordova-webpack-devstack.gitt`
* Fetch all:
`git fetch devstack`
* Checkout to your master barnch:
`git checkout master`
* Merge master branch with desired version of devstack
`git merge devstack/1.0.0`

Licence
-------
The MIT License (MIT)

Copyright (c) 2017 Paweł Preczyński

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.