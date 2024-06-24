export default function capitalize(text: string) {
  const initial = text[0].toUpperCase()
  const second = text.slice(1).toLowerCase()

  return initial+second
}
