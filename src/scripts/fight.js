const { JSDOM } = require('jsdom');
const { TextDecoder } = require('util');
const cheerio = require('cheerio');

const apis = [
  'https://api.chatwars.me/webview/battle/42fb77f8cc854e27b90b4a40c2027e49',
  // 'https://api.chatwars.me/webview/battle/5eec130cc2c9456b897694e02c0a4925',
  // 'https://api.chatwars.me/webview/battle/0bc7f86197194750a852f76cd3331101',
  // 'https://api.chatwars.me/webview/battle/5af4aefe9a8f438b99a0090ad63919b8',
];

class Player {
  constructor(userName) {
        this.userName = userName;
    this.weapon = '';
    this.totalHits = 0;
        this.notMissedHits = 0;
        this.critHitsCount = 0;
        this.totalDamage = 0;
        this.totalDamageWithoutOverkill = 0;
        this.averageDamagePerHit = 0;
        this.apis = [];
  }
}

class Turn {
    constructor() {
        this.userName = '';
        this.strikesNumber = 0;
    this.hitsNumber = 0;
    this.critsNumber = 0;
    this.dmg = 0;
    this.overDamage = 0;
    }
}

const playersList = new Map();

async function mainCalc() {
  for (const api of apis) {
    const battleData = await fetchBattleData(api);
    const parsedBattleData = parseBattleData(battleData);
    }
}

mainCalc();

/// ////////////////////////////////////////////////////////////////////

async function fetchBattleData(url) {
    try {
    const response = await fetch(url);
    const htmlText = await response.text();

    const $ = cheerio.load(htmlText);

    const cardContents = [];

    $('.card p').each((index, element) => {
            const textContent = $(element)
                .html()
                .trim()
        .replace(/<\/?b>/g, '')
        .split('<br>');
      cardContents.push(textContent);
        });

        return cardContents;
    } catch (error) {
    console.error('Error fetching or parsing HTML:', error);
    }
}

/// ///////////////////////////////////////////////////////////////////

function parseBattleData(battleData) {
  for (const turn of battleData) {
        const splitedTurn = turn;
        console.log(splitedTurn);
  }
}

/// ////////////////////////////////////////////////////////////////////
