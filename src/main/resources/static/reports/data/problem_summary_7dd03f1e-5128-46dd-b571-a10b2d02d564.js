MIGRATION_ISSUES_DETAILS["7dd03f1e-5128-46dd-b571-a10b2d02d564"] = [
{description: "<p>Accessing a file on a local storage in a cloud environment is not safe because, inside a running container, an application can never assume that anything stored on disk will be permanently available because a restart (triggered by code deploy, config change, or the execution environment relocating the process to a different physical location) will usually wipe out all local (e.g., memory and filesystem) state.<\/p><p>There are different ways to improve the application based on what the file is used for:<\/p>\n<ul>\n <li>logging: log to stdout [1] and use a centralized log collector to analyze logs [2]<\/li>\n <li>caching: use a cache backing service accessed [3] via a URL or other locator/credentials stored in the config (see below)<\/li>\n <li>config: store configurations in environment variables because they are easy to change between deploys without changing any code [4][5][6]<\/li>\n <li>storing data: use a database backing service [3] in case of relational data or a persistent storage system [7][8][9][10]<\/li>\n <li>temporary data: file system of a running container should be used to storing files only as a brief, single-transaction cache (e.g. downloading a large file, operating on it, and storing the results of the operation in the database)<\/li>\n<\/ul><p>References:<\/p>\n<ol>\n <li><a href=\"https://12factor.net/logs\" target=\"_blank\">Twelve-factor app - Logs<\/a><\/li>\n <li><a href=\"https://access.redhat.com/documentation/en/openshift-container-platform/3.4/paged/installation-and-configuration/chapter-28-aggregating-container-logs\" target=\"_blank\">OpenShift - Aggregating container logs<\/a><\/li>\n <li><a href=\"https://12factor.net/backing-services\" target=\"_blank\">Twelve-factor app - Backing services<\/a><\/li>\n <li><a href=\"https://12factor.net/config\" target=\"_blank\">Twelve-factor app - Config<\/a><\/li>\n <li><a href=\"https://access.redhat.com/documentation/en/openshift-container-platform/3.4/paged/developer-guide/chapter-30-managing-environment-variables\" target=\"_blank\">OpenShift - Managing Environment Variables<\/a><\/li>\n <li><a href=\"https://access.redhat.com/documentation/en/openshift-container-platform/3.4/paged/developer-guide/chapter-18-configmaps\" target=\"_blank\">OpenShift - ConfigMaps<\/a><\/li>\n <li><a href=\"https://docs.openshift.com/container-platform/3.4/architecture/additional_concepts/storage.html\" target=\"_blank\">OpenShift - Persistent storage (Concepts)<\/a><\/li>\n <li><a href=\"https://docs.openshift.com/container-platform/3.4/install_config/persistent_storage/index.html\" target=\"_blank\">OpenShift - Configure persistent storage<\/a><\/li>\n <li><a href=\"https://blog.openshift.com/experimenting-with-persistent-volumes/\" target=\"_blank\">OpenShift - Blog post about persistent storage<\/a><\/li>\n <li><a href=\"https://blog.openshift.com/openshift-applications-using-object-storage/\" target=\"_blank\">OpenShift - Object Storage<\/a><\/li>\n<\/ol>", ruleID: "local-storage-00002", issueName: "File system - java.net.URL/URI",
problemSummaryID: "7dd03f1e-5128-46dd-b571-a10b2d02d564", files: [
{l:"<a class='' href='ServerCommunicationsService_java.html?project=4062208'>org.rhq.enterprise.server.core.comm.ServerCommunicationsService<\/a>", oc:"1"},
], resourceLinks: [
]},
];