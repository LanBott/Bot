
global.owner = [
  ["6281224863098"],
]; 

global.numberbot = "Lan";
global.nameowner = "Dellas";
global.nomorown = "6281224863098";

/*Ini Isi dengan Payment kalian masing masing*/
global.dana = "6283119680420";
global.pulsa = "6283119680420";
global.ovo = "6283119680420";

/*Apa Itu apikey ??*/
global.APIs = {};
global.APIKeys = {};
global.ocrapi = "314b4b8b2d88957";

//Other Settings
global.namebot = "©LanV2";
global.title = "LanBot By Whatsapp"
global.sgc = "https://chat.whatsapp.com/DFK7LBm7aUt41Ug2yUxNr5";
global.isPairing = true; //Mau pake pairing? true = idup, false = mati
global.sig = "https://whatsapp.com/channel/0029VaEbPCF7IUYaKhwkFl0j";
global.swa = "wa.me/6281224863098";
global.version = "1.0";
global.access_denied = "https://telegra.ph/file/854a00723c61cb1f0e8f2.jpg";

global.wm = "LanBot WhatsApp";
global.done = "```Success!```";
global.icon = "https://telegra.ph/file/854a00723c61cb1f0e8f2.jpg";
global.fla = "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=";
global.wait = "```Tunggu Sebentar⌛```";
global.eror = "`! Error Command Failed`";
global.packname = "BotWhatsapp";
global.author = "Made by Lan";

//Ini Isi pakai video & poto lu
global.gif = "https://iili.io/Jugyqyx.jpg"; 
global.thumb = "https://iili.io/Jugyqyx.jpg";
global.multiplier = 45;
global.sourceurl = 'https://itsmedell.vercel.app/'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✉️",
      money: "💵",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

const Jimp = require('jimp');
const fetch = require('node-fetch');

let resizeThumb =  resize(thumb, 300, 250)
global.Thumbnails = resizeThumb;

/*====[ FAKE THUMBNAIL ACCESS DENIED ]======*/

global.danied = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363200509034116@newsletter',
      newsletterName: "LanBot",
      serverMessageId: -1
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `UPSS!! AKSES DITOLAK`,
      body: null,
      thumbnailUrl: access_denied,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}

/*========[ GLOBAL ADREPLY ]============*/
global.adReply = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363200509034116@newsletter',
      newsletterName: "LanBot",
      serverMessageId: -1
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `LanBot`,
      body: wm,
      thumbnailUrl: thumb,
      sourceUrl: "",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}

/*=========[ FAKE IG ( SMALL AD REPLY ) ]==============*/

global.fakeig = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363200509034116@newsletter',
      newsletterName: "LanBot",
      serverMessageId: -1         
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `LanBot`,
      body: wm,
      thumbnailUrl: icon,
      sourceUrl: "https://www.instagram.com/itsmedells_188",
      mediaType: 1,
      renderLargerThumbnail: false
    }
  }
}

async function resize(url, width, height, referer = null) {
  try {
    const fetchOptions = {
      redirect: 'follow',
      headers: {},
    };

    if (referer) {
      fetchOptions.headers['Referer'] = referer;
    }

    const response = await fetch(url, fetchOptions);

    if (response.ok) {
      const finalUrl = response.url;
      const arrayBuffer = await response.arrayBuffer();
      return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error.message);

    try {
      const undiciFetchOptions = {
        redirect: 'follow',
        headers: {},
      };

      if (referer) {
        undiciFetchOptions.headers['Referer'] = referer;
        }

      const arrayBuffer = await undiciFetch(url, undiciFetchOptions).then(response => response.arrayBuffer());
      return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
    } catch (retryError) {
      console.error('Retry Error:', retryError.message);
      return Buffer.from([]);
    }
  }
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

let fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update settings.js");
  delete require.cache[file];
  require(file);
});
