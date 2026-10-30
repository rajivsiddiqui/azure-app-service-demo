const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
const environment = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
    res.send(`
        <h1>Azure App Service Deployment</h1>
        <p>Hello from Azure!</p>
        <p>Environment: ${environment}</p>
    `);
});

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});
