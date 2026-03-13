'use client'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import MatchSkeleton from '../components/MatchSkeleton'

export default function MatchesPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['matches'],
    queryFn: () => fetch('/api/matches').then(r => r.json()),
    refetchInterval: 10000,
  })

  if (isLoading) return (
    <main style={{ padding: '32px', backgroundColor: '#0f0f1a', minHeight: '100vh' }}>
      <h1 style={{ color: 'white' }}>🏏 Live Matches</h1>
      <MatchSkeleton />
      <MatchSkeleton />
      <MatchSkeleton />
    </main>
  )

  if (error) return <p>Something went wrong</p>

  return (
    <main style={{ padding: '32px', backgroundColor: '#0f0f1a', minHeight: '100vh' }}>
      <h1 style={{ color: 'white' }}>🏏 Live Matches</h1>
      {data?.data?.map((match: any, index: number) => (
        <Link
          key={index}
          href={`/matches/${index}`}
          style={{ textDecoration: 'none' }}
        >
          <div style={{
            backgroundColor: '#1a1a2e',
            color: 'white',
            padding: '16px',
            marginBottom: '12px',
            borderRadius: '8px',
            border: '1px solid #2a2a4a',
            cursor: 'pointer'
          }}>
            <p style={{ fontWeight: 'bold', color: '#00d4ff' }}>{match.name}</p>
            <p style={{ color: '#aaaaaa' }}>{match.status}</p>
            <p style={{ color: 'white' }}>{match.matchType?.toUpperCase()}</p>
          </div>
        </Link>
      ))}
    </main>
  )
}