import he from 'he'

export function htmlDecode(input) {
  // let textArea = document.createElement('textarea')
  // textArea.innerHTML = input
  // return textArea.value
  return he.decode(input)
}