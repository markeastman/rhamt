MIGRATION_ISSUES_DETAILS["ae3073db-4c9a-4c99-bb2a-2b0098ec990f"] = [
{description: "<p>CDI supports static injection in comparison to Seam 2 dynamic injection. So you don\'t need to have <code>@Named<\/code> annotation on every Seam component you would like to migrate. Remove that annotation or change to <code>@javax.inject.Named<\/code> only if you need to access managed bean in Expression Language (EL).<\/p>", ruleID: "seam-java-00040", issueName: "Seam API - org.jboss.seam.annotations.Name",
problemSummaryID: "ae3073db-4c9a-4c99-bb2a-2b0098ec990f", files: [
{l:"<a class='' href='GroupResourceConfigurationAddNewOpenMapMemberPropertyUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.configuration.group.GroupResourceConfigurationAddNewOpenMapMemberPropertyUIBean<\/a>", oc:"1"},
{l:"<a class='' href='ViewGroupPluginConfigurationUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.inventory.group.ViewGroupPluginConfigurationUIBean<\/a>", oc:"1"},
{l:"<a class='' href='EditGroupResourceConfigurationUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.configuration.group.EditGroupResourceConfigurationUIBean<\/a>", oc:"1"},
{l:"<a class='' href='ViewGroupResourceConfigurationUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.configuration.group.ViewGroupResourceConfigurationUIBean<\/a>", oc:"1"},
{l:"<a class='' href='EditGroupPluginConfigurationUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.inventory.group.EditGroupPluginConfigurationUIBean<\/a>", oc:"1"},
], resourceLinks: [
{h:"http://docs.oracle.com/javaee/7/tutorial/cdi-basic009.htm#GJBAK", t:"Java EE 7 tutorial - Giving Beans EL Name"},
{h:"https://access.redhat.com/documentation/en-US/Red_Hat_JBoss_Web_Framework_Kit/2.7/html-single/Seam_Guide/index.html#_seam_2_components", t:"Seam 2 Components"},
]},
];