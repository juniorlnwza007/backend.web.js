const axios = require('axios');
const genFormLogin = require('../components/genFormLogin');
const afbApiUri = "https://ggapi-uat.5k2an3or4q209.xyz/ggapi";

const loginService = async (token, datapost = {}) => {
    let data = await genFormLogin(datapost);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${afbApiUri}/login`,
        headers: {
            Cookie: 'afbggC=ih0z5adeixnk0yseqkkduaa1',
            'Content-Type': 'multipart/form-data;',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            Connection: 'keep-alive',
            'Accept-Encoding': 'gzip, deflate, br',
            Accept: '*/*',
            ...data.getHeaders(),
            Authorization: `${token}`,
        },
        data: data,
    };

    try {
        let datares = await axios.request(config);
        console.log('External API response:', datares.data);
        return datares.data;
    } catch (error) {
        console.error('Error in external API request:', error.message);
        throw error;
    }
};

module.exports = loginService;
