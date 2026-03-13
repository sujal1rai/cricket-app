import Link from "next/link"
export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#1a1a2e',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Link href="/" style={{ color: '#00d4ff', margin: 0,fontSize:'30px'}}>🏏 CricketLive</Link>
      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="/matches" style={{ color: 'white', textDecoration: 'none' }}>Live Matches</a>
        <a href="/schedule" style={{ color: 'white', textDecoration: 'none' }}>Schedule</a>
        <a href="/search" style={{ color: 'white', textDecoration: 'none' }}>Search</a>
        <a href="/players" style={{ color: 'white', textDecoration: 'none' }}>Players</a>
      </div>
    </nav>
  )
}