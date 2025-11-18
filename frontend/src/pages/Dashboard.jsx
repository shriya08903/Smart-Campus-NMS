export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-neon">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="neon-card">Total Devices: 3</div>
        <div className="neon-card">Active Alarms: 5</div>
        <div className="neon-card">Network Health: Good</div>
      </div>
    </div>
  );
}
