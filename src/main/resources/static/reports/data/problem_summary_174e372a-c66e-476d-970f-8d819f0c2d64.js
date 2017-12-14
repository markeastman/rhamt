MIGRATION_ISSUES_DETAILS["174e372a-c66e-476d-970f-8d819f0c2d64"] = [
{description: "<p>After migration, some of the JMX beans provided by the previous server may not be present anymore. Ensure that the <code>javax.management.ObjectName<\/code> does not need to change for JBoss.<\/p>", ruleID: "environment-dependent-calls-04000", issueName: "JMX MBean object name (javax.management.ObjectName)",
problemSummaryID: "174e372a-c66e-476d-970f-8d819f0c2d64", files: [
{l:"<a class='' href='StartupServlet_java.html?project=4062208'>org.rhq.enterprise.gui.startup.StartupServlet<\/a>", oc:"1"},
{l:"<a class='' href='PersistenceUtility_java.html?project=4062208'>org.rhq.core.domain.util.PersistenceUtility<\/a>", oc:"1"},
{l:"<a class='' href='ServerInvokerServlet_java.html?project=4062208'>org.jboss.remoting.transport.servlet.web.ServerInvokerServlet<\/a>", oc:"1"},
{l:"<a class='' href='CacheListener_java.html?project=4062208'>org.rhq.enterprise.server.alert.engine.CacheListener<\/a>", oc:"1"},
{l:"<a class='' href='CustomJaasDeploymentService_java.html?project=4062208'>org.rhq.enterprise.server.core.CustomJaasDeploymentService<\/a>", oc:"1"},
], resourceLinks: [
]},
];