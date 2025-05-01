import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(response.data);
      } catch (err) {
        console.error("Error fetching member:", err.message);
        setError("❌ Member not found or error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) return <p>Loading member details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const imageUrl = member.image
    ? member.image.startsWith("/uploads")
      ? `http://localhost:5000${member.image}`
      : `http://localhost:5000/uploads/${member.image}`
    : "https://via.placeholder.com/150";

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
      <img
        src={imageUrl}
        alt="Profile"
        width="150"
        height="150"
        style={{ borderRadius: "8px", marginBottom: "10px", objectFit: "cover" }}
      />
      <h2>{member.name}</h2>
      <p><strong>Roll No:</strong> {member.rollno}</p>
      <p><strong>Year:</strong> {member.year}</p>
      <p><strong>Degree:</strong> {member.degree}</p>
      <p><strong>Project:</strong> {member.project}</p>
      <p><strong>Hobbies:</strong> {member.hobbies}</p>
      <p><strong>Certifications:</strong> {member.cert}</p>
      <p><strong>Internship:</strong> {member.internship}</p>
      <p><strong>Aim:</strong> {member.aim}</p>

      <button
        onClick={() => navigate("/members")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back to Members List
      </button>
    </div>
  );
}

export default MemberDetails;
