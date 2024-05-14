import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Cards from "../Components/Cards";
import { useEffect, useState } from "react";
import axios from "axios";
import TimeSlot from "../Components/TimeSlot";

const Room = () => {
  const params = useParams();
  const floorNo = params.floorNo; //<-can be destructured as const {floorNo} = useParams();
  const [rooms] = useSearchParams();
  const roomNo = rooms.get("room");
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (isNaN(floorNo) || floorNo > 7 || floorNo < 0) && navigate("/not-found");
  }, []);
  //   const facultyName = "riku";

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `https://class-allocator-api.up.railway.app/api/v2/classrooms/${floorNo}?room=${roomNo}`
        );
        // console.log(response.data);
        setClasses(response.data.classes);
        // console.log(classes);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);
  if (error) {
    return <h1>Something went wrong!</h1>;
  }
  if (loading) {
    return <h1>Loading !</h1>;
  }
  // const className = [
  //   "row-start-1",
  //   "row-start-2",
  //   "row-start-3",
  //   "row-start-4",
  //   "row-start-5",
  //   "row-start-6",
  //   "row-start-7",
  //   "row-start-8",
  //   "row-start-9",
  //   "row-end-2",
  //   "row-end-3",
  //   "row-end-4",
  //   "row-end-5",
  //   "row-end-6",
  //   "row-end-7",
  //   "row-end-8",
  //   "row-end-9",
  // ];

  return (
    <>
      <div className="px-4 BebasNeue font-thin text-3xl my-2 ">
        You are checking classes on <br /> Floor No -{" "}
        <span className="text-[#f9b234]">{floorNo}</span> <br /> Room No -
        <span className="text-[#f9b234]"> {roomNo}</span>
      </div>
      <div className="flex justify-center mx-auto relative">
        <TimeSlot />
        <div className="ml-20 mt-6 grid grid-rows-9 grid-cols-1 w-full px-4 gap-5 grid-flow-col-dense">
          {classes.map((classCard, i) => {
            let tempClassname = "";
            let length = classCard.slots.length;
            if (length > 1) {
              tempClassname = `row-start-${classCard.slots[0]} row-end-${
                classCard.slots[length - 1] + 1
              }`;
            } else {
              tempClassname = `row-start-${classCard.slots[0]}`;
            }
            return (
              <Cards
                key={i}
                batch={classCard.batch}
                teacherName={classCard.teacher}
                startTime={classCard.startTime}
                endTime={classCard.endTime}
                className={tempClassname}
              />
            );
          })}
          {/* Test case below */}
          <Cards
            batch={"hello"}
            teacherName={"hello"}
            startTime={"hello"}
            endTime={"hello"}
            className="row-start-7 row-end-9"
          />
        </div>
      </div>
    </>
  );
};

export default Room;
