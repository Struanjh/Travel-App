
# Travel Application

This is a travel weather application developed as the Capstone project for the Udacity Front End Developer Nano-degree

## Technologies utilized in this project include:

* HTML MarkUp
* CSS Grid and Flexbox for responsive styling
* Vanilla JS for Front-End Interactivity
* Node JS back-end
* Express JS Framework for middle-ware 
* Webpack as a build tool and asset bundler
* NPM as a package manager

## API's used in this project are:
* GeoNames - for city co-ordinates
* Weatherbit - for weather forecasts
* Pixabay - for city images

## The high-level logic of this application is as follows:
1. The user enters a city name, and the departure and return dates of their trip in a form
2. Basic form validation tests are performed, and any error messages will be displayed to the user
3. Assuming form validations are passed, the first fetch request is made to the GeoNames API, to get the co-ordinates of the city the user selected
4. Once GeoNames Data is returned, the second fetch request is made to the WeatherBit API, to get the weather forecast using the co-oridnates returned from GeoNames
5. Once WeatherBit Data is returned, the final fetch request is made to the Pixabay API using the city name the user selected
6. The results returned from the API Calls are displayed to the user in a card

## To run the application, follow the below steps:

Download the file from this GitHub repo and cd into the root folder for this app

Install Node Package Manager (npm)
<pre>npm install</pre>

Build the Application with Webpack:
<pre>npm run prod</pre>

Start the server:
<pre>npm run start</pre>

