export default function TodoDay({ date }: { date: string }) {
  return (
    <div style={{color: 'white'}}>
      <h1>Todo Day</h1>
      <p>{date}</p>
    </div>
  );
}