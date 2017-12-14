function fillTagService(tagService) {
	// (name, isRoot, isPseudo, color), [parent tags]
	tagService.registerTag(new Tag("cluster", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("tomcat", null, false, false, null), ['web-server:',]);
	tagService.registerTag(new Tag("servlet", null, false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("jboss-eap5", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("classloader", null, false, false, null), ['java-se',]);
	tagService.registerTag(new Tag("descriptor", null, false, false, null), ['configuration',]);
	tagService.registerTag(new Tag("orion", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("camel", null, false, false, null), ['esb',]);
	tagService.registerTag(new Tag("context", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("windup-internal:", null, false, true, null), []);
	tagService.registerTag(new Tag("license-apache-1.1", "Apache License 1.1", false, false, null), ['license',]);
	tagService.registerTag(new Tag("license-apache-1.0", "Apache License 1.0", false, false, null), ['license',]);
	tagService.registerTag(new Tag("license-bsd", "BSD License", false, false, null), ['license',]);
	tagService.registerTag(new Tag("cache", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("slf4j", null, false, false, null), ['logging',]);
	tagService.registerTag(new Tag("license-mpl", "Mozilla Public License 2.0", false, false, null), ['license',]);
	tagService.registerTag(new Tag("pool", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("file-system", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("distributed", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("tibco", null, false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("transactions", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("messaging", "Messaging", true, false, "#AACC00"), ['java-ee',]);
	tagService.registerTag(new Tag("seam-ui-control", null, false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("web xml 2.4", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("concepts", null, false, false, null), []);
	tagService.registerTag(new Tag("datasource", null, false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("apache-tuscany", null, false, false, null), ['soa',]);
	tagService.registerTag(new Tag("logging", null, true, false, null), ['concepts',]);
	tagService.registerTag(new Tag("classloading", null, false, false, null), ['java-se',]);
	tagService.registerTag(new Tag("jsf", null, false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("mqe", null, false, false, null), ['messaging',]);
	tagService.registerTag(new Tag("websphere", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("license-cc", "Creative Commons Public Domain License", false, false, null), ['license',]);
	tagService.registerTag(new Tag("weblogic ejb xml", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("jsp", null, false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("hibernate", null, false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("sonic-esb", null, false, false, null), ['esb',]);
	tagService.registerTag(new Tag("glassfish", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("wsdl", null, false, false, null), ['descriptor','web-service',]);
	tagService.registerTag(new Tag("web", null, true, false, null), ['concepts',]);
	tagService.registerTag(new Tag("jboss-web", null, false, false, null), ['web-server:',]);
	tagService.registerTag(new Tag("ejb2", "EJB 2.0", false, false, null), ['ejb',]);
	tagService.registerTag(new Tag("java-se", "Java SE", true, false, "#BB0000"), []);
	tagService.registerTag(new Tag("ejb", null, false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("license-apache-2.0", "Apache License 2.0", false, false, null), ['license',]);
	tagService.registerTag(new Tag("deployment", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("xfire", null, false, false, null), ['apache-cxf',]);
	tagService.registerTag(new Tag("vendors:", null, false, true, null), []);
	tagService.registerTag(new Tag("license-epl-1.0", "Eclipse Public License 1.0", false, false, null), ['license',]);
	tagService.registerTag(new Tag("weblogic", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("iona", null, false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("unknown license", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("web-service", "Webservice", true, false, "#00BBBB"), ['java-ee',]);
	tagService.registerTag(new Tag("license-mit", "MIT License", false, false, null), ['license',]);
	tagService.registerTag(new Tag("esb", "Enterprise Service Bus", true, false, "#0000BB"), ['java-ee',]);
	tagService.registerTag(new Tag("ibm", null, false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("commonj", null, false, false, null), ['asynchronous',]);
	tagService.registerTag(new Tag("persistence", null, true, false, null), ['concepts',]);
	tagService.registerTag(new Tag("jboss-esb", null, false, false, null), ['esb',]);
	tagService.registerTag(new Tag("webservice", null, false, false, null), ['web-service',]);
	tagService.registerTag(new Tag("application-bindings", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("classifications:", null, false, true, null), []);
	tagService.registerTag(new Tag("soa", "SOA", false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("rules", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("axis", null, false, false, null), ['web-service',]);
	tagService.registerTag(new Tag("web-server:", null, false, true, null), ['java-ee',]);
	tagService.registerTag(new Tag("platforms", null, false, false, null), []);
	tagService.registerTag(new Tag("lifecycle", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("spring", null, false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("jms", null, false, false, null), ['messaging',]);
	tagService.registerTag(new Tag("decompiled java file", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("protocol", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("mx4j", null, false, false, null), ['management',]);
	tagService.registerTag(new Tag("apache", null, false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("jmx", null, false, false, null), ['management',]);
	tagService.registerTag(new Tag("startup", null, false, false, null), ['lifecycle',]);
	tagService.registerTag(new Tag("jaas", null, false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("license-unknown", "Unknown License", false, false, null), ['license',]);
	tagService.registerTag(new Tag("ejb xml 2.1", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("license-lgpl", "GNU LGPL", false, false, null), ['license',]);
	tagService.registerTag(new Tag("ibm-wbi", null, false, false, null), ['wbi',]);
	tagService.registerTag(new Tag("soa-p", "SOA-P", false, false, null), ['soa',]);
	tagService.registerTag(new Tag("oracle", null, false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("mq", null, false, false, null), ['messaging',]);
	tagService.registerTag(new Tag("sonic", null, false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("java-ee", "Java EE", true, false, "#00CC00"), []);
	tagService.registerTag(new Tag("apache-cxf", null, false, false, null), ['messaging',]);
	tagService.registerTag(new Tag("license-gpl", "GNU General Public License File", false, false, null), ['license',]);
	tagService.registerTag(new Tag("license", "License", true, false, "#FAE663"), []);
	tagService.registerTag(new Tag("jonas", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("jax-rpc", null, false, false, null), ['remoting',]);
	tagService.registerTag(new Tag("resin", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("port", null, false, false, null), ['configuration',]);
	tagService.registerTag(new Tag("weblogic web xml", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("http", null, false, false, null), ['protocol',]);
	tagService.registerTag(new Tag("maven xml", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("soap", null, false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("jboss-ws", null, false, false, null), ['web-service',]);
	tagService.registerTag(new Tag("configuration", null, true, false, null), ['concepts',]);
	tagService.registerTag(new Tag("jdbc", null, false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("seam", "Seam Framework", false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("framework:", null, false, true, null), ['java-ee',]);
	tagService.registerTag(new Tag("properties", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("jrun", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("application-server:", null, false, true, null), ['java-ee',]);
	tagService.registerTag(new Tag("scheduler", null, false, false, null), ['asynchronous',]);
	tagService.registerTag(new Tag("timer", null, false, false, null), ['asynchronous',]);
	tagService.registerTag(new Tag("database", null, false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("security", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("smooks", null, false, false, null), ['messaging',]);
	tagService.registerTag(new Tag("postgresql", null, false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("jboss", null, false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("apache license 2.0", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("asynchronous", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("reviewed-*", null, false, true, null), ['windup-internal:',]);
	tagService.registerTag(new Tag("client", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("mule-esb (mule)", null, false, false, null), ['esb',]);
	tagService.registerTag(new Tag("log4j", null, false, false, null), ['logging',]);
	tagService.registerTag(new Tag("license-cddl", "CDDL", false, false, null), ['license',]);
	tagService.registerTag(new Tag("catchall", null, false, false, null), ['windup-internal:',]);
	tagService.registerTag(new Tag("sap", null, false, false, null), ['platforms',]);
	tagService.registerTag(new Tag("manifest", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("remoting", null, false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("web-app", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("performance", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("management", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("jndi", "JNDI", false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("wbi", null, false, false, null), ['rules',]);
}