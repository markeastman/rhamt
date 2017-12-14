MIGRATION_ISSUES_DETAILS["4150efcf-2878-44d1-a2eb-a9fc8907c56e"] = [
{description: "<p>The <code>@Management<\/code> annotation is one of JBoss EJB 3.0 extension which wraps the bean as an MBean and registers it in the JBoss MBean Server automatically. JBoss EAP 6+ no longer supports the @Management annotations. <\/p><p>The Solution is to create a simple MBean using the Java EE 6 <code>@Singleton<\/code> and <code>@Startup<\/code> to register itself in JMX Server.<\/p><p>Create your <code>@Singleton<\/code> MBean implementation which implements your service interface. Use <code>@PostConstruct<\/code> to have your Singleton register itself in the JMX MBean Server and then use <code>@PreDestroy<\/code> to unregister your MBean from the JMX Server.<\/p>", ruleID: "jboss-eap5-7-java-05000", issueName: "JBoss EJB @Management annotation",
problemSummaryID: "4150efcf-2878-44d1-a2eb-a9fc8907c56e", files: [
{l:"<a class='' href='ContentSourcePluginService_java.html?project=4062208'>org.rhq.enterprise.server.plugin.content.ContentSourcePluginService<\/a>", oc:"1"},
{l:"<a class='' href='MeasurementDataManagerMBean_java.html?project=4062208'>org.rhq.enterprise.server.measurement.instrumentation.MeasurementDataManagerMBean<\/a>", oc:"1"},
{l:"<a class='' href='MeasurementCompressionManagerMBean_java.html?project=4062208'>org.rhq.enterprise.server.measurement.instrumentation.MeasurementCompressionManagerMBean<\/a>", oc:"1"},
{l:"<a class='' href='MeasurementBaselineManagerMBean_java.html?project=4062208'>org.rhq.enterprise.server.measurement.instrumentation.MeasurementBaselineManagerMBean<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://docs.jboss.org/ejb3/docs/reference/build/reference/en/html/jboss_extensions.html", t:"JBoss EJB 3.0 extensions"},
{h:"https://docs.jboss.org/ejb3/embedded/api/org/jboss/annotation/ejb/package-summary.html", t:"JBoss EJB 3.0 Javadoc"},
{h:"https://access.redhat.com/solutions/199863", t:"How to expose a JavaEE 6 Singleton as a MBean in JMX in JBoss EAP"},
{h:"https://developer.jboss.org/thread/176310", t:"Community thread about migrating JMX MBean"},
{h:"http://docs.oracle.com/javaee/7/api/javax/ejb/Startup.html", t:"Java API - Annotation Type Startup"},
]},
];