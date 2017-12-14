MIGRATION_ISSUES_DETAILS["7d62480f-9177-41e6-9098-24f20d0e220d"] = [
{description: "<p>The class is dynamically loaded within application. During the migration, multiple classes that are provided on classpath by a different server may not be present anymore.<\/p><p>Please review the class-loading mechanisms and ensure that the dynamically loaded class is available in JBoss EAP.<\/p>", ruleID: "environment-dependent-calls-01000", issueName: "Dynamic class instantiation",
problemSummaryID: "7d62480f-9177-41e6-9098-24f20d0e220d", files: [
{l:"<a class='' href='LoggerFactory_java.html?project=4363776'>mazz.i18n.LoggerFactory<\/a>", oc:"2"},
], resourceLinks: [
{h:"https://access.redhat.com/solutions/361343", t:"Classloading in JBoss EAP 6"},
]},
];