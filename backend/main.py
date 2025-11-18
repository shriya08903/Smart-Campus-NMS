from fastapi import FastAPI
import json
import os
from snmp_simulator import get_snmp_metrics
from netconf_simulator import get_netconf_data
from restconf_simulator import get_restconf_data
from alarms import get_active_alarms

app = FastAPI(title="Smart Campus Network Monitoring System API")
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # or ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Safe path to backend folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load devices safely
DEVICES_FILE = os.path.join(BASE_DIR, "devices.json")

with open(DEVICES_FILE, "r") as f:
    devices = json.load(f)


@app.get("/")
def root():
    return {"message": "Smart Campus NMS API Running"}


@app.get("/devices")
def list_devices():
    return devices


@app.get("/snmp/{device_id}")
def snmp_data(device_id: int):
    return get_snmp_metrics(device_id)


@app.get("/restconf/{device_id}")
def restconf_data(device_id: int):
    return get_restconf_data(device_id)


@app.get("/netconf/{device_id}")
def netconf_data(device_id: int):
    return {"xml": get_netconf_data(device_id)}


@app.get("/alarms")
def alarms():
    return get_active_alarms()


@app.get("/metrics")
def metrics():
    cpu = get_snmp_metrics(1)["cpu_usage"]
    mem = get_snmp_metrics(1)["memory_usage"]

    response = f"""
# HELP device_cpu_usage CPU usage percentage
# TYPE device_cpu_usage gauge
device_cpu_usage {cpu}

# HELP device_memory_usage Memory usage percentage
# TYPE device_memory_usage gauge
device_memory_usage {mem}
"""

    return response
