'use client'

import React from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function App() {
     return (
          <Calendar
               aria-label="Date (Read Only)"
               value={today(getLocalTimeZone())}
               isReadOnly
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-200 text-black p-2"
          />
     );
}