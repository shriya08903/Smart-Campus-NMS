import random

def get_active_alarms():
    severities = ["critical", "major", "minor"]
    sample_alarms = []

    for i in range(random.randint(1, 5)):
        sample_alarms.append({
            "alarm_id": i + 1,
            "device": f"Device-{random.randint(1, 3)}",
            "severity": random.choice(severities),
            "description": "Simulated network event detected."
        })
    return sample_alarms
