def get_restconf_data(device_id: int):
    """
    Simulated RESTCONF JSON configuration.
    """
    return {
        "device_id": device_id,
        "hostname": f"Device-{device_id}",
        "interfaces": [
            {"name": "Gig0/0", "status": "up"},
            {"name": "Gig0/1", "status": "down"}
        ]
    }
