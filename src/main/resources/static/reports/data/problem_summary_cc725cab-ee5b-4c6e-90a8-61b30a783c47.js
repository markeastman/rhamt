MIGRATION_ISSUES_DETAILS["cc725cab-ee5b-4c6e-90a8-61b30a783c47"] = [
{description: "<p>Java sockets are internal end-points of two-way communications. They are defined by an IP address, port, and protocol (TCP/UDP).<br/>Direct communication through sockets and channels is an anti-pattern in cloud environment because it is not a reliable and scalable way of interact with other systems.<br/>Java EE standard and loosely coupled protocols like JMS, JAX-RS and JAX-WS are recommended for backing services interactions.<\/p>", ruleID: "socket-communication-00000", issueName: "Socket communication",
problemSummaryID: "cc725cab-ee5b-4c6e-90a8-61b30a783c47", files: [
{l:"<a class='' href='UntrustedSSLSocketFactory_java.html?project=4062208'>org.rhq.enterprise.server.util.security.UntrustedSSLSocketFactory<\/a>", oc:"7"},
{l:"<a class='' href='UntrustedSSLProtocolSocketFactory_java.html?project=4062208'>org.rhq.enterprise.server.util.security.UntrustedSSLProtocolSocketFactory<\/a>", oc:"5"},
{l:"<a class='' href='DefaultTcpTransportMapping_java.html?project=4062208'>org.snmp4j.transport.DefaultTcpTransportMapping<\/a>", oc:"36"},
{l:"<a class='' href='DefaultUdpTransportMapping_java.html?project=4062208'>org.snmp4j.transport.DefaultUdpTransportMapping<\/a>", oc:"29"},
], resourceLinks: [
{h:"https://12factor.net/backing-services", t:"Twelve-factor app - Backing services"},
]},
];