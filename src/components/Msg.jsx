export function Message({ message, color }) {
  return (
    <div style={{ backgroundColor: `${color}` }}>
      <h1>{message}</h1>
    </div>
  );
}
