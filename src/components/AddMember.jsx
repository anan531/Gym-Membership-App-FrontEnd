import React, { useState } from 'react'
import axios from 'axios'

const AddMember = () => {

    const [member, setMember] = useState({
        memberId: "",
        memberName: "",
        age: "",
        gender: "",
        phoneNumber: "",
        email: "",
        membershipType: "",
        joiningDate: "",
        expiryDate: "",
        lockerNumber: ""
    })

    const inputHandler = (event) => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        console.log(member)

        axios.post("http://localhost:3000/add-mem", member)
            .then((response) => {
                alert("Member Added Successfully")
            })
            .catch((error) => {
                console.log(error)
                alert("Failed to Add Member")
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row g-3 mt-3">

                    <div className="col-12">
                        <h2 className="text-center">Add Member1</h2>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Member ID</label>
                        <input type="text" className="form-control" name="memberId" value={member.memberId} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Member Name</label>
                        <input type="text" className="form-control" name="memberName" value={member.memberName} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" name="age" value={member.age} onChange={inputHandler} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Gender</label>
                        <select className="form-control" name="gender" value={member.gender} onChange={inputHandler}>
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" name="phoneNumber" value={member.phoneNumber} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={member.email} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Membership Type</label>
                        <input type="text" className="form-control" name="membershipType" value={member.membershipType} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Joining Date</label>
                        <input type="date" className="form-control" name="joiningDate" value={member.joiningDate} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Expiry Date</label>
                        <input type="date" className="form-control" name="expiryDate" value={member.expiryDate} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Locker Number</label>
                        <input type="text" className="form-control" name="lockerNumber" value={member.lockerNumber} onChange={inputHandler} />
                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-primary" onClick={readValues}>
                            Add Member
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddMember