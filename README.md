## L3RNE-boilerplate
## Live Reloading React Rest Node Express

This boilerplate setup a simple react node express application with minimalist REST interaction. 
For development, two servers are used :
- the first one for front-end given by [Create React App](https://github.com/facebook/create-react-app) on port 3000 ;
- the last one for back-end on port 3001 used for api interaction.
The back-end server is also a proxy and permit to return informations to the front-end server.
This system of two servers permit to give a live reloading on each side.
Note that back-end server avoid crash and dismiss errors in terminal instead.

## Quick Overview
<img src="src_readme/front.gif" />
As you can see, update front source file cause a refresh of the page. 
(Here, we are changing hello by HELLO.)

<img src="src_readme/back.gif" />
Update back source file cause restart of the server.
(Here, we are changing hello by HELLO.)

## Installation

First copy the repo into your disk.

`$ git clone https://github.com/BarnaTM/L3RNE-Boilerplate.git`

Then

`npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed !

### `npm test` & `npm run eject`

Theses commands are also available, refer to [CRA's README.md](https://github.com/facebook/create-react-app/blob/master/README.md). 

### `npm run fstart`

Runs the front-end server and open browser at [http://localhost:3000](http://localhost:3000).

### `npm run bstart`

Runs the back-end server.

### `npm run dev`

Runs the front-end server and the back-end server simultaneously.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details