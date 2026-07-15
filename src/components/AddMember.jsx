import React, { useState } from 'react'
import axios from 'axios'
import Navigation from './Navigation'

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
          <Navigation/>
            <div className="container">
                <div className="row g-3 mt-3">

                    <div className="col-12">
                        <h2 className="text-center">Add Member</h2>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Member ID</label>
                        <input type="text" className="form-control" name="member_id" value={member.member_id} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Member Name</label>
                        <input type="text" className="form-control" name="member_name" value={member.member_name} onChange={inputHandler} />
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
                        <input type="text" className="form-control" name="phone_number" value={member.phone_number} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={member.email} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Membership Type</label>
                        <input type="text" className="form-control" name="membership_type" value={member.membership_type} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Joining Date</label>
                        <input type="date" className="form-control" name="joining_date" value={member.joining_date} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Expiry Date</label>
                        <input type="date" className="form-control" name="expiry_date" value={member.expiry_date} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Locker Number</label>
                        <input type="text" className="form-control" name="locker_number" value={member.locker_number} onChange={inputHandler} />
                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-dark" onClick={readValues}>
                            Add Member
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddMember