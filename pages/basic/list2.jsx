function createList(last) {
  const list = [];
  for (let i = 1; i <= last; i++) {
    i !== last
      ? list.push(<span key={i}>{i},</span>)
      : list.push(<span key={i}>{i}</span>);
  }
  return list;
}

export default function list2() {
  return (
    <div>
      <div>{createList(20)}</div>
      <div>{createList(3)}</div>
      <div>{createList(11)}</div>
    </div>
  );
}
