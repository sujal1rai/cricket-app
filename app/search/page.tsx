export const dynamic = 'force-dynamic'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = q || ''

  const allMatches = [
    { name: "India vs Australia", matchType: "ODI" },
    { name: "England vs Pakistan", matchType: "T20" },
    { name: "South Africa vs New Zealand", matchType: "TEST" },
    { name: "Sri Lanka vs Bangladesh", matchType: "T20" },
    { name: "India vs England", matchType: "T20" },
  ]

  const filtered = allMatches.filter(match =>
    match.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main style={{ padding: '40px', backgroundColor: '#0f0f1a', minHeight: '100vh', color: 'white' }}>
      <h1>🔍 Search Matches</h1>
      <p style={{ color: '#aaaaaa' }}>Searching for: {query || 'everything'}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.map((match,index) => (
            <div key={index}
            style={{
                margin: "30px",
              padding: "15px",
              backgroundColor: "#1a1a2e",
              color: "white",
              borderRadius: "8px",
              border: '1px solid #2a2a4a'
            }}>
            <h2 style={{ color: "#00d4ff", marginBottom: "8px" }}>{match.name}</h2>
            <p style={{ color: "#aaaaaa", marginBottom: "20px" }}>{match.matchType}</p>
            </div>
        ))}
      </div>
    </main>
  )
}