🌐 Smart Campus NMS
Modern Network Monitoring System (Full Stack • Cisco DNA Center Neon UI)

Smart Campus NMS is a full-stack network monitoring system built with a modern neon-dark UI, inspired by Cisco DNA Center.

It includes live device monitoring, alarms, simulated SNMP/RESTCONF responses, and a clean React + FastAPI architecture.

🚀 Features
🔵 Frontend (React + Vite + Tailwind)

Neon-glow dark UI

Responsive dashboard

Devices page with live API data

Alarms page with simulated alerts

Icon-based Sidebar (Lucide Icons)

Modular component structure

🟣 Backend (FastAPI)

/devices — Device list

/alarms — Active alarms

/snmp/{id} — SNMP simulation

/restconf/{id} — RESTCONF simulation

Fast, lightweight Python backend

🛠️ Tech Stack
Frontend

React + Vite

TailwindCSS

Lucide-react icons

Neon CSS Extensions

Backend

Python

FastAPI

Uvicorn

📁 Project Structure
Smart-Campus-NMS/
│
├── backend/
│   ├── main.py
│   ├── alarms.py
│   ├── devices.json
│   ├── snmp_simulator.py
│   ├── restconf_simulator.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md

🧪 Running the Project
▶️ Backend (FastAPI)
cd backend
uvicorn main:app --reload --port 8000

Test your API by opening:

http://127.0.0.1:8000/devices

http://127.0.0.1:8000/alarms

http://127.0.0.1:8000/snmp/1

http://127.0.0.1:8000/restconf/1

▶️ Frontend (React + Vite)
cd frontend
npm install
npm run dev


Open in browser:
👉 http://localhost:5173/

