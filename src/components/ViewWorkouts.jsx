import { useState } from "react";

const ViewWorkouts = () => {

    const [workouts] = useState([

        {
            workoutId: "W001",
            workoutName: "Chest Workout",
            trainer: "John",
            duration: "60 mins",
            difficulty: "Intermediate",
            calories: "450"
        },

        {
            workoutId: "W002",
            workoutName: "Leg Workout",
            trainer: "David",
            duration: "75 mins",
            difficulty: "Advanced",
            calories: "600"
        },

        {
            workoutId: "W003",
            workoutName: "Yoga",
            trainer: "Maria",
            duration: "45 mins",
            difficulty: "Beginner",
            calories: "220"
        }

    ]);

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

                        <table className="table table-bordered table-striped table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Workout ID</th>
                                    <th>Workout Name</th>
                                    <th>Trainer</th>
                                    <th>Duration</th>
                                    <th>Difficulty</th>
                                    <th>Calories Burned</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    workouts.map((value,index)=>(

                                        <tr key={index}>

                                            <td>{value.workoutId}</td>
                                            <td>{value.workoutName}</td>
                                            <td>{value.trainer}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.difficulty}</td>
                                            <td>{value.calories}</td>

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