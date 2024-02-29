export function between(x, min, max) {
  return x >= min && x <= max;
}


export function generateSpans(min, max, step) {
  min = Number(min)
  max = Number(max)
  step = Number(step)
  let spans = [];

  for (let i = min; i <= max; i += step) {
      if (i === max) {
        spans.push(<span key={String(i)}>{String(i) + "+"}</span>)

      } else { 
        spans.push(<span key={String(i)}>{String(i)}</span>)
      }
  }

  return spans;
}