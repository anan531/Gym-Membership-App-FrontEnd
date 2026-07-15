import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const ViewMembers = () => {

    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMembers = () => {

        axios.post("http://localhost:3000/view-mems", {})

        .then((response) => {

            setMembers(response.data);
            setLoading(false);

        })

        .catch((error) => {

            console.log(error);
            setLoading(false);

        });

    };

    useEffect(() => {

        fetchMembers();

    }, []);

    return (
      <div>
        <Navigation/>
        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                    <h3 className="text-center">
                        View Members
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

                                        members.length > 0 ?

                                            members.map((value, index) => (

                                                <tr key={index}>

                                                    <td>{value.member_id}</td>
                                                    <td>{value.member_name}</td>
                                                    <td>{value.age}</td>
                                                    <td>{value.gender}</td>
                                                    <td>{value.phone_number}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.membership_type}</td>
                                                    <td>{value.joining_date}</td>
                                                    <td>{value.expiry_date}</td>
                                                    <td>{value.locker_number}</td>

                                                </tr>

                                            ))

                                            :

                                            <tr>

                                                <td colSpan="10" className="text-center">
                                                    No Members Found
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


export default ViewMembers;