export default function MatchSkeleton() {
  return (
    <div style={{
      backgroundColor: '#1a1a2e',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      border: '1px solid #2a2a4a',
      animation: 'pulse 1.5s infinite'
    }}>
      <div style={{
        height: '16px',
        backgroundColor: '#2a2a4a',
        borderRadius: '4px',
        marginBottom: '12px',
        width: '60%'
      }} />
      <div style={{
        height: '12px',
        backgroundColor: '#2a2a4a',
        borderRadius: '4px',
        marginBottom: '8px',
        width: '80%'
      }} />
      <div style={{
        height: '12px',
        backgroundColor: '#2a2a4a',
        borderRadius: '4px',
        width: '30%'
      }} />
    </div>
  )
}