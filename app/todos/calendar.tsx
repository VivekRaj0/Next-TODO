"use client";

export default function Calendar() {
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
      {/* Weekdays Header */}
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
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates Grid */}
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
            style={{
              border: "1px solid red",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: "8px",
              fontSize: "14px",
            }}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}