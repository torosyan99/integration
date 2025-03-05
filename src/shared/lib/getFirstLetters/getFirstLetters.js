export function getFirstLetters(sentence) {
  const worlds = sentence.split(" ");
  if (worlds.length < 2) return "";
  const [first,second] = worlds
  return first[0] + second[0];
}
