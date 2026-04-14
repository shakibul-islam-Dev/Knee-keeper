import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useLoaderData } from "react-router";

ChartJS.register(ArcElement, Tooltip, Legend);

const Status = () => {
  const users = useLoaderData();

  const onTrack = users.filter((u) => u.status === "on-track").length;
  const overdue = users.filter((u) => u.status === "overdue").length;
  const almostDue = users.filter((u) => u.status === "almost due").length;

  const data = {
    labels: ["On Track", "Overdue", "Almost Due"],
    datasets: [
      {
        data: [onTrack, overdue, almostDue],
        backgroundColor: ["#2D4F41", "#8B5CF6", "#34A853"],
        borderWidth: 0,
        cutout: "75%",
        spacing: 10,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        padding: "20px",
        background: "#f9f9f9",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
          Friendship Analytics
        </h2>
        <p style={{ color: "#666" }}>By Status Type</p>
      </div>

      <div style={{ height: "350px", width: "100%", maxWidth: "500px" }}>
        <Doughnut
          data={data}
          options={{
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom" } },
          }}
        />
      </div>
    </div>
  );
};

export default Status;
