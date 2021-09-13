export default function jsx4() {
  const subtitle = "I'm inside the JavaScript";

  return (
    <div>
      <h1>Integration JS and JSX</h1>
      <h2>{subtitle}</h2>
      <h5>{between(30, 1, 10)}</h5>
    </div>
  );
}

function between(value, min, max) {
  if (value >= min && value <= max) {
    return "Yes";
  } else {
    return "no";
  }
}
