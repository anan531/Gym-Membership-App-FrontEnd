import React, { useState } from 'react'
import axios from 'axios'

const AddTrainer = () => {

    const [trainer, setTrainer] = useState({
        trainerId: "",
        trainerName: "",
        age: "",
        gender: "",
        phoneNumber: "",
        email: "",
        specialization: "",
        experience: "",
        salary: "",
        shiftTiming: ""
    })

    const inputHandler = (event) => {
        setTrainer({ ...trainer, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        console.log(trainer)

        axios.post("http://localhost:5000/addtrainer", trainer)
            .then((response) => {
                alert("Trainer Added Successfully")
            })
            .catch((error) => {
                console.log(error)
                alert("Failed to Add Trainer")
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row g-3 mt-3">

                    <div className="col-12">
                        <h2 className="text-center">Add Trainer</h2>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Trainer ID</label>
                        <input type="text" className="form-control" name="trainerId" value={trainer.trainerId} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Trainer Name</label>
                        <input type="text" className="form-control" name="trainerName" value={trainer.trainerName} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" name="age" value={trainer.age} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Gender</label>
                        <select className="form-control" name="gender" value={trainer.gender} onChange={inputHandler}>
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" name="phoneNumber" value={trainer.phoneNumber} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={trainer.email} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Specialization</label>
                        <input type="text" className="form-control" name="specialization" value={trainer.specialization} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Experience (Years)</label>
                        <input type="number" className="form-control" name="experience" value={trainer.experience} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Salary</label>
                        <input type="number" className="form-control" name="salary" value={trainer.salary} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Shift Timing</label>
                        <input type="text" className="form-control" name="shiftTiming" value={trainer.shiftTiming} onChange={inputHandler} />
                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-primary" onClick={readValues}>
                            Add Trainer
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddTrainer