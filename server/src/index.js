import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('ok')
})

app.post('/auth', async (req, res) => {
    console.log(req.body.code)
    const response = await axios.post('https://github.com/login/oauth/access_token', {
        code: req.body.code,
        client_id: '',
        client_secret: '',
    }, {
        headers: {
            accept: 'application/json'
        }
    })

    const token = response.data.access_token;
    res.send(token);
})

app.listen(8000, () => {
    console.log('server listening on 8000...');
})