const express = require('express');
const cors = require('cors');
const getTokenService = require('./Service/getToken.Service');
const RegisterService = require('./Service/register.Service');
const loginService = require('./Service/login.Service');
const gamelistService = require('./Service/gamelist.Service');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8088;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.get('/token', async (req, res) => {
    try {
        let getToken = await getTokenService();
        res.send({ token: getToken });
    } catch (error) {
        console.error('Error fetching token:', error);
        res.status(500).send({ error: 'An error occurred while fetching token.' });
    }
});

app.post('/gamelist', async (req, res) => {
    try {
        let getToken = await getTokenService();
        let gamelist = await gamelistService(getToken.Authorization, {
            brandcode: 'GAPI',
            domainname: 'www.ggapisuite.com',
            providercode: '',
            currencycode: 'THB'
        });
        res.send({ ...gamelist });
    } catch (error) {
        console.error('gamelist failed:', error);
        res.status(500).send({ error: 'An error gamelist' });
    }
});

app.post('/PG', async (req, res) => {
    try {
        let getToken = await getTokenService();
        let gamelist = await gamelistService(getToken.Authorization, {
            brandcode: 'GAPI',
            domainname: 'www.ggapisuite.com',
            providercode: 'PGSOFT',
            currencycode: 'THB'
        });
        res.send({ ...gamelist }); 
    } catch (error) {
        console.error('gamelist failed:', error);
        res.status(500).send({ error: 'An error gamelist' });
    }
});

app.get('/REDTIGER', async (req, res) => {
    try {
        let getToken = await getTokenService();
        let gamelist = await gamelistService(getToken.Authorization, {
            brandcode: 'GAPI',
            domainname: 'www.ggapisuite.com',
            providercode: 'REDTIGER',
            currencycode: 'THB'
        });
        res.send({ ...gamelist }); 
    } catch (error) {
        console.error('gamelist failed:', error);
        res.status(500).send({ error: 'An error occurred while fetching the game list' });
    }
});


app.post('/register', async (req, res) => {
    const {
        username,
        password,
        accountname,
        accountnumber,
    } = req.body;

    try {
        let getToken = await getTokenService();
        let register = await RegisterService(getToken.Authorization, {
            brandcode: 'THB1',
            username,
            password,
            currencycode: 'THB',
            ip: '0.0.0.0',
            bankid: '71',
            accountname,
            accountnumber,  
            referralcode: ''  
        });
        res.send({ ...register });
    } catch (error) {
        console.error('Registration failed:', error);
        res.status(500).send({ error: 'An error occurred during registration.' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    console.log('Received login request with body:', req.body);

    if (!username || !password) {
        return res.status(400).send({ error: 'Username and password are required.' });
    }

    try {
        let getToken = await getTokenService();
        let login = await loginService(getToken.Authorization, {
            brandcode: 'THB1',
            username,
            password,
            language: 'th-TH',
            ip: '0.0.0.0'
        });
        res.send({ ...login });
    } catch (error) {
        console.error('Login failed:', error.message);
        res.status(500).send({ error: 'An error occurred during login.' });
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
});
