'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

const matches = [
  {
    name: "India vs Australia",
    status: "India won by 6 wickets",
    matchType: "ODI",
    matchStarted: true,
    venue: "Melbourne Cricket Ground, Australia",
    date: "13 March 2026",
    score: "IND: 287/4 | AUS: 284/10"
  },
  {
    name: "England vs Pakistan",
    status: "Match starts at 2:30 PM",
    matchType: "T20",
    matchStarted: false,
    venue: "Lords Cricket Ground, England",
    date: "14 March 2026",
    score: "Yet to begin"
  },
  {
    name: "South Africa vs New Zealand",
    status: "South Africa won by 45 runs",
    matchType: "TEST",
    matchStarted: true,
    venue: "Newlands Cricket Ground, South Africa",
    date: "12 March 2026",
    score: "SA: 456/8 | NZ: 411/10"
  },
  {
    name: "Sri Lanka vs Bangladesh",
    status: "Bangladesh won by 3 wickets",
    matchType: "T20",
    matchStarted: true,
    venue: "Shere Bangla Stadium, Bangladesh",
    date: "12 March 2026",
    score: "BAN: 178/7 | SL: 175/10"
  },
]

export default function MatchDetailsPage() {
  const params = useParams()
  const id = Number(params.id)
  const match = matches[id]

  if (!match) return <p style={{ padding: '40px', color: 'white' }}>Match not found</p>

  return (
    <main style={{ padding: '40px', backgroundColor: '#0f0f1a', minHeight: '100vh', color: 'white' }}>
      
      <Link href='/matches' style={{ color: '#00d4ff', textDecoration: 'none' }}>
        ← Back to Matches
      </Link>

      <div style={{ 
        backgroundColor: '#1a1a2e', 
        borderRadius: '12px', 
        padding: '32px',
        marginTop: '24px',
        border: '1px solid #2a2a4a'
      }}>
        <h1 style={{ color: '#00d4ff', marginBottom: '8px' }}>{match.name}</h1>
        <p style={{ color: '#aaaaaa', marginBottom: '24px' }}>{match.matchType} • {match.date}</p>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#666', marginBottom: '4px' }}>📍 Venue</p>
          <p style={{ color: 'white' }}>{match.venue}</p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#666', marginBottom: '4px' }}>🏏 Score</p>
          <p style={{ color: '#00d4ff', fontSize: '20px', fontWeight: 'bold' }}>{match.score}</p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#666', marginBottom: '4px' }}>📊 Status</p>
          <p style={{ color: match.matchStarted ? '#00ff88' : '#ffaa00' }}>{match.status}</p>
        </div>

      </div>
    </main>
  )
}