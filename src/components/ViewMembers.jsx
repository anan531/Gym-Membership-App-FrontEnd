import { useEffect, useState } from "react";
import axios from "axios";

const ViewMembers = () => {

    const [members, setMembers] = useState([]);

    const fetchMembers = () => {

        axios.post("http://localhost:3000/view-members", {})

        .then((response) => {

            setMembers(response.data);

        })

        .catch((error) => {

            console.log(error);

        });

    }

    useEffect(() => {

        fetchMembers();

    }, []);

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3 className="text-center">
                        View Members
                    </h3>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover table-striped">

                            <thead className="table-dark">

                                <tr>

                                    <th>Member ID</th>
                                    <th>Member Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Membership Type</th>
                                    <th>Joining Date</th>
                                    <th>Expiry Date</th>
                                    <th>Locker Number</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    members.map((value,index)=>(

                                        <tr key={index}>

                                            <td>{value.memberId}</td>
                                            <td>{value.memberName}</td>
                                            <td>{value.age}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.phoneNumber}</td>
                                            <td>{value.email}</td>
                                            <td>{value.membershipType}</td>
                                            <td>{value.joiningDate}</td>
                                            <td>{value.expiryDate}</td>
                                            <td>{value.lockerNumber}</td>

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

export default ViewMembers;