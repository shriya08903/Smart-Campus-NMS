import random

def get_snmp_metrics(device_id: int):
    """
    Simulated SNMP metrics.
    """
    return {
        "cpu_usage": random.randint(10, 90),
        "memory_usage": random.randint(20, 95),
        "interface_in": random.randint(100, 5000),
        "interface_out": random.randint(100, 5000),
        "device_id": device_id
    }
