export default async function SchedulePage() {
  const upcomingMatches = [
    {
      name: "India Vs England",
      date: "15 March 2026",
      venue: "Wankhede Stadium",
      matchType: "T20",
    },
    {
      name: "Australia vs Pakistan",
      date: "17 March 2026",
      venue: "SCG, Sydney",
      matchType: "ODI",
    },
    {
      name: "West Indies vs Sri Lanka",
      date: "19 March 2026",
      venue: "Kensington Oval, Barbados",
      matchType: "TEST",
    },
  ];
  return (
    <main style={{ padding: '40px', backgroundColor: '#0f0f1a', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {upcomingMatches.map((match,index) => (
          <div key={index}
            style={{
              margin: "30px",
              padding: "15px",
              backgroundColor: "#1a1a2e",
              color: "white",
              borderRadius: "8px",
              border: '1px solid #2a2a4a'
            }}
          >
            <h1 style={{ color: "#00d4ff", marginBottom: "8px" }}>
              {match.name}
            </h1>
            <p style={{ color: "#aaaaaa", marginBottom: "20px" }}>
              {match.date}
            </p>
            <p style={{ color: "#aaaaaa", marginBottom: "20px" }}>
              📍 {match.venue}
            </p>
            <h2>🏏{match.matchType}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
