MIGRATION_ISSUES_DETAILS["b2118b6d-9a3f-4e82-a85c-facb1a64abc5"] = [
{description: "<p>The application has a Seam library embedded.<br/>While official support for Seam 2.2 applications was dropped in JBoss EAP 6, it was still possible to configure dependencies for JSF 1.2 and Hibernate 3 to allow Seam 2.2 applications to run on that release. Seam 2.3 should work on JBoss EAP 6 even some framework features and integrations from Seam 2.2 are not supported. <\/p><p>Red Hat JBoss EAP 7, which now includes JSF 2.2 and Hibernate 5, does not support Seam 2.2 or Seam 2.3 due to end of life of Red Hat JBoss Web Framework Kit. It is recommended that you rewrite your Seam components using CDI beans. <\/p><p>In the links below there are the instructions to enable alternatives for both EAP 6 and 7.<\/p>", ruleID: "DiscoverEmbeddedSeam2LibraryRuleProvider_1", issueName: "Seam 2 embedded library",
problemSummaryID: "b2118b6d-9a3f-4e82-a85c-facb1a64abc5", files: [
{l:"jboss-seam-2.1.0.SP1.jar", oc:"1"},
{l:"jboss-seam-ui-2.1.0.SP1.jar", oc:"1"},
{l:"jboss-seam-debug-2.1.0.SP1.jar", oc:"1"},
{l:"jboss-seam-jul-2.1.0.SP1.jar", oc:"1"},
{l:"rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear/rhq-webdav.war/WEB-INF/lib/jboss-seam-2.1.0.SP1.jar", oc:"1"},
{l:"rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear/rhq-portal.war/WEB-INF/lib/jboss-seam-ui-2.1.0.SP1.jar", oc:"1"},
{l:"rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear/rhq-portal.war/WEB-INF/lib/jboss-seam-debug-2.1.0.SP1.jar", oc:"1"},
{l:"rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear/rhq-portal.war/WEB-INF/lib/jboss-seam-jul-2.1.0.SP1.jar", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/documentation/en-US/JBoss_Enterprise_Application_Platform/6.4/html-single/Migration_Guide/index.html#sect-Migrate_Seam_2.2_Applications", t:"EAP 6 - Migrate Seam 2.2 applications"},
{h:"https://access.redhat.com/documentation/en-US/Red_Hat_JBoss_Web_Framework_Kit/2.7/html-single/Seam_Guide/index.html#migration23", t:"Red Hat JBoss EAP 6: Migration from 2.2 to 2.3"},
{h:"https://access.redhat.com/documentation/en-US/Red_Hat_JBoss_Web_Framework_Kit/2.7/html-single/Seam_Guide/index.html#idm54350960", t:"Red Hat JBoss EAP: Migration from Seam 2 to Java EE and alternatives"},
{h:"https://access.redhat.com/solutions/2773121", t:"How to use JSF 1.2 with EAP 7?"},
]},
];