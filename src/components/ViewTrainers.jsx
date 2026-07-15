import { useEffect, useState } from "react";
import axios from "axios";

const ViewTrainers = () => {

    const [trainers, setTrainers] = useState([]);

    const fetchTrainers = () => {

        axios.post("http://localhost:3000/view-trainers", {})

        .then((response) => {

            setTrainers(response.data);

        })

        .catch((error) => {

            console.log(error);

        });

    }

    useEffect(() => {

        fetchTrainers();

    }, []);

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-warning text-dark">

                    <h3 className="text-center">
                        View Trainers
                    </h3>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover table-striped">

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

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    trainers.map((value,index)=>(

                                        <tr key={index}>

                                            <td>{value.trainerId}</td>
                                            <td>{value.trainerName}</td>
                                            <td>{value.age}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.phoneNumber}</td>
                                            <td>{value.email}</td>
                                            <td>{value.specialization}</td>
                                            <td>{value.experience}</td>
                                            <td>{value.salary}</td>
                                            <td>{value.shiftTiming}</td>

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

export default ViewTrainers;