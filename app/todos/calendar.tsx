"use client";

import { useRouter } from "next/navigation";

function toDateParam(year: number, monthIndex: number, day: number) {
  const m = String(monthIndex + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

export default function Calendar({
  currentDate,
}: {
  currentDate: Date;
}) {
  const router = useRouter();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          marginBottom: "10px",
        }}
      >
        {weekdays.map((day) => (
          <div
            key={day}
            style={{
              border: "1px solid red",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              borderRadius: "3px",
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            }}
          >
            {day}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          flex: 1,
        }}
      >
        {dates.map((date) => (
          <div
            key={date}
            onClick={() =>
              router.push(`/todos/day/${toDateParam(year, monthIndex, date)}`)
            }
            style={{
              border: "1px solid red",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "3px",
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            }}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}