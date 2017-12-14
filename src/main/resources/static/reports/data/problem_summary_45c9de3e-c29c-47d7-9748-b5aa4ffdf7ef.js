MIGRATION_ISSUES_DETAILS["45c9de3e-c29c-47d7-9748-b5aa4ffdf7ef"] = [
{description: "<p>This method lookups an object using a JNDI String. During the migration process, some entity JNDI bindings may change. Ensure that the JNDI Name does not need to change for JBoss.<\/p><p><em>For Example:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;weblogic.jms.ConnectionFactory&quot;);\n<\/code><\/pre><p><em>should become:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;/ConnectionFactory&quot;);\n<\/code><\/pre>", ruleID: "environment-dependent-calls-02000", issueName: "Call of JNDI lookup",
problemSummaryID: "45c9de3e-c29c-47d7-9748-b5aa4ffdf7ef", files: [
{l:"<a class='' href='LookupUtil_java.html?project=4062208'>org.rhq.enterprise.server.util.LookupUtil<\/a>", oc:"4"},
{l:"<a class='' href='RemoteSafeInvocationHandler_java.html?project=4062208'>org.rhq.enterprise.server.remote.RemoteSafeInvocationHandler<\/a>", oc:"2"},
{l:"<a class='' href='RemoteWsInvocationHandler_java.html?project=4062208'>org.rhq.enterprise.server.remote.RemoteWsInvocationHandler<\/a>", oc:"2"},
{l:"<a class='' href='LicenseManager_java.2.html?project=4302336'>org.rhq.enterprise.server.license.LicenseManager<\/a>", oc:"1"},
{l:"<a class='' href='CacheListener_java.html?project=4062208'>org.rhq.enterprise.server.alert.engine.CacheListener<\/a>", oc:"1"},
{l:"<a class='' href='JDBCLoginModule_java.html?project=4062208'>org.rhq.enterprise.server.core.jaas.JDBCLoginModule<\/a>", oc:"1"},
{l:"<a class='' href='LicenseManager_java.html?project=4062208'>org.rhq.enterprise.server.license.LicenseManager<\/a>", oc:"1"},
{l:"<a class='' href='LicenseManager_java.1.html?project=4150272'>org.rhq.enterprise.server.license.LicenseManager<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://docs.jboss.org/author/display/AS71/JNDI+Reference", t:"JBoss JNDI Reference"},
]},
];