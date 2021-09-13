export default function list1() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
      {arr.map((e) => (
        <span key={e}>{e},</span>
      ))}
    </div>
  );
}
