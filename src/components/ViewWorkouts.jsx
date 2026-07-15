import { useEffect, useState } from "react";
import axios from "axios";

const ViewWorkouts = () => {

    const [workouts, setWorkouts] = useState([]);

    const fetchWorkouts = () => {

        axios.post("http://localhost:3000/view-workouts", {})

        .then((response) => {

            setWorkouts(response.data);

        })

        .catch((error) => {

            console.log(error);

        });

    }

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

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover table-striped">

                            <thead className="table-dark">

                                <tr>

                                    <th>Workout ID</th>
                                    <th>Workout Name</th>
                                    <th>Workout Type</th>
                                    <th>Duration</th>
                                    <th>Difficulty Level</th>
                                    <th>Target Muscle Group</th>
                                    <th>Equipment Required</th>
                                    <th>Calories Burn Estimate</th>
                                    <th>Trainer Name</th>
                                    <th>Schedule</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    workouts.map((value,index)=>(

                                        <tr key={index}>

                                            <td>{value.workoutId}</td>
                                            <td>{value.workoutName}</td>
                                            <td>{value.workoutType}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.difficultyLevel}</td>
                                            <td>{value.targetMuscleGroup}</td>
                                            <td>{value.equipmentRequired}</td>
                                            <td>{value.caloriesBurnEstimate}</td>
                                            <td>{value.trainerName}</td>
                                            <td>{value.schedule}</td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewWorkouts;