import { useEffect, useState } from "react";
import axios from "axios";

const ViewWorkouts = () => {

    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchWorkouts = () => {

        axios.post("http://localhost:3000/view-workout", {})

        .then((response) => {

            setWorkouts(response.data);
            setLoading(false);

        })

        .catch((error) => {

            console.log(error);
            setLoading(false);

        });

    };

    useEffect(() => {

        fetchWorkouts();

    }, []);

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-success text-white">

                    <h3 className="text-center">
                        View Workout Plans
                    </h3>

                </div>

                <div className="card-body">

                    {

                        loading ?

                        <h5 className="text-center">
                            Loading...
                        </h5>

                        :

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">

                                <thead className="table-dark">

                                    <tr>

                                        <th>Workout ID</th>
                                        <th>Workout Name</th>
                                        <th>Workout Type</th>
                                        <th>Trainer Name</th>
                                        <th>Duration</th>
                                        <th>Difficulty Level</th>
                                        <th>Target Muscle Group</th>
                                        <th>Calories Burn Estimate</th>
                                        <th>Equipment Required</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        workouts.length > 0 ?

                                        workouts.map((value,index)=>(

                                            <tr key={index}>

                                                <td>{value.workout_id}</td>
                                                <td>{value.workout_name}</td>
                                                <td>{value.workout_type}</td>
                                                <td>{value.trainer_name}</td>
                                                <td>{value.duration}</td>
                                                <td>{value.difficulty_level}</td>
                                                <td>{value.target_muscle_group}</td>
                                                <td>{value.calories_burn_estimate}</td>
                                                <td>{value.equipment_required}</td>

                                            </tr>

                                        ))

                                        :

                                        <tr>

                                            <td colSpan="9" className="text-center">
                                                No Workout Plans Found
                                            </td>

                                        </tr>

                                    }

                                </tbody>

                            </table>

                        </div>

                    }

                </div>

            </div>

        </div>

    );

};

export default ViewWorkouts;