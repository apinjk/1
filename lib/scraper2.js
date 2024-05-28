//=============> ======== <==============\\
const axios = require('axios');
const cheerio = require('cheerio');
const linkfy = require('linkifyjs');
const fs = require('fs')
const removerAcentos = (s) => typeof s === 'string' ? s.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
const useragent_1 = {
  "user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36"
};
const default_criador = '@nezsab-team.exe';
const unescapeHtml = (text) => typeof text === 'string' ? text
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&gt;/g, '>')
  .replace(/&#39;/g, "'")
  .replace(/lt;/g, '<')
  .replace(/&#8216;/g, '‘')
  .replace(/&#8217;/g, '’')
  .trim() : undefined;
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

Array.prototype.shuffle = function() {
  var i = this.length,
    j, temp;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
} 

module.exports = {
  axios: axios,
  cheerio: cheerio,
  linkfy: linkfy,
  useragent_1: useragent_1,
  removerAcentos: removerAcentos,
  fs: fs,
  unescapeHtml: unescapeHtml,
  default_criador: default_criador,
  randomIntFromInterval: randomIntFromInterval
}

const NoticiasAoMinuto = () => new Promise((resolve, reject) => {
  axios.get(`https://www.noticiasaominuto.com.br/`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const dados = [];
      $('div[class="menu-thumb cursor-pointer"]').each((i, e) => {
        dados.push({
          noticia: unescapeHtml($(e).find('p').text()),
          imagem: $(e).find('img').attr('src'),
          postado: $(e).find('.menu-thumb-date').text(),
          categoria: $(e).find('.nm-custom-label-category').text(),
          link: $(e).find('a:first').attr('href')
        });
      });
      resolve({
        status: res.status,
        fonte: 'https://www.noticiasaominuto.com.br/',
        criador: default_criador,
        resultado: dados
      });
    })
    .catch((e) => {
      reject(e)
    });
});

module.exports = {}
module.exports.NoticiasAoMinuto = NoticiasAoMinuto