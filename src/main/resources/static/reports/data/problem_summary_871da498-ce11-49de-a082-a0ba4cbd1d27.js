MIGRATION_ISSUES_DETAILS["871da498-ce11-49de-a082-a0ba4cbd1d27"] = [
{description: "<p>Seam 2.2 and earlier is not supported on JBoss EAP 6 and above. Consider migration to Context Dependency Injection (CDI) standard which covers most of Seam 2 core functionalities in a standardized, type safe and extensible way.<\/p><p>Seam 2.3 still could work on EAP 6.x, but is not maintained and officially supported on new EAP 6.x patched releases or EAP 7.x.<\/p><p>There are two options available:<\/p>\n<ol>\n <li>Continue using Seam 2.x on EAP 6 but expect there are bugs or glitches and you need to fix it yourself. This approach is sometimes lower effort but the application will not use a tested and supported library and some Seam framework features doesn\'t have to work as expected.<\/li>\n <li>The similar approach as for point 1 but for Seam 2.3 runtime on EAP7 is not verified and therefore not recommended. Some Seam 2.3 features could work on EAP7, but the expected behavior can differ based on what your application uses and how.<\/li>\n <li>Switch to standard CDI beans and migrate to JSF 2.2 if your server platform is EAP 7+. This will require significant migration effort.<\/li>\n<\/ol>", ruleID: "seam-java-00000", issueName: "Seam API",
problemSummaryID: "871da498-ce11-49de-a082-a0ba4cbd1d27", files: [
{l:"<a class='' href='GroupResourceConfigurationAddNewOpenMapMemberPropertyUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.configuration.group.GroupResourceConfigurationAddNewOpenMapMemberPropertyUIBean<\/a>", oc:"1"},
{l:"<a class='' href='HtmlToSeamSAXParser_java.html?project=4150272'>org.richfaces.convert.seamtext.HtmlToSeamSAXParser<\/a>", oc:"1"},
{l:"<a class='' href='HtmlToSeamSAXParser_java.1.html?project=4302336'>org.richfaces.convert.seamtext.HtmlToSeamSAXParser<\/a>", oc:"1"},
{l:"<a class='' href='ViewGroupPluginConfigurationUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.inventory.group.ViewGroupPluginConfigurationUIBean<\/a>", oc:"1"},
{l:"<a class='' href='FacesMessagePropogationPhaseListener_java.html?project=4062208'>org.rhq.enterprise.gui.common.framework.FacesMessagePropogationPhaseListener<\/a>", oc:"1"},
{l:"<a class='' href='SeamELResolver_java.html?project=4062208'>org.jboss.seam.el.SeamELResolver<\/a>", oc:"1"},
{l:"<a class='' href='EditGroupResourceConfigurationUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.configuration.group.EditGroupResourceConfigurationUIBean<\/a>", oc:"1"},
{l:"<a class='' href='DefaultSeamTextConverter_java.1.html?project=4302336'>org.richfaces.convert.seamtext.DefaultSeamTextConverter<\/a>", oc:"1"},
{l:"<a class='' href='ViewGroupResourceConfigurationUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.configuration.group.ViewGroupResourceConfigurationUIBean<\/a>", oc:"1"},
{l:"<a class='' href='EditGroupPluginConfigurationUIBean_java.html?project=4062208'>org.rhq.enterprise.gui.inventory.group.EditGroupPluginConfigurationUIBean<\/a>", oc:"1"},
{l:"<a class='' href='DefaultSeamTextConverter_java.html?project=4150272'>org.richfaces.convert.seamtext.DefaultSeamTextConverter<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/solutions/2773121", t:"How to use JSF 1.2 with EAP 7?"},
{h:"https://access.redhat.com/solutions/84873", t:"Why Seam is not included in JBoss EAP 6"},
{h:"https://access.redhat.com/documentation/en-US/JBoss_Enterprise_Application_Platform/6.4/html-single/Migration_Guide/index.html#sect-JSF_changes", t:"Enable Applications To Use Older Versions of JSF"},
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html-single/migration_guide/#migrate-eap5-component-upgrade-reference", t:"JBoss EAP 5 Component Upgrade Reference"},
{h:"https://access.redhat.com/documentation/en-US/Red_Hat_JBoss_Web_Framework_Kit/2.7/html-single/Seam_Guide/index.html#idm54350960", t:"Migration from Seam 2 to Java EE and Alternatives"},
{h:"http://docs.jboss.org/weld/reference/latest/en-US/html/example.html", t:"JSF Web Application Example"},
{h:"http://docs.jboss.org/weld/reference/latest/en-US/html/contexts.html", t:"JBoss Context Documentation"},
]},
];