export default function StatCard({ title, value, icon }) {
  return (
    <div className="neon-card">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400">{title}</p>
          <p className="text-4xl font-bold neon-text">{value}</p>
        </div>
        <div className="text-5xl">{icon}</div>
      </div>
    </div>
  );
}
