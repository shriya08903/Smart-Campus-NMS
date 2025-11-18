import { useEffect, useState } from "react";

export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/devices")
      .then((res) => res.json())
      .then((data) => {
        setDevices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6 drop-shadow-lg text-blue-300">
        Devices
      </h1>

      <div className="neon-card p-6">
        {loading ? (
          <p className="text-gray-400">Loading devices...</p>
        ) : devices.length === 0 ? (
          <p className="text-gray-400">No devices found.</p>
        ) : (
          <table className="w-full text-left">
            <thead className="text-blue-300">
              <tr>
                <th>Name</th>
                <th>IP</th>
                <th>Vendor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((d) => (
                <tr key={d.id} className="border-b border-gray-700">
                  <td>{d.name}</td>
                  <td>{d.ip}</td>
                  <td>{d.vendor}</td>
                  <td
                    className={
                      d.status === "up" ? "text-green-400" : "text-red-400"
                    }
                  >
                    {d.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
