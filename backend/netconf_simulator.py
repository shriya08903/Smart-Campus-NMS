def get_netconf_data(device_id: int):
    """
    Simulated NETCONF XML configuration.
    """
    sample_xml = f"""
    <device-config>
        <device-id>{device_id}</device-id>
        <hostname>Device-{device_id}</hostname>
        <interfaces>
            <interface>
                <name>Gig0/0</name>
                <status>up</status>
            </interface>
            <interface>
                <name>Gig0/1</name>
                <status>down</status>
            </interface>
        </interfaces>
    </device-config>
    """
    return sample_xml
