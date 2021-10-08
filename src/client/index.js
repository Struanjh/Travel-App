
//This file is the entry point for Webpack to build the dependency tree, as set in the webpack.config file
//This file needs to import the main fucntion from app.js (and also export them)
//It should also import the .scss file
//Event Listeners can't go in app.js

import "./styles/style.scss";


import "./media/city_image_1.jpg"
import "./media/city_image_2.jpg"
import "./media/city_image_3.jpg"
import "./media/city_image_4.jpg"

import { smoothScroll } from "./js/smoothScroll.js";
import { renderError } from "./js/renderErrors.js";
import { updateUI } from "./js/app.js";
import { handleSubmit } from "./js/app.js";
//import { countDown } from "./js/countDown.js";


//Listen for user clicking submit button event, then call the async function handleSubmit
const userCitySelection = document.getElementById('destination');
const userSearchSubmit = document.getElementById('searchButton');
userSearchSubmit.addEventListener('click', handleSubmit);