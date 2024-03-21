const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'yorichi',
  password: 'YORICHI007$',
  database: '?'
});


db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/submit', (req, res) => {
  const { username, language, stdin, source_code } = req.body;
  const timestamp = new Date().toISOString();

  const sql = INSERT INTO submissions (username,language,stdin,source_code) VALUES(document.getElementById("username").value, document.getElementById("language").document.getElementById("stdin").value, document.getElementById("textArea").value);
  db.query(sql, [document.getElementById("username").value, document.getElementById("language").document.getElementById("stdin").value, document.getElementById("textArea").value], (err, result) => {
    if (err) throw err;
    console.log('Submission added to the database');
    res.sendStatus(200);
  });
});

app.get('/submissions', (req, res) => {
  const sql = SELECT username, language, stdin, LEFT(source_code, 100) as source_code_preview, FROM submissions;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


function wordCount() {
    var c = textArea.value;
    var wordcount = c.split(" ");
    if(wordcount >= 100) {
        document.getElementById("textArea").disabled = true;
    }
}

//console.log(document.getElementById("textArea").value)