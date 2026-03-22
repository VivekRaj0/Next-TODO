import Link from "next/link";
import TodoDay from "../../todoDay";

export default async function TodoDayPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;

  return (
    <div style={{ padding: "20px" }}>
      <Link
        href="/todos"
        style={{ display: "inline-block", marginBottom: "16px" }}
      >
        ← Back to calendar
      </Link>
      <TodoDay date={date} />
    </div>
  );
}
