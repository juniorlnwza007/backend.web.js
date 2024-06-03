const express = require('express');
const cors = require('cors');
const getTokenService = require('./Service/getToken.Service');
const RegisterService = require('./Service/register.Service');
const loginService = require('./Service/login.Service');

const app = express();
const POST = 8088;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/register', async (req, res) => {

    const username = 'test1234';
    const password = '123456789';

    let getToken = await getTokenService();
    let register = await RegisterService(getToken.Authorization, {
        brandcode: 'THB1',
        username: `${username}`,
        password: `${password}`,
        currencycode: 'THB',
        ip: '0.0.0.0',
        bankid: '71',
        accountname: 'teststset2',
        accountnumber: '12345678901',
        referralcode: '',
    });
    res.send({ ...register });
});

app.get('/login', async (req, res) => {

    const { username, password } = req.body;

    // const username = 'test';
    // const password = '1234567890';

    try { 
        let getToken = await getTokenService();
        let login = await loginService(getToken.Authorization, {
            brandcode: 'THB1',
            username: username,
            password: password,
            language: 'th-TH',
            ip: '0.0.0.0'
        });
        res.send({ ...login });
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).send({ error: 'An error occurred during login.' });
    }
});  

app.listen(POST, () => {
    console.log(`Example app listening on POST ${POST}`);
});  