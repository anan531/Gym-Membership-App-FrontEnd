import React from 'react'
import Navigation from './Navigation'

const Home = () => {
  return (
    <div>
      <Navigation/>
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh", backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card shadow-lg p-5 text-center"
        style={{ maxWidth: "700px", borderRadius: "15px" }}
      >
        <h1 className="display-4 text-primary mb-3">
          Gym Membership Management System
        </h1>

        <hr />

        <p className="lead mt-3">
          Welcome to the Gym Membership Management System.
        </p>

        <p className="text-muted">
          Manage members, trainers, and workout plans efficiently through a
          simple and user-friendly interface.
        </p>

        <div className="mt-4">
          <h5>🏋️ Fitness • 💪 Strength • ❤️ Health</h5>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home