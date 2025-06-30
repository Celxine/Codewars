function solution(text, markers) {
  
  return text.split('\n')
    .map(str => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
    .join('\n');
}
​