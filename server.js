// server.js

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ['OPTIONS, POST, GET, PUT, DELETE']
}));

app.use(express.json());
app.use(express.text());

let data = { message: '여러분 화이팅!' };

app.get('/', (req, res) => {
  return res.send(data);
});

app.post('/', (req, res) => {
  const { message } = req.body;
  data.message = message;
  return res.send(`받은 POST 데이터: ${message}`);
});

app.put('/', (req, res) => {
  const message = req.body;
  data.message = message;
  return res.send(`업데이트된 데이터: ${message}`);
});

app.delete('/', (req, res) => {
  data = {};
  return res.send('데이터가 삭제되었습니다.');
});

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
