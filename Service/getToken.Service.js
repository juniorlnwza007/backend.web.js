const FormData = require('form-data');
const axios = require('axios');
const afbApiUri = "https://ggapi-uat.5k2an3or4q209.xyz/ggapi";

const getTokenService = async () => {
    let data = new FormData();
    data.append("brandcode", "THB1");
    data.append("agent", "thbapi");
    data.append("agentKey", "DkZa23CzW5miIe44B9fMOA==");

    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${afbApiUri}/gettoken`,
        headers: {
            Cookie: "afbggC=ih0z5adeixnk0yseqkkduaa1",
            "Content-Type": "multipart/form-data",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
            Connection: "keep-alive",
            "Accept-Encoding": "gzip, deflate, br",
            Accept: "*/*",
            ...data.getHeaders(),
        },
        data: data,
    };

    let datares = await axios.request(config);
    let token = datares?.data?.token || '+xd6WhymhxXYCf4+xHSOFWo/wX5+mtCGj+r9/5k3Sl00X/NiLIS0FuY31brCR+Eo';

    return {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data;',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        Connection: 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br',
        Accept: '*/*',
    };
};

module.exports = getTokenService;