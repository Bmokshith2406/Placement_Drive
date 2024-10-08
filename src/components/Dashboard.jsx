import React from "react";
import Navbar from "./Navbar";
import "./Dashboard.css";
import "./Navbar.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <h1 className="Headingonly">Dashboard</h1>
      <main className="grid-container">
        <section className="grid-item">
          <a href="Companies.pdf">
            <h3>Placement Statistics</h3>
            <img
              className="Imgs"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsspMsehAPckPfxEfd3PVmeNLbMK_dIUHwA&usqp=CAU"
              alt="Statistics"
            />
          </a>
        </section>

        <section className="grid-item">
          <a href="/announcements">
            <h3>Announcements</h3>
            <img
            className="Imgs"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKlpmGvY0DP69msZZC6cdLqv_JKkKeTq0PA&usqp=CAU"
              alt="Announcements"
            />
          </a>
        </section>

        <section className="grid-item">
          <a href="/statistics">
            <h3>Feedback and Reviews</h3>
            <img
            className="Imgs"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyR91wYdJevaqKGcoS75ncS-v6cExLwg13A&usqp=CAU"
              alt="Statistics"
            />
          </a>
        </section>
      </main>
      <footer className="Foot123">
        <p>&copy; CBIT PLACEMENT BOARD | 2024 </p>
      </footer>
    </>
  );
};

export default Dashboard;
