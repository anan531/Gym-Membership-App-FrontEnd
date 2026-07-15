import React from 'react'

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">

        <h1 className="mb-4">Gym Membership Management System</h1>

        <p className="lead">
          Welcome to the Gym Membership Management System.
        </p>

        <div className="card mt-4 p-4">
          <h4>Available Modules</h4>
          <ul className="list-group mt-3">
            <li className="list-group-item">Add Member</li>
            <li className="list-group-item">View Members</li>
            <li className="list-group-item">Add Workout</li>
            <li className="list-group-item">View Workouts</li>
            <li className="list-group-item">Add Trainer</li>
            <li className="list-group-item">View Trainers</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Home