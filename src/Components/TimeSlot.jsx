import axios from "axios";
import { useState, useEffect } from "react";

const TimeSlot = () => {
  const [starttimes, setStartTimes] = useState(["", ""]);
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "https://class-allocator-api.up.railway.app/api/v2/classrooms/slots"
      );
      //   console.log(result.data);
      setStartTimes(result.data.startTime);
    })();
  }, []);

  return (
    <div className="absolute  top-0 left-4 w-full flex flex-col gap-6">
      {starttimes.map((startTime, index) => {
        return (
          <div className="h-[14.5rem] flex gap-2 w-full" key={index}>
            <span className="text-xl font-bold tracking-wider">
              {startTime}
            </span>

            <svg
              width="600"
              height="7"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full mt-3"
            >
              <line
                strokeDasharray="15, 10, 5, 10"
                x1="0"
                y1="1"
                x2="600"
                y2="1"
              ></line>
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default TimeSlot;
