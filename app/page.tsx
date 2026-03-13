import Link from "next/link";

export default function Home() {
  return (
    <main style={{ 
      padding: '60px 40px', 
      backgroundColor: '#0f0f1a', 
      minHeight: '100vh',
      color: 'white'
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          margin: '0 0 16px 0',
          color: '#00d4ff'
        }}>
          🏏 Welcome to CricketLive!
        </h1>
        <h2 style={{ 
          fontSize: '20px', 
          fontWeight: 'normal',
          color: '#aaaaaa',
          maxWidth: '600px',
          margin: '0 auto 16px auto',
          lineHeight: '1.6'
        }}>
          Your one stop destination for live cricket scores, match updates, and real time commentary
        </h2>
        <p style={{ 
          color: '#666666', 
          marginBottom: '32px',
          fontSize: '16px'
        }}>
          Never miss a single ball. Stay updated with live scores from matches around the world.
        </p>
        <Link href='/matches' style={{
          padding: '14px 32px',
          backgroundColor: '#00d4ff',
          color: '#0f0f1a',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
        }}>
          View Live Matches →
        </Link>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          backgroundColor: '#1a1a2e',
          borderRadius: '12px',
          padding: '32px 24px',
          width: '280px',
          textAlign: 'center',
          border: '1px solid #2a2a4a'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>⚡</div>
          <h3 style={{ margin: '0 0 8px 0', color: '#00d4ff' }}>Live Scores</h3>
          <p style={{ color: '#aaaaaa', margin: 0, lineHeight: '1.6' }}>
            Real time ball by ball updates from matches around the world
          </p>
        </div>

        <div style={{
          backgroundColor: '#1a1a2e',
          borderRadius: '12px',
          padding: '32px 24px',
          width: '280px',
          textAlign: 'center',
          border: '1px solid #2a2a4a'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>🌍</div>
          <h3 style={{ margin: '0 0 8px 0', color: '#00d4ff' }}>All Matches</h3>
          <p style={{ color: '#aaaaaa', margin: 0, lineHeight: '1.6' }}>
            Domestic and international coverage across all formats
          </p>
        </div>

        <div style={{
          backgroundColor: '#1a1a2e',
          borderRadius: '12px',
          padding: '32px 24px',
          width: '280px',
          textAlign: 'center',
          border: '1px solid #2a2a4a'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>📊</div>
          <h3 style={{ margin: '0 0 8px 0', color: '#00d4ff' }}>Match Stats</h3>
          <p style={{ color: '#aaaaaa', margin: 0, lineHeight: '1.6' }}>
            Detailed scorecards and player statistics
          </p>
        </div>
      </div>

    </main>
  );
}