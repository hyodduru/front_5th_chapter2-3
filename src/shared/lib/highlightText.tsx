export const highlightText = (text: string | undefined, highlight: string) => {
  if (!text) return null
  if (!highlight.trim()) {
    return <span data-testid="highlight-text">{text}</span>
  }

  const regex = new RegExp(`(${highlight})`, "gi")
  const parts = text.split(regex)

  return (
    <span data-testid="highlight-text">
      {parts.map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>))}
    </span>
  )
}
