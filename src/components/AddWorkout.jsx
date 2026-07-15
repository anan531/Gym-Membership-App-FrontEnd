import React, { useState } from 'react'
import axios from 'axios'

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
            <div className="container">
                <div className="row g-3 mt-3">

                    <div className="col-12">
                        <h2 className="text-center">Add Workout</h2>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Workout ID</label>
                        <input type="text" className="form-control" name="workoutId" value={workout.workoutId} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Workout Name</label>
                        <input type="text" className="form-control" name="workoutName" value={workout.workoutName} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Workout Type</label>
                        <input type="text" className="form-control" name="workoutType" value={workout.workoutType} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Trainer Name</label>
                        <input type="text" className="form-control" name="trainerName" value={workout.trainerName} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Duration (Minutes)</label>
                        <input type="number" className="form-control" name="duration" value={workout.duration} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Difficulty Level</label>
                        <input type="text" className="form-control" name="difficultyLevel" value={workout.difficultyLevel} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Target Muscle Group</label>
                        <input type="text" className="form-control" name="targetMuscleGroup" value={workout.targetMuscleGroup} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Calories Burn Estimate</label>
                        <input type="number" className="form-control" name="caloriesBurnEstimate" value={workout.caloriesBurnEstimate} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Equipment Required</label>
                        <input type="text" className="form-control" name="equipmentRequired" value={workout.equipmentRequired} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Workout Schedule</label>
                        <input type="text" className="form-control" name="workoutSchedule" value={workout.workoutSchedule} onChange={inputHandler} />
                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-primary" onClick={readValues}>
                            Add Workout
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddWorkout