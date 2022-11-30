function getLinks(){
    try {
        const data = require('../data/current_links.json');
        return data;
    } catch(err) {
        return null;
    }
}

function getRandomColor(){
    return randomColors[Math.floor(Math.random() * randomColors.length)];
}

const randomColors = [
    '#fff6e9',
    '#ffefd7',
    '#affef9',
    '#e3f0ff',
    '#a2d7ff',
    '#c5e2ff', 
    '#debefc',
    '#D37EFF',
    '#FFFDC6',
    '#DFFFF7',
    '#EdddF7',
    '#ACDDDE',
    '#CAF1DE',
    '#E1F8DC',
    '#FEF8DD',
    '#FFE7C7'
    ];

export { getRandomColor, getLinks };