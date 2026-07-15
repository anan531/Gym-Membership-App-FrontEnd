import { useState } from "react";

const ViewMembers = () => {

    const [members] = useState([

        {
            memberId: "M001",
            name: "Joshua",
            age: 22,
            gender: "Male",
            phone: "9876543210",
            membership: "Premium",
            trainer: "John",
            joinDate: "2026-07-15"
        },

        {
            memberId: "M002",
            name: "Anan",
            age: 24,
            gender: "Male",
            phone: "9876543211",
            membership: "Gold",
            trainer: "David",
            joinDate: "2026-07-14"
        },

        {
            memberId: "M003",
            name: "Rahul",
            age: 23,
            gender: "Male",
            phone: "9876543212",
            membership: "Silver",
            trainer: "John",
            joinDate: "2026-07-10"
        }

    ]);

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
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Phone</th>
                                    <th>Membership</th>
                                    <th>Trainer</th>
                                    <th>Join Date</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    members.map((value,index)=>(

                                        <tr key={index}>

                                            <td>{value.memberId}</td>
                                            <td>{value.name}</td>
                                            <td>{value.age}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.membership}</td>
                                            <td>{value.trainer}</td>
                                            <td>{value.joinDate}</td>

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

export default ViewMembers