const ransomNote = 'aa';
const magazine = 'ab';

const canConstruct = function (ransomNote, magazine) {
    const map = new Map();
  for (const letter of ransomNote) {
        map.set(letter, (map.get(letter) || 0) + 1);
    }
    console.log(map);
  for (const letter of magazine) {
        if (map.has(letter) && map.get(letter) > 1) {
      map.set(letter, map.get(letter) - 1);
    } else if (map.has(letter) && map.get(letter) === 1) {
            map.delete(letter);
    }
  }
    return !map.size;
};

canConstruct(ransomNote, magazine);
