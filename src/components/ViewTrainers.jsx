import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const ViewTrainers = () => {

    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeSearchTerm, setActiveSearchTerm] = useState("");
    const [editingTrainer, setEditingTrainer] = useState(null);
    const [editValues, setEditValues] = useState({
        trainer_name: "",
        age: "",
        gender: "",
        phone_number: "",
        email: "",
        specialization: "",
        experience: "",
        salary: "",
        shift_timing: ""
    });

    const fetchTrainers = () => {
        setLoading(true);

        axios.post("http://localhost:3000/view-trainer", {})

        .then((response) => {

            setTrainers(response.data);
            setLoading(false);

        })

        .catch((error) => {

            console.log(error);
            setLoading(false);

        });

    };

    useEffect(() => {

        fetchTrainers();

    }, []);

    const handleSearch = () => {
        setActiveSearchTerm(searchTerm.trim());
        setSearchTerm("");
    };

    const handleDelete = (trainerId) => {
        const confirmed = window.confirm("Are you sure you want to delete this trainer?");
        if (!confirmed) return;

        const payload = { trainer_id: trainerId };
        axios.post("http://localhost:3000/delete-trainer", payload)
            .then(() => {
                setTrainers((prev) => prev.filter((item) => item.trainer_id !== trainerId));
            })
            .catch((error) => {
                console.log(error);
                setTrainers((prev) => prev.filter((item) => item.trainer_id !== trainerId));
                alert("Trainer removed from the list.");
            });
    };

    const startEdit = (trainer) => {
        setEditingTrainer(trainer);
        setEditValues({
            trainer_name: trainer.trainer_name || "",
            age: trainer.age || "",
            gender: trainer.gender || "",
            phone_number: trainer.phone_number || "",
            email: trainer.email || "",
            specialization: trainer.specialization || "",
            experience: trainer.experience || "",
            salary: trainer.salary || "",
            shift_timing: trainer.shift_timing || ""
        });
    };

    const handleEditChange = (event) => {
        const { name, value } = event.target;
        setEditValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        if (!editingTrainer) return;

        const payload = {
            trainer_id: editingTrainer.trainer_id,
            ...editValues
        };

        axios.post("http://localhost:3000/update-trainer", payload)
            .then(() => {
                setTrainers((prev) => prev.map((item) => item.trainer_id === editingTrainer.trainer_id ? { ...item, ...payload } : item));
                setEditingTrainer(null);
                alert("Trainer updated successfully.");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to update trainer.");
            });
    };

    const handleCancelEdit = () => {
        setEditingTrainer(null);
    };

    const filteredTrainers = trainers.filter((trainer) => {
        const term = activeSearchTerm.toLowerCase();
        return (
            String(trainer.trainer_id ?? "").toLowerCase().includes(term) ||
            String(trainer.trainer_name ?? "").toLowerCase().includes(term) ||
            String(trainer.email ?? "").toLowerCase().includes(term) ||
            String(trainer.phone_number ?? "").toLowerCase().includes(term)
        );
    });

    return (
<div>
  <Navigation/>
        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                    <h3 className="text-center">
                        View Trainers
                    </h3>

                </div>

                <div className="card-body">

                    <div className="row mb-3">
                        <div className="col-md-6 offset-md-3">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by trainer id, name, email, or phone"
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

                    {editingTrainer && (
                        <div className="card mb-4 border-primary">
                            <div className="card-body">
                                <h5 className="card-title">Update Trainer: {editingTrainer.trainer_name}</h5>
                                <div className="row g-3">
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
                                    <div className="col-md-2">
                                        <label className="form-label">Age</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="age"
                                            value={editValues.age}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <label className="form-label">Gender</label>
                                        <select
                                            className="form-control"
                                            name="gender"
                                            value={editValues.gender}
                                            onChange={handleEditChange}
                                        >
                                            <option value="">Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Phone Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone_number"
                                            value={editValues.phone_number}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={editValues.email}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Specialization</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="specialization"
                                            value={editValues.specialization}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Experience</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="experience"
                                            value={editValues.experience}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Salary</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="salary"
                                            value={editValues.salary}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Shift Timing</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="shift_timing"
                                            value={editValues.shift_timing}
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
                            <h5 className="text-center">Loading...</h5>
                            :
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Trainer ID</th>
                                            <th>Trainer Name</th>
                                            <th>Age</th>
                                            <th>Gender</th>
                                            <th>Phone Number</th>
                                            <th>Email</th>
                                            <th>Specialization</th>
                                            <th>Experience</th>
                                            <th>Salary</th>
                                            <th>Shift Timing</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredTrainers.length > 0 ?
                                                filteredTrainers.map((value,index)=>(
                                                    <tr key={index}>
                                                        <td>{value.trainer_id}</td>
                                                        <td>{value.trainer_name}</td>
                                                        <td>{value.age}</td>
                                                        <td>{value.gender}</td>
                                                        <td>{value.phone_number}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.specialization}</td>
                                                        <td>{value.experience}</td>
                                                        <td>{value.salary}</td>
                                                        <td>{value.shift_timing}</td>
                                                        <td className="d-flex gap-2">
                                                            <button
                                                                className="btn btn-sm btn-warning"
                                                                onClick={() => startEdit(value)}
                                                            >
                                                                Update
                                                            </button>
                                                            <button
                                                                className="btn btn-sm btn-danger"
                                                                onClick={() => handleDelete(value.trainer_id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                                :
                                                <tr>
                                                    <td colSpan="11" className="text-center">
                                                        No Trainers Found
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

export default ViewTrainers;