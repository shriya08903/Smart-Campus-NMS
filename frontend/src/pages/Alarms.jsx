import { useEffect, useState } from "react";

export default function Alarms() {
  const [alarms, setAlarms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/alarms")
      .then((res) => res.json())
      .then((data) => {
        setAlarms(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6 drop-shadow-lg text-red-300">
        Alarms
      </h1>

      <div className="neon-card p-6">
        {loading ? (
          <p className="text-gray-400">Loading alarms...</p>
        ) : alarms.length === 0 ? (
          <p className="text-gray-400">No alarms found.</p>
        ) : (
          <table className="w-full text-left">
            <thead className="text-red-300">
              <tr>
                <th>ID</th>
                <th>Device</th>
                <th>Severity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {alarms.map((a) => (
                <tr key={a.alarm_id} className="border-b border-gray-700">
                  <td>{a.alarm_id}</td>
                  <td>{a.device}</td>
                  <td
                    className={
                      a.severity === "critical"
                        ? "text-red-400"
                        : a.severity === "major"
                        ? "text-yellow-400"
                        : "text-blue-400"
                    }
                  >
                    {a.severity}
                  </td>
                  <td>{a.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
