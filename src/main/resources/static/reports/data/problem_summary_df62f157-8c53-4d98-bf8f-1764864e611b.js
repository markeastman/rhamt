MIGRATION_ISSUES_DETAILS["df62f157-8c53-4d98-bf8f-1764864e611b"] = [
{description: "<p>The application has a Hibernate library embedded.<br/>Red Hat JBoss EAP includes Hibernate as a module with a version that has been tested and supported by Red Hat. There are two options for using the Hibernate library: <\/p>\n<ol>\n <li>Keep it embedded as it is now. This approach is low effort but the application will not use a tested and supported library.<\/li>\n <li>Switch to use the Hibernate library in the EAP module. This will require effort to remove the embedded library and configure the application to use the module\'s library but then the application will rely on a tested and supported version of the Hibernate library.<\/li>\n<\/ol><p>In the links below there are the instructions to enable alternative versions for both EAP 6 and 7.<\/p>", ruleID: "DiscoverEmbeddedHibernateLibraryRuleProvider_1", issueName: "Hibernate embedded library",
problemSummaryID: "df62f157-8c53-4d98-bf8f-1764864e611b", files: [
{l:"hibernate-annotations-3.2.1.GA.jar", oc:"1"},
{l:"rhq-enterprise-server-base-perspective-war-3.0.0.B04.war/WEB-INF/lib/hibernate-annotations-3.2.1.GA.jar", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/articles/112673", t:"Red Hat JBoss EAP: Component Details"},
{h:"https://access.redhat.com/documentation/en-US/JBoss_Enterprise_Application_Platform/6.4/html/Migration_Guide/sect-Changes_Dependent_on_Your_Application_Architecture_and_Components.html#sect-Hibernate_and_JPA_Changes", t:"Red Hat JBoss EAP 6: Hibernate and JPA Migration Changes"},
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html/migration_guide/application_migration_changes#hibernate_and_jpa_migration_changes", t:"Red Hat JBoss EAP 7: Hibernate and JPA Migration Changes"},
]},
];