
//NEW - Import App From App.js
const app = require('./app');
//SPIN UP SERVER
const port = 8080;
const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log(`running on local host: ${port}`);
};