MIGRATION_ISSUES_DETAILS["a5c7b592-5558-43ee-b814-5b12444b3478"] = [
{description: "<p>In a cloud environment, mail systems should be considered as backing services.<br/>Ensure that the configuration of the underlying outbound mail connection is not environment-specific (e.g. no static IP, URL, property, credential, certificate...). In OpenShift, environment variables or config map could be used for this purpose.<\/p>", ruleID: "mail-00000", issueName: "Java Mail API",
problemSummaryID: "a5c7b592-5558-43ee-b814-5b12444b3478", files: [
{l:"<a class='' href='EmailManagerBean_java.html?project=4062208'>org.rhq.enterprise.server.core.EmailManagerBean<\/a>", oc:"12"},
{l:"<a class='' href='AddOthersForm_java.html?project=4062208'>org.rhq.enterprise.gui.legacy.action.resource.common.monitor.alerts.config.AddOthersForm<\/a>", oc:"11"},
], resourceLinks: [
{h:"https://12factor.net/backing-services", t:"Twelve-factor app - Backing services"},
{h:"https://12factor.net/config", t:"Twelve-factor app - Config"},
{h:"https://access.redhat.com/documentation/en/openshift-container-platform/3.4/paged/developer-guide/chapter-30-managing-environment-variables", t:"OpenShift - Managing Environment Variables"},
{h:"https://access.redhat.com/documentation/en/openshift-container-platform/3.4/paged/developer-guide/chapter-18-configmaps", t:"OpenShift - ConfigMaps"},
]},
];