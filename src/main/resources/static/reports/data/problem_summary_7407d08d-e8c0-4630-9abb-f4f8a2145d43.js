MIGRATION_ISSUES_DETAILS["7407d08d-e8c0-4630-9abb-f4f8a2145d43"] = [
{description: "<p>This method lookups an object using a JNDI String. During the migration process, some entity JNDI bindings may change. Ensure that the JNDI Name does not need to change for JBoss.<\/p><p><em>For Example:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;weblogic.jms.ConnectionFactory&quot;);\n<\/code><\/pre><p><em>should become:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;/ConnectionFactory&quot;);\n<\/code><\/pre>", ruleID: "environment-dependent-calls-02000", issueName: "Call of JNDI lookup",
problemSummaryID: "7407d08d-e8c0-4630-9abb-f4f8a2145d43", files: [
{l:"<a class='' href='LicenseManager_java.1.html?project=4150272'>org.rhq.enterprise.server.license.LicenseManager<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://docs.jboss.org/author/display/AS71/JNDI+Reference", t:"JBoss JNDI Reference"},
]},
];