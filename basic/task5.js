/* Написать функцию, которая принимает строку (в этом тексте 3-5 предложений),
верните каждое первое слово в каждом предложении, через запятую. */

function getFirstWords(text) {
  let result = '';
  let sentence = '';
  for (let i = 0; i < text.length; i += 1) {
    sentence += text[i];
    if (text[i] === '.' || text[i] === '!' || text[i] === '?') {
      const words = sentence.trim().split(' ');
      if (words[0]) {
        result += (result ? ', ' : '') + words[0];
      }
      sentence = '';
    }
  }
  return result;
}

console.log(getFirstWords('Уральский сброс воды увеличили! Сброс воды с Ириклинского водохранилища подняли до 201 кубометра в секунду.  Губернатор Денис Паслер добился этого решения от Росводресурсов. В Орске ожидают подъёма уровня Урала, но незначительного. Мост на Никельской объездной дороге не пострадает. Остальные мосты под постоянным контролем.'));
