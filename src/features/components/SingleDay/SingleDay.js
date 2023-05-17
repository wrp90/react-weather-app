import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleDay = () => {
    const { dt } = useParams();
    console.log(dt)
    const selectedDay = useSelector((state) =>
        state.cities.singleDay.find((day) => day.dt === Number(dt))
    );
    console.log("single day info:", selectedDay)



    return (
        <div>
            <h1>{selectedDay.date}</h1>
        </div>
    )
};

export default SingleDay;



