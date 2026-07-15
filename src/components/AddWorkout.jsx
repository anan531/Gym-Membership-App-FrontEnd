import React, { useState } from 'react'
import axios from 'axios'
import Navigation from './Navigation'

const AddWorkout = () => {

    const [workout, setWorkout] = useState({
        workoutId: "",
        workoutName: "",
        workoutType: "",
        trainerName: "",
        duration: "",
        difficultyLevel: "",
        targetMuscleGroup: "",
        caloriesBurnEstimate: "",
        equipmentRequired: "",
        workoutSchedule: ""
    })

    const inputHandler = (event) => {
        setWorkout({ ...workout, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        console.log(workout)

        axios.post("http://localhost:3000/add-workout", workout)
            .then((response) => {
                alert("Workout Added Successfully")
            })
            .catch((error) => {
                console.log(error)
                alert("Failed to Add Workout")
            })
    }

    return (
        <div>
          <Navigation/>
            <div className="container">
                <div className="row g-3 mt-3">

                    <div className="col-12">
                        <h2 className="text-center">Add Workout</h2>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Workout ID</label>
                        <input type="text" className="form-control" name="workout_id" value={workout.workout_id} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Workout Name</label>
                        <input type="text" className="form-control" name="workout_name" value={workout.workout_name} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Workout Type</label>
                        <input type="text" className="form-control" name="workout_type" value={workout.workout_type} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Trainer Name</label>
                        <input type="text" className="form-control" name="trainer_name" value={workout.trainer_name} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Duration (Minutes)</label>
                        <input type="number" className="form-control" name="duration" value={workout.duration} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Difficulty Level</label>
                        <input type="text" className="form-control" name="difficulty_level" value={workout.difficulty_level} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Target Muscle Group</label>
                        <input type="text" className="form-control" name="target_muscle_group" value={workout.target_muscle_group} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Calories Burn Estimate</label>
                        <input type="number" className="form-control" name="calories_burn_estimate" value={workout.calories_burn_estimate} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Equipment Required</label>
                        <input type="text" className="form-control" name="equipment_required" value={workout.equipment_required} onChange={inputHandler} />
                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-dark" onClick={readValues}>
                            Add Workout
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddWorkout