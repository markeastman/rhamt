MIGRATION_ISSUES_DETAILS["dbc14d03-0e5b-4c02-9887-27a289315bab"] = [
{description: "<p>This method lookups an object using a JNDI String. During the migration process, some entity JNDI bindings may change. Ensure that the JNDI Name does not need to change for JBoss.<\/p><p><em>For Example:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;weblogic.jms.ConnectionFactory&quot;);\n<\/code><\/pre><p><em>should become:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;/ConnectionFactory&quot;);\n<\/code><\/pre>", ruleID: "environment-dependent-calls-02000", issueName: "Call of JNDI lookup",
problemSummaryID: "dbc14d03-0e5b-4c02-9887-27a289315bab", files: [
{l:"<a class='' href='LicenseManager_java.2.html?project=4302336'>org.rhq.enterprise.server.license.LicenseManager<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://docs.jboss.org/author/display/AS71/JNDI+Reference", t:"JBoss JNDI Reference"},
]},
];