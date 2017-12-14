MIGRATION_ISSUES_DETAILS["cae7ef60-f173-4b69-b826-295dd00ff8ea"] = [
{description: "<p>The purpose of <code>@Service<\/code> annotation was to achieve @Singleton like behavior. It was deprecated with the release of JBoss AS 6 and removed from JBoss EAP 6.<\/p><p>Use the Java EE 6 <code>javax.ejb.Singleton<\/code> annotation instead.<\/p>", ruleID: "jboss-eap5-7-java-03000", issueName: "JBoss EJB @Service annotation",
problemSummaryID: "cae7ef60-f173-4b69-b826-295dd00ff8ea", files: [
{l:"<a class='' href='ContentSourcePluginService_java.html?project=4062208'>org.rhq.enterprise.server.plugin.content.ContentSourcePluginService<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://docs.jboss.org/ejb3/docs/reference/build/reference/en/html/jboss_extensions.html", t:"JBoss EJB 3.0 extensions"},
{h:"https://docs.jboss.org/ejb3/embedded/api/org/jboss/annotation/ejb/package-summary.html", t:"JBoss EJB 3.0 Javadoc"},
{h:"http://docs.oracle.com/javaee/7/api/javax/ejb/Singleton.html", t:"Java EE API for @Singleton"},
{h:"https://access.redhat.com/solutions/199863", t:"How to expose a JavaEE 6 Singleton as a MBean in JMX in JBoss EAP"},
{h:"https://access.redhat.com/solutions/196713", t:"How to use @Service and @Management annotations in JBoss EAP"},
]},
];