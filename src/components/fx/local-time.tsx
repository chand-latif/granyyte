"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Karachi",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** Live studio clock (Sialkot, PKT). */
export function LocalTime() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {time}
    </span>
  );
}
