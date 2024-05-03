import { useNavigate, useParams } from "react-router-dom";
import Cards from "../Components/Cards";
import { useEffect } from "react";
export default function Room() {
  const params = useParams();
  const floorNo = params.floorNo;

  //   or i can destructureit as    const {floorNo} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (floorNo > 7) {
      navigate("/admin");
    }
  }, []);

  return (
    <>
      <div>You are checking class on Floor No :-{floorNo}</div>
      <div className="flex items-center justify-center min-h-screen bg-red-300  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4">
          <Cards />
        </div>
      </div>
    </>
  );
}
