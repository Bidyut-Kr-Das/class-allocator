import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Cards from "../Components/Cards";
import { useEffect, useState } from "react";
import axios from "axios";

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
        console.log(response.data);
        setClasses(response.data.classes);
        console.log(classes);

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

  return (
    <>
      <div className="px-4 BebasNeue font-thin text-3xl my-2 ">
        You are checking classes on <br /> Floor No -{" "}
        <span className="text-[#f9b234]">{floorNo}</span> <br /> Room No -
        <span className="text-[#f9b234]"> {roomNo}</span>
      </div>
      <div className="flex  justify-center min-h-[26rem]  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4 gap-6">
          {classes.map((classCard, i) => {
            return (
              <Cards
                key={i}
                batch={classCard.batch}
                teacherName={classCard.teacher}
                startTime={classCard.startTime}
                endTime={classCard.endTime}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Room;
