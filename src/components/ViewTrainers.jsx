import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const ViewTrainers = () => {

    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTrainers = () => {

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

                                        trainers.length > 0 ?

                                        trainers.map((value,index)=>(

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

                                            </tr>

                                        ))

                                        :

                                        <tr>

                                            <td colSpan="10" className="text-center">
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