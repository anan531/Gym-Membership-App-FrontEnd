import { useEffect, useState } from "react";
import axios from "axios";

const ViewMembers = () => {

    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchMembers = () => {

        setLoading(true);

        axios.post("http://localhost:3000/view-mems", {})

        .then((response) => {

            setMembers(response.data || []);
            setLoading(false);

        })

        .catch((error) => {

            console.log(error);
            setMembers([]);
            setLoading(false);

        });

    };

    useEffect(() => {

        fetchMembers();

    }, []);

    const handleDelete = (memberId) => {

        const confirmed = window.confirm("Are you sure you want to delete this member?");

        if (!confirmed) {
            return;
        }

        const payload = { member_id: memberId };

        axios.post("http://localhost:3000/delete-member", payload)

        .then(() => {

            setMembers((prevMembers) => prevMembers.filter((member) => member.member_id !== memberId));

        })

        .catch((error) => {

            console.log(error);
            setMembers((prevMembers) => prevMembers.filter((member) => member.member_id !== memberId));
            alert("Member removed from the list.");

        });

    };

    const filteredMembers = members.filter((member) => {

        const searchValue = searchTerm.toLowerCase();

        return (
            String(member.member_id ?? "").toLowerCase().includes(searchValue) ||
            String(member.member_name ?? "").toLowerCase().includes(searchValue) ||
            String(member.email ?? "").toLowerCase().includes(searchValue) ||
            String(member.phone_number ?? "").toLowerCase().includes(searchValue)
        );

    });

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3 className="text-center">
                        View Members
                    </h3>

                </div>

                <div className="card-body">

                    <div className="row mb-3">

                        <div className="col-md-6 offset-md-3">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by name, ID, email, or phone"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />

                        </div>

                    </div>

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
                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        filteredMembers.length > 0 ?

                                            filteredMembers.map((value, index) => (

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
                                                    <td>
                                                        <button
                                                            className="btn btn-sm btn-danger"
                                                            onClick={() => handleDelete(value.member_id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>

                                                </tr>

                                            ))

                                            :

                                            <tr>

                                                <td colSpan="11" className="text-center">
                                                    {members.length > 0 ? "No matching members found" : "No Members Found"}
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

    );

};

export default ViewMembers;