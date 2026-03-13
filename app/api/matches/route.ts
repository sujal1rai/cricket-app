export async function GET() {
  const mockMatches = [
    {
      name: "India vs Australia",
      status: "India won by 6 wickets",
      matchType: "ODI",
      matchStarted: true,
    },
    {
      name: "England vs Pakistan",
      status: "Match starts at 2:30 PM",
      matchType: "T20",
      matchStarted: false,
    },
    {
      name: "South Africa vs New Zealand",
      status: "South Africa won by 45 runs",
      matchType: "TEST",
      matchStarted: true,
    },
    {
      name: "Sri Lanka vs Bangladesh",
      status: "Bangladesh won by 3 wickets",
      matchType: "T20",
      matchStarted: true,
    },
  ]

  return Response.json({ data: mockMatches })
}