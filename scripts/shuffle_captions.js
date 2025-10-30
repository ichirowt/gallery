const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const originalCaptionsPath = path.join(__dirname, '../_data/captions.yml');
const shuffledCaptionsPath = path.join(__dirname, '../_data/shuffled_captions.yml');

try {
    const fileContents = fs.readFileSync(originalCaptionsPath, 'utf8');
    const captions = yaml.load(fileContents);

    // Convert object to array of [key, value] pairs for shuffling
    let entries = Object.entries(captions);

    // Fisher-Yates (Knuth) shuffle algorithm
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]]; // Swap elements
    }

    // Convert back to object
    const shuffledCaptions = Object.fromEntries(entries);

    const yamlStr = yaml.dump(shuffledCaptions);
    fs.writeFileSync(shuffledCaptionsPath, yamlStr, 'utf8');
    console.log('Shuffled captions written to _data/shuffled_captions.yml');
} catch (e) {
    console.error('Error shuffling captions:', e);
}
