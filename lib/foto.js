const axios = require('axios');
const FormData = require('form-data');
const cheerio = require('cheerio');

async function fotoce(cpf) {
    try {
        const authResponse = await axios.post(
            "https://spi.sspds.ce.gov.br/api/siaa/auth",
            {
                cpf: "03259458379",
                password: "Alisson87",
                appServerKey: "46dff8f1542d243a069b86eb95d5108e11a67455",
            },
            {
                headers: {
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
                    Accept: "application/json",
                    "Accept-Encoding": "gzip, deflate, br, zstd",
                    "Content-Type": "application/json",
                    "Csrf-Token": "nocheck",
                    "X-Requested-With": "*",
                    "sec-ch-ua-platform": '"Linux"',
                    Origin: "https://spi.sspds.ce.gov.br",
                    Referer: "https://spi.sspds.ce.gov.br/oauth2/index.html",
                },
            },
        );

        const authToken = authResponse.data.token;
        const response = await axios.get(
            "https://spi.sspds.ce.gov.br/api/cerebrum/civil/details",
            {
                params: { cpf: cpf },
                headers: {
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
                    Accept: "application/json",
                    "Accept-Encoding": "gzip, deflate, br, zstd",
                    "Accept-Client": "46dff8f1542d243a069b86eb95d5108e11a67455",
                    "Client-Version": "0.15.0",
                    Authorization: `JWT ${authToken}`,
                    "Client-Name": "CEREBRUM",
                    "sec-ch-ua-platform": '"Linux"',
                    Referer: "https://spi.sspds.ce.gov.br/cerebrum",
                },
            },
        );

        if (response.status === 200) {
            const result = response.data[0];
            const imgBase64 = result.picture || "";
            const data = {
                cpf: cpf,
                foto: imgBase64,
            };
            return data;
        } else {
            throw new Error(`Erro ao consultar o CPF. Código de status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Erro ao consultar CPF: ${error}`);
    }
}

async function fotoma(cpf) {
        const loginURL = 'https://sigma.policiacivil.ma.gov.br/';
        const loginData = {
            username: '386.482.373-00',
            password: 'Rabelo@#676069'
        };
        
        const consultaURL = 'https://sigma.policiacivil.ma.gov.br/pessoas/lista/resultado/consulta/individuo';
    
        try {
            const loginResponse = await axios.post(loginURL, loginData);
    
            if (loginResponse.status !== 200) {
                console.log("Erro ao realizar o login:", loginResponse.status);
                return null;
            }
    
            const consultaParams = {
                nome: '',
                cpf: cpf,
                nomeMae: '',
                nomePai: '',
                dddCelular: '',
                telefoneCelular: '',
                dddFixo: '',
                telefoneFixo: ''
            };
            const consultaResponse = await axios.get(consultaURL, { params: consultaParams });
    
            if (consultaResponse.status === 200) {
                const $ = cheerio.load(consultaResponse.data);
                const linkSegundaConsulta = $('a[href*="/pessoas/resultado/especifico/consulta/individuo/"]');
    
                if (linkSegundaConsulta.length > 0) {
                    const segundaConsultaURL = 'https://sigma.policiacivil.ma.gov.br' + linkSegundaConsulta.attr('href');
                    const segundaConsultaResponse = await axios.get(segundaConsultaURL);
    
                    if (segundaConsultaResponse.status === 200) {
                        const imgTag = cheerio.load(segundaConsultaResponse.data)('img.img-thumbnail.preview-img');
    
                        let fotoBase64;
                        if (imgTag.length > 0) {
                            const fotoURL = imgTag.attr('src');
                            fotoBase64 = fotoURL.split(',')[1] || "SEM INFORMAÇÃO";
                        } else {
                            fotoBase64 = "SEM INFORMAÇÃO";
                        }
    
                        const result = {
                            foto: fotoBase64,
                            cpf: cpf
                        };
    
                        console.log(JSON.stringify(result));
                        return fotoBase64;
                    } else {
                        console.log(`Erro ao fazer a segunda consulta: ${segundaConsultaResponse.status}`);
                    }
                } else {
                    console.log("Link para a segunda consulta não encontrado.");
                }
            } else {
                console.log(`Erro ao fazer a primeira consulta: ${consultaResponse.status}`);
            }
        } catch (error) {
            console.error("Erro durante a execução:", error);
        }
    
        return null;
}


module.exports = { fotoce,fotoma };
