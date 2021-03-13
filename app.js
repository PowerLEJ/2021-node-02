const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('=====================');
    console.log('http://127.0.0.1:3000');
    console.log('=====================');
});

app.get('/', (req, res) => {
    const myName = 'lee'
    res.send('<h1>Hello ' + myName + ' </h1>')
})

app.get('/hello', function(req, res) {
    res.send('<h1>Hello, Express</h1>')
})

app.get('/api', (req, res) => {
    const id = req.query.id;
    const users =  [
            { id: 1, name: '홍길동', kor: 70},
            { id: 2, name: '홍길순', kor: 75},
            { id: 3, name: '홍길만', kor: 80},
    ]
    var sendUser = id ? users.filter(v => id == v.id) : [...users];
    res.json(sendUser)
})