function remove (string) {
  return string.replace(/!+\s/g, ' ')
               .replace(/!+$/g, '') 
}