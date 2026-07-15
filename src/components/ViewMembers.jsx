import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const ViewMembers = () => {

    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeSearchTerm, setActiveSearchTerm] = useState("");
    const [editingMember, setEditingMember] = useState(null);
    const [editValues, setEditValues] = useState({
        member_name: "",
        age: "",
        gender: "",
        phone_number: "",
        email: "",
        membership_type: "",
        joining_date: "",
        expiry_date: "",
        locker_number: ""
    });

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

    const handleSearch = () => {
        setActiveSearchTerm(searchTerm.trim());
        setSearchTerm("");
    };

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

    const startEdit = (member) => {
        setEditingMember(member);
        setEditValues({
            member_name: member.member_name || "",
            age: member.age || "",
            gender: member.gender || "",
            phone_number: member.phone_number || "",
            email: member.email || "",
            membership_type: member.membership_type || "",
            joining_date: member.joining_date || "",
            expiry_date: member.expiry_date || "",
            locker_number: member.locker_number || ""
        });
    };

    const handleEditChange = (event) => {
        const { name, value } = event.target;
        setEditValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        if (!editingMember) {
            return;
        }

        const payload = {
            member_id: editingMember.member_id,
            ...editValues
        };

        axios.post("http://localhost:3000/update-member", payload)
            .then(() => {
                setMembers((prevMembers) => prevMembers.map((member) =>
                    member.member_id === editingMember.member_id ? { ...member, ...payload } : member
                ));
                setEditingMember(null);
                alert("Member updated successfully.");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to update member.");
            });
    };

    const handleCancelEdit = () => {
        setEditingMember(null);
    };

    const filteredMembers = members.filter((member) => {

        const searchValue = activeSearchTerm.toLowerCase();

        return (
            String(member.member_id ?? "").toLowerCase().includes(searchValue) ||
            String(member.member_name ?? "").toLowerCase().includes(searchValue) ||
            String(member.email ?? "").toLowerCase().includes(searchValue) ||
            String(member.phone_number ?? "").toLowerCase().includes(searchValue)
        );

    });

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

                    <div className="row mb-3">

                        <div className="col-md-6 offset-md-3">

                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name, ID, email, or phone"
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

                    {
                        editingMember && (
                            <div className="card mb-4 border-primary">
                                <div className="card-body">
                                    <h5 className="card-title">Update Member: {editingMember.member_name}</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Member Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="member_name"
                                                value={editValues.member_name}
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
                                            <label className="form-label">Membership Type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="membership_type"
                                                value={editValues.membership_type}
                                                onChange={handleEditChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Joining Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="joining_date"
                                                value={editValues.joining_date}
                                                onChange={handleEditChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Expiry Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="expiry_date"
                                                value={editValues.expiry_date}
                                                onChange={handleEditChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Locker Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="locker_number"
                                                value={editValues.locker_number}
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
                        )
                    }

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
                                                    <td className="d-flex gap-2">
                                                        <button
                                                            className="btn btn-sm btn-warning"
                                                            onClick={() => startEdit(value)}
                                                        >
                                                            Update
                                                        </button>
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
</div>
    );

};


export default ViewMembers;