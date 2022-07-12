const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));
server.set('view engine', 'ejs');

const homeStartingContent = "Welcome to capacity Bay,Inc.,the practical and hands-oneLearning platform and organization established to revolutionize learning and workforce development training for U.S. veterans, transitioning service members, New Americans, immigrants,refugees as well as others in areas of substantial unemployement and technology depreived communities such as sub-Sahara Africa and other parts of the world. We also provide integrated IT consulting services for individuals, businesses and government,Welcome to capacity Bay,Inc.";

//const editorContent = "Welcome to capacity Bay,Inc.";

//const contactContent = "Welcome to capacity Bay,Inc.,the practical and hands-oneLearning platform and organization established to revolutionize learning and workforce development training for U.S.";

let db = [];
server.get('/', (req, res) => {
    res.render("home", {
        postTitle:"Home",
        startingContent: homeStartingContent,
         postM: db
    });
});

server.get('/home', (req, res) => {
    res.render("home", {
        postTitle:"Home",
        startingContent: homeStartingContent,
        postM: db
    });
});
server.get('/contact', (req, res) => {
    res.render("contact", {
        startingContent: ""
    });
});

server.get('/editor', (req, res) => {
    res.render("editor")
});
server.post('/compose', (req, res) => {
    const post = {
        postTitle: req.body.postTitle,
        postBody: req.body.postBody
    }
    db.push(post)
    res.redirect('/');
});
server.listen(4000, () => console.log('Example app listening on port 4000!'));

