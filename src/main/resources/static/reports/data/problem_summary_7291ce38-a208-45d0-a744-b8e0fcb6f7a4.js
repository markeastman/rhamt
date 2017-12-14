MIGRATION_ISSUES_DETAILS["7291ce38-a208-45d0-a744-b8e0fcb6f7a4"] = [
{description: "<p>Java NIO Channels are designed to provide for bulk data transfers to and from NIO buffers. They can be synchronously and asynchronously read and written.<br/>Direct communication through sockets and channels is an anti-pattern in cloud environment because it is not a reliable and scalable way of interact with other systems.<br/>Java EE standard and loosely coupled protocols like JMS, JAX-RS and JAX-WS are recommended for backing services interactions.<\/p>", ruleID: "socket-communication-00001", issueName: "Java NIO channel",
problemSummaryID: "7291ce38-a208-45d0-a744-b8e0fcb6f7a4", files: [
{l:"<a class='' href='DefaultTcpTransportMapping_java.html?project=4062208'>org.snmp4j.transport.DefaultTcpTransportMapping<\/a>", oc:"19"},
], resourceLinks: [
{h:"https://12factor.net/backing-services", t:"Twelve-factor app - Backing services"},
]},
];