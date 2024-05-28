//══════[ 2023 PooP-MD ]══════\\

///======= Creditos =======///
//•// Scrapper desenvolvida por Joao(Bruxo)
//•// Número para contato: wa.me/5599935009504

///======= Modules =======///
const axios = require('axios');
const cheerio = require('cheerio');
const yt = require("ytdl-core");
const yts = require("yt-search");
const cookie = require("cookie");
const FormData = require("form-data");
const fs = require('fs')
const colors = require('colors');


const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/


///======= API TextPro =======///
async function getBuffer(url, options){
try {
options ? options : {}
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (err) {
console.log(err)
}
}

function convertSticker(base64, author, pack){
return new Promise((resolve, reject) =>{
 axios('https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp', {
 method: 'POST',
 headers: {
 Accept: 'application/json, text/plain, */*',
 'Content-Type': 'application/json;charset=utf-8',
 'User-Agent': 'axios/0.21.1',
 'Content-Length': 151330
 },
 data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
 }).then(({data}) =>{
 resolve(data.webpBase64)
 }).catch(reject)

}) 
 } 

function wallpaper(title, page = '1') {
return new Promise((resolve, reject) => {
axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('div.grid-item').each(function (a, b) {
hasil.push({
title: $(b).find('div.info > a > h3').text(),
type: $(b).find('div.info > a:nth-child(2)').text(),
source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
})
})
resolve(hasil)
})
})
}

async function tiktok(query) {
let response = await axios("https://lovetik.com/api/ajax/search", {
method: "POST",
data: new URLSearchParams(Object.entries({ query })),
});

const clean = (data) => {
let regex = /(<([^>]+)>)/gi;
data = data.replace(/(<br?\s?\/>)/gi, " \n");
return data.replace(regex, "");};

async function shortener(url) {
return url;}
result = {};
result.title = clean(response.data.desc);
result.author = clean(response.data.author);
result.nowm = await shortener(
(response.data.links[0].a || "").replace("https", "http")
);
result.watermark = await shortener(
(response.data.links[1].a || "").replace("https", "http")
);
result.audio = await shortener(
(response.data.links[2].a || "").replace("https", "http")
);
result.thumbnail = await shortener(response.data.cover);
return result;
}


async function ytss(text){
 const r = await fetch("https://m.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false", {

 "headers": {
 "accept": "*/*",
 "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
 "content-type": "application/json",
 "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
 "sec-ch-ua-arch": "\"\"",
 "sec-ch-ua-bitness": "\"\"",
 "sec-ch-ua-full-version": "\"120.0.6099.26\"",
 "sec-ch-ua-full-version-list": "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.26\"",
 "sec-ch-ua-mobile": "?1",
 "sec-ch-ua-model": "\"22120RN86G\"",
 "sec-ch-ua-platform": "\"Android\"",
 "sec-ch-ua-platform-version": "\"13.0.0\"",
 "sec-ch-ua-wow64": "?0",
 "sec-fetch-dest": "empty",
 "sec-fetch-mode": "same-origin",
 "sec-fetch-site": "same-origin",
 "x-client-data": "CJ2PywE=",
 "x-goog-visitor-id": "CgtiUy11M0E2cDZhayif3pisBjIKCgJCUhIEGgAgZw%3D%3D",
 "x-youtube-bootstrap-logged-in": "false",
 "x-youtube-client-name": "2",
 "x-youtube-client-version": "2.20231219.05.00",
 "cookie": "GPS=1; YSC=FZ84f0B5gBE; VISITOR_INFO1_LIVE=bS-u3A6p6ak; VISITOR_PRIVACY_METADATA=CgJCUhIEGgAgZw%3D%3D; PREF=f6=40000000&tz=America.Sao_Paulo",
 "Referer": "https://m.youtube.com/results?sp=mAEA&search_query=Mete+gala",
 "Referrer-Policy": "strict-origin-when-cross-origin"
 },
 "body": `{\"context\":{\"client\":{\"hl\":\"pt\",\"gl\":\"BR\",\"remoteHost\":\"2804:d41:a14a:3500:8112:18da:92a2:a4c2\",\"deviceMake\":\"Generic\",\"deviceModel\":\"Android 10.0\",\"visitorData\":\"CgtiUy11M0E2cDZhayif3pisBjIKCgJCUhIEGgAgZw%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36,gzip(gfe)\",\"clientName\":\"MWEB\",\"clientVersion\":\"2.20231219.05.00\",\"osName\":\"Android\",\"osVersion\":\"10\",\"originalUrl\":\"https://m.youtube.com/results?sp=mAEA&search_query=Mete+gala\",\"playerType\":\"UNIPLAYER\",\"screenPixelDensity\":2,\"platform\":\"MOBILE\",\"clientFormFactor\":\"SMALL_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CJ_emKwGEM2VsAUQiIewBRD9n7AFENWIsAUQl5GwBRCp968FELfq_hIQh9SvBRDT4a8FEKihsAUQrtT-EhCT_K8FEJ6LsAUQzN-uBRCY_P4SEN6CsAUQt52wBRC--a8FEN3o_hIQvdKvBRCst68FEL2KsAUQvoT_EhDQjbAFEKiasAUQ-Z-wBRDqw68FEMeDsAUQ4fKvBRD1-a8FEOmMsAUQvbauBRDr6P4SENnJrwUQlPr-EhCk9a4FEIeorwUQpcL-EhCrgrAFELz5rwUQqaCwBRDnhv8SEIjjrwUQt--vBRD_h_8SEL2ZsAUQpKCwBRCigbAFEOeXsAUQzq-vBRCZlLAFEKKSsAUQmvCvBRD7n7AFENqYsAUQyfevBRDnuq8FEPyFsAUQ0pWwBRCmgbAFEMb1rgUQ5LP-EhDMrv4SELiLrgUQ8OWvBRCmoLAFELaQsAUQj6KwBQ%3D%3D\"},\"screenDensityFloat\":1.693750023841858,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_DARK\",\"browserName\":\"Chrome Mobile\",\"browserVersion\":\"120.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\",\"deviceExperimentId\":\"ChxOek14TlRVNE5qUTFOVGczT1RNNE9UY3pOUT09EJ_emKwGGJ_emKwG\",\"screenWidthPoints\":426,\"screenHeightPoints\":554,\"utcOffsetMinutes\":-180,\"memoryTotalKbytes\":\"4000000\",\"mainAppWebInfo\":{\"graftUrl\":\"/results?sp=mAEA&search_query=Mete+gala\",\"webDisplayMode\":\"WEB_DISPLAY_MODE_BROWSER\",\"isWebNativeShareAvailable\":true},\"timeZone\":\"America/Sao_Paulo\"},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"clickTracking\":{\"clickTrackingParams\":\"CAEQwbIBIhMI0ILD5KukgwMVNYOVAh0nzAF5\"},\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1703292704562\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"-180\"},{\"key\":\"u_his\",\"value\":\"5\"},{\"key\":\"u_h\",\"value\":\"975\"},{\"key\":\"u_w\",\"value\":\"426\"},{\"key\":\"u_ah\",\"value\":\"975\"},{\"key\":\"u_aw\",\"value\":\"426\"},{\"key\":\"u_cd\",\"value\":\"24\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"554\"},{\"key\":\"biw\",\"value\":\"426\"},{\"key\":\"brdim\",\"value\":\"0,0,0,0,426,0,426,554,426,554\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}],\"bid\":\"ANyPxKo_zOIjMwPf1WGNhKCMffE0lNo3ksH3hgR1XV35l3VBdeO6CcobQLLcwTy_M80XcPLQWGJG_GBv-lUvFEU_3EWm7B_gwg\"}},\"query\":\"${text}\",\"params\":\"mAEA\"}`,
 "method": "POST"
});
const res = await r.json();
const arrayt = [];
const content = res.contents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
for (let i = 0; i < content.length; i++) {
 const contents = content[i].videoWithContextRenderer
 if (contents && contents.navigationEndpoint) {
 const urls = 'https://youtube.com'+contents.navigationEndpoint.commandMetadata.webCommandMetadata.url.replace('%3D%3D', '');
 const nameyt = contents.accessibility.accessibilityData.label;
 const jsonyts = {name: nameyt,url: urls};
 arrayt.push(jsonyts)
 }
}
return arrayt;
}

async function dl(url){
 const r = await fetch(url);
 const res = await r.text();
 const start = res.indexOf('window.ytplayer');
 const end = res.indexOf('})();', start) + '})();'.length;
 const content = res.substring(start, end);
 const jsonMatch = content.match(/ytcfg\.set\((\{[\s\S]*?\})\);/);
 const jsonString = jsonMatch ? jsonMatch[1] : '';
 const regexid = /"videoDetails":\s*({[^}]+})/;
 const regexthumb = /"thumbnails":\s*\[.*?\]/s;
 const regexservice = /"serviceTrackingParams":\s*(\[.*?\])/;
 const matchservice = res.match(regexservice);
 const matchthumb = res.match(regexthumb);
 const thumbs = JSON.parse(`{${matchthumb[0]}}`).thumbnails;
 const keys = JSON.parse(`${matchservice[1]}}]`)[0].params;
 const matchid = res.match(regexid)
 const videoid = JSON.parse(`${matchid[1]}]}}`).videoId;
 const title = JSON.parse(`${matchid[1]}]}}`).title;
 const desciption = JSON.parse(`${matchid[1]}]}}`).shortDescription;
 const regexparams = /"INNERTUBE_CONTEXT":\s*({[^}]+})/;
 const regexuser = /"user":\s*({[^}]+})/;
 const regexrequest = /"request":\s*({[^}]+})/;
 const regexclick = /"clickTracking":\s*({[^}]+})/;
 const matchclick = jsonString.match(regexclick);
 const matchuser = jsonString.match(regexuser);
 const matchrequest = jsonString.match(regexrequest);
 const matchparams = jsonString.match(regexparams);
 const regexapikey = /"LIVE_CHAT_BASE_TANGO_CONFIG":\s*{([^}]*)}/;
 const matchapikey = jsonString.match(regexapikey);
 if (matchparams && matchapikey) {
 const client = matchparams[1];
 const params = `{"context": ${client}},"user":${matchuser[1]},"request":${matchrequest[1]},"clickTracking":${matchclick[1]},"adSignalsInfo":{"params":${JSON.stringify(keys)}}},"videoId": "${videoid}"}`
 const jsonapikey = JSON.parse(`{${matchapikey[1]}}`);
 const jsonparams = JSON.parse(params);
 const apikey = jsonapikey.apiKey;
 const rv = await fetch(`https://www.youtube.com/youtubei/v1/player?key=${apikey}&prettyPrint=false`, {
 "body": JSON.stringify(jsonparams),
 "method": "POST"
 });
 const resv = await rv.json();
 const videos = resv.streamingData;
 const audios = [];
 const audioformat = resv.streamingData.adaptiveFormats;
 for (let index = 0; index < audioformat.length; index++) {
 const format = audioformat[index];
 if(format.mimeType.startsWith('audio')){
 audios.push(format)
 }
 }
 const resposta = { titulo: title, descricao: desciption, thumbnail: thumbs[thumbs.length-1], midias: { videos: videos, audios: audios }};
 return resposta;
 }
}

function tiktok2(url) {
return new Promise((resolve, rejecet) => {
axios.get('https://musicaldown.com/id', {
headers: {
'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
}
}).then(res => {
const $ = cheerio.load(res.data)
const url_name = $("#link_url").attr("name")
const token_name = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")
const token_ = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value")
const verify = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
let data = {
[`${url_name}`]: url,
[`${token_name}`]: token_,
verify: verify
}
axios.request({
url: 'https://musicaldown.com/id/download',
method: 'post',
data: new URLSearchParams(Object.entries(data)),
headers: {
'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
'cookie': res.headers["set-cookie"]
}
}).then(respon => {
const ch = cheerio.load(respon.data)
if(!ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l4.center-align > div > div > img').attr('src')){
let getResultPhotos = []
ch('body > div.welcome.section > div > div:nth-child(3) > div > div.row > div').each(function (a, b) {
getResultPhotos.push(ch(b).find('img').attr('src'))
})
let result = {
audio: ch('body > div.welcome.section > div > div:nth-child(3) > div > a.btn.waves-effect.waves-light.orange.download').attr('href'),
photo: getResultPhotos
}
if (!result.photo[0]){
resolve({erro: "Erro no Servidor Interno"})
} else {
resolve(result)
}
} else {
axios.request({
url: 'https://musicaldown.com/id/mp3',
method: 'post',
headers: {
'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
'cookie': res.headers["set-cookie"]
}
}).then(resaudio => { 
const hc = cheerio.load(resaudio.data) 
let result = {
thumbnail: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l4.center-align > div > div > img').attr('src'),
username: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l4.center-align > div > h2:nth-child(2) > b').text(),
description: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l4.center-align > div > h2:nth-child(3)').text(),
video_noWatermark: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l8 > a:nth-child(5)').attr('href'),
video_watermark: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l8 > a:nth-child(9)').attr('href'),
video_HD: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l8 > a:nth-child(7)').attr('href'),
audio: hc('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l8 > a:nth-child(6)').attr('href')
}
resolve(result)
})
}
})
})
})
}

async function Mp3v1(query) {
return new Promise((resolve, reject) => {
try {
const search = yts(query)
.then((data) => {
const url = []
const pormat = data.all
for (let i = 0; i < pormat.length; i++) {
if (pormat[i].type == 'video') {
let dapet = pormat[i]
url.push(dapet.url)
}
}
const id = yt.getVideoID(url[0])
const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
.then((data) => {
let pormat = data.formats
let audio = []
let video = []
for (let i = 0; i < pormat.length; i++) {
if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
let aud = pormat[i]
audio.push(aud.url)
}
}
const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
const result = {
título: title,
thumb: thumb,
canal: channel,
publicado: published,
visualizações: views,
link: audio[0]
}
return(result)
})
return(yutub)
})
resolve(search)
} catch (error) {
reject(error)
}
console.log(error)
})
}

async function Mp4v1(url) {
return new Promise((resolve, reject) => {
try {
const id = yt.getVideoID(url)
const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
.then((data) => {
let pormat = data.formats
let video = []
for (let i = 0; i < pormat.length; i++) {
if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true && pormat[i].hasAudio == true) {
let vid = pormat[i]
video.push(vid.url)
}
}
const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
const published = data.player_response.microformat.playerMicroformatRenderer.publishDate

const result = {
título: title,
thumb: thumb,
canal: channel,
publicado: published,
visualizações: views,
link: video[0]
}
return(result)
})
resolve(yutub)
} catch (error) {
reject(error);
}
console.log(error)
})
}

async function ytSearch(query) {
return new Promise((resolve, reject) => {
try {
const cari = yts(query)
.then((data) => {
res = data.all
return res
})
resolve(cari)
} catch (error) {
reject(error)
}
console.log(error)
})
}


function pinterest(text){
return new Promise(async(resolve,reject) => {
axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + text, {
headers: {
"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
}
}).then(({ data }) => {
const $ = cheerio.load(data)
const result = [];
const hasil = [];
$('div > a').get().map(b => {
const link = $(b).find('img').attr('src')
result.push(link)
});
result.forEach(v => {
if(v == undefined) return
hasil.push(v.replace(/236/g,'736'))
})
hasil.shift();
resolve(hasil)
})
})
} 

function xvideos(query) {
return new Promise((resolve, reject) => {
axios.get(`https://xvideosporno.blog.br/?s=${query}`).then( tod => {
const $ = cheerio.load(tod.data)
var postagem = [];
$("div.postbox").each((_, say) => {
var titulo = $(say).find("a").attr('title');
var link = $(say).find("a").attr('href');
var img = $(say).find("img").attr('src');
var duração = $(say).find("time.duration-top").text().trim();
var qualidade = $(say).find("b.hd-top").text().trim();
var resultado = {
titulo: titulo,
img: img,
duração: duração,
qualidade: qualidade,
link: link
}
postagem.push(resultado)
})
resolve(postagem)
}).catch(reject)
});
}

function pornhubserch(query) {
return new Promise((resolve, reject) => {
axios.get(`https://pt.pornhub.com/video/search?search=${query}`).then( tod => {
const $ = cheerio.load(tod.data)
var postagem = [];
$("li.pcVideoListItem.js-pop.videoblock.videoBox").each((_, say) => {
var titulo = $(say).find("a").attr('title');
var link = $(say).find("a").attr('href');
var img = $(say).find("img").attr('data-thumb_url');
var duração = $(say).find("var.duration").text().trim();
var qualidade = $(say).find("span.hd-thumbnail").text().trim();
var autor = $(say).find("div.usernameWrap").text().trim();
var visualizações = $(say).find("span.views").text().trim();
var data_upload = $(say).find("var.added").text().trim();
var hype = $(say).find("div.value").text().trim();
var link2 = `https://pt.pornhub.com${link}`
var resultado = {
titulo: titulo,
img: img,
duração: duração,
qualidade: qualidade,
autor: autor,
visualizações: visualizações,
data_upload: data_upload,
hype: hype,
link: link2
}
postagem.push(resultado)
})
resolve(postagem)
}).catch(reject)
});
}

function parseFileSize(size) {
return parseFloat(size) * (/GB/i.test(size)
? 1000000
: /MB/i.test(size)
? 1000
: /KB/i.test(size)
? 1
: /bytes?/i.test(size)
? 0.001
: /B/i.test(size)
? 0.1
: 0);
}

function styletext(teks) {
return new Promise((resolve, reject) => {
axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > h6 > a').text(), result: $(b).find('td:nth-child(2)').text().trim() })
}),
resolve(hasil)
})
})
}
function xnxxsearch(query) {
return new Promise((resolve, reject) => {
const baseurl = 'https://www.xnxx.com'
fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'})
.then(res => res.text())
.then(res => {
let $ = cheerio.load(res, {
xmlMode: false
});
let title = [];
let url = [];
let desc = [];
let resultado = [];

$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb').each(function(c, d) {
url.push(baseurl+$(d).find('a').attr('href'))
})
})
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb-under').each(function(c, d) {
desc.push($(d).find('p.metadata').text())
$(d).find('a').each(function(e,f) {
title.push($(f).attr('title'))
})
})
})
for (let i = 0; i < title.length; i++) {
resultado.push({
title: title[i],
info: desc[i],
link: url[i]
})
}
resolve({
resultado: resultado
})
})
.catch(err => reject({code: 503, status: false, result: err }))
})
}



module.exports = {
xvideos,
wallpaper,
pornhubserch,
tiktok,
tiktok2,
getBuffer,
Mp3v1,
Mp4v1,
ytSearch,
pinterest,
styletext,
xnxxsearch,
convertSticker,
dl,
ytss
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.cyan(`ALTERAÇÕES SALVAS ${__filename}`))
delete require.cache[file]
require(file)})