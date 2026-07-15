import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const ViewWorkouts = () => {

    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeSearchTerm, setActiveSearchTerm] = useState("");
    const [editingWorkout, setEditingWorkout] = useState(null);
    const [editValues, setEditValues] = useState({
        workout_name: "",
        workout_type: "",
        trainer_name: "",
        duration: "",
        difficulty_level: "",
        target_muscle_group: "",
        calories_burn_estimate: "",
        equipment_required: ""
    });

    const fetchWorkouts = () => {

        setLoading(true);

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

    const handleSearch = () => {
        setActiveSearchTerm(searchTerm.trim());
        setSearchTerm("");
    };

    const handleDelete = (workoutId) => {
        const confirmed = window.confirm("Are you sure you want to delete this workout plan?");
        if (!confirmed) return;

        const payload = { workout_id: workoutId };
        axios.post("http://localhost:3000/delete-workout", payload)
            .then(() => {
                setWorkouts((prevWorkouts) => prevWorkouts.filter((item) => item.workout_id !== workoutId));
            })
            .catch((error) => {
                console.log(error);
                setWorkouts((prevWorkouts) => prevWorkouts.filter((item) => item.workout_id !== workoutId));
                alert("Workout removed from the list.");
            });
    };

    const startEdit = (workout) => {
        setEditingWorkout(workout);
        setEditValues({
            workout_name: workout.workout_name || "",
            workout_type: workout.workout_type || "",
            trainer_name: workout.trainer_name || "",
            duration: workout.duration || "",
            difficulty_level: workout.difficulty_level || "",
            target_muscle_group: workout.target_muscle_group || "",
            calories_burn_estimate: workout.calories_burn_estimate || "",
            equipment_required: workout.equipment_required || ""
        });
    };

    const handleEditChange = (event) => {
        const { name, value } = event.target;
        setEditValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleUpdate = () => {
        if (!editingWorkout) return;

        const payload = {
            workout_id: editingWorkout.workout_id,
            ...editValues
        };

        axios.post("http://localhost:3000/update-workout", payload)
            .then(() => {
                setWorkouts((prevWorkouts) => prevWorkouts.map((item) =>
                    item.workout_id === editingWorkout.workout_id ? { ...item, ...payload } : item
                ));
                setEditingWorkout(null);
                alert("Workout updated successfully.");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to update workout.");
            });
    };

    const handleCancelEdit = () => {
        setEditingWorkout(null);
    };

    const filteredWorkouts = workouts.filter((workout) => {
        const searchValue = activeSearchTerm.toLowerCase();
        return (
            String(workout.workout_id ?? "").toLowerCase().includes(searchValue) ||
            String(workout.workout_name ?? "").toLowerCase().includes(searchValue) ||
            String(workout.workout_type ?? "").toLowerCase().includes(searchValue) ||
            String(workout.trainer_name ?? "").toLowerCase().includes(searchValue)
        );
    });

    return (
<div>
  <Navigation/>
        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                    <h3 className="text-center">
                        View Workout Plans
                    </h3>

                </div>

                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-6 offset-md-3">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by workout id, name, type, or trainer"
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {editingWorkout && (
                        <div className="card mb-4 border-primary">
                            <div className="card-body">
                                <h5 className="card-title">Update Workout: {editingWorkout.workout_name}</h5>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Workout Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="workout_name"
                                            value={editValues.workout_name}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Workout Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="workout_type"
                                            value={editValues.workout_type}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Trainer Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="trainer_name"
                                            value={editValues.trainer_name}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Duration</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="duration"
                                            value={editValues.duration}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Difficulty Level</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="difficulty_level"
                                            value={editValues.difficulty_level}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Target Muscle Group</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="target_muscle_group"
                                            value={editValues.target_muscle_group}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Calories Burn Estimate</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="calories_burn_estimate"
                                            value={editValues.calories_burn_estimate}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Equipment Required</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="equipment_required"
                                            value={editValues.equipment_required}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-12 d-flex justify-content-end gap-2 mt-2">
                                        <button className="btn btn-secondary" onClick={handleCancelEdit}>
                                            Cancel
                                        </button>
                                        <button className="btn btn-primary" onClick={handleUpdate}>
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

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
                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        filteredWorkouts.length > 0 ?

                                        filteredWorkouts.map((value,index)=>(

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
                                                <td className="d-flex gap-2">
                                                    <button
                                                        className="btn btn-sm btn-warning"
                                                        onClick={() => startEdit(value)}
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => handleDelete(value.workout_id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>

                                            </tr>

                                        ))

                                        :

                                        <tr>

                                            <td colSpan="10" className="text-center">
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
</div>
    );

};

export default ViewWorkouts;