const express = require('express')
const app = express()
const port = 5000

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, (err) => {
    if (err) console.log(err);

    console.log(
        `\n\nPortfolio App is running:\n\n  port: ${port}\n  url: http://localhost:${port}/\n  time: ${Date()}\n`
    );
})