import React from 'react'

const Navigation = () => {
  return (
    <div>
        
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Gym Membership APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/addmember">Add Member</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/viewmember">View Member</a>
        </li>


        <li className="nav-item">
          <a className="nav-link" href="/addworkout">Add Workout</a>
        </li>



        <li className="nav-item">
          <a className="nav-link" href="/viewworkout">View Workout</a>
        </li>


        <li className="nav-item">
          <a className="nav-link" href="/addtrainer">Add Trainer</a>
        </li>


        <li className="nav-item">
          <a className="nav-link" href="/viewtrainer">View Trainer</a>
        </li>

      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navigation