export const revalidate = 30;
export default async function PlayersPage() {
  const players = [
    { name: "Virat Kohli", country: "India", role: "Batsman" },
    { name: "Babar Azam", country: "Pakistan", role: "Batsman" },
    { name: "Ben Stokes", country: "England", role: "All Rounder" },
    { name: "Pat Cummins", country: "Australia", role: "Bowler" },
    { name: "Rohit Sharma", country: "India", role: "Batsman" },
  ];
  return (
    <main
      style={{
        padding: "40px",
        backgroundColor: "#0f0f1a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {players.map((player, index) => (
          <div
            key={index}
            style={{
              margin: "30px",
              padding: "15px",
              backgroundColor: "#1a1a2e",
              color: "white",
              borderRadius: "8px",
              border: "1px solid #2a2a4a",
            }}
          >
            <h1 style={{ color: "#00d4ff", marginBottom: "8px" }}>
              {player.name}
            </h1>
            <p style={{ color: "#aaaaaa", marginBottom: "20px" }}>
              {player.country}
            </p>
            <p style={{ color: "#aaaaaa", marginBottom: "20px" }}>
              {player.role}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
