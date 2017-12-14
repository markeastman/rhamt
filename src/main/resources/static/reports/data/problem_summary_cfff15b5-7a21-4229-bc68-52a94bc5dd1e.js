MIGRATION_ISSUES_DETAILS["cfff15b5-7a21-4229-bc68-52a94bc5dd1e"] = [
{description: "<p>In JBoss EAP, the <code>InitialContext<\/code> should be instantiated with no arguments. Once an instance is constructed, look up the service using portable JNDI lookup syntax. Ensure also that in case system properties for <code>InitialContext<\/code> are provided, they do not need to be changed for the JBoss.<\/p>\n<pre><code class=\"java\">InitialContext context = new InitialContext();\nService service = (Service) context.lookup( &quot;java:app/service/&quot; + ServiceImpl.class.getSimpleName() );\n<\/code><\/pre>", ruleID: "environment-dependent-calls-03000", issueName: "Proprietary InitialContext initialization",
problemSummaryID: "cfff15b5-7a21-4229-bc68-52a94bc5dd1e", files: [
{l:"<a class='' href='JDBCLoginModule_java.html?project=4062208'>org.rhq.enterprise.server.core.jaas.JDBCLoginModule<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/articles/1496973", t:"Migrate Applications From Other Platforms to Use Portable JNDI Syntax in Red Hat JBoss Enterprise Application Platform"},
]},
];