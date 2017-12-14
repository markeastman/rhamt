package uk.me.eastmans.rhamt.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;

@Controller
public class NavigationController {

    @GetMapping("/")
    String getIndex(HttpSession session) {
        // Clear out all the selections for now
        session.removeAttribute("selectedProject");
        session.removeAttribute("selectedExecution");
        session.removeAttribute("selectedApplication");
        return "index"; }

    @GetMapping("/config")
    String getConfig() { return "config"; }

    @GetMapping("/executions")
    String getExecutions(HttpSession session) {
        session.removeAttribute("selectedExecution");
        session.removeAttribute("selectedApplication");
        return "executions"; }

    @GetMapping("/selectProject/{id}")
    String getSelectedProject(HttpSession session, @PathVariable("id") int executionId) {
        session.setAttribute("selectedProject", executionId);
        session.removeAttribute("selectedExecution");
        session.removeAttribute("selectedApplication");
        return "redirect:/executions";
    }

    @GetMapping("/selectExecution/{id}")
    String getSelectedExecution(HttpSession session, @PathVariable("id") int executionId) {
        session.setAttribute("selectedExecution", executionId);
        session.removeAttribute("selectedApplication");
        return "redirect:/execution/1/applications";
    }


    @GetMapping("/execution/1/applications")
    String getExecutionApplications(HttpSession session, Model model) {
        model.addAttribute("report-content-file", "index.html");
        session.removeAttribute("selectedApplication");
        return "executionApplications";
    }

    @GetMapping("/execution/1/issues")
    String getExecutionIssues(HttpSession session, Model model) {
        model.addAttribute("report-content-file", "index.html");
        session.removeAttribute("selectedApplication");
        return "executionIssues";
    }

    @GetMapping("/execution/1/dependencies")
    String getExecutionDependencies(HttpSession session, Model model) {
        model.addAttribute("report-content-file", "index.html");
        session.removeAttribute("selectedApplication");
        return "executionDependencies";
    }

    /**
     * Handles the dashboard for an application
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/report_index_{app_name}")
    String getDashboard(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "dashboard";
    }

    /**
     * Handles the issues for an application
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/migration_issues.{app_name}")
    String getIssues(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "issues";
    }

    /**
     * Handles the application details for an application
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/ApplicationDetails_{app_name}")
    String getApplicationDetails(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "details";
    }

    /**
     * Handles the application dependencies
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/dependency_report_{app_name}")
    String getDependencies(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "dependencies";
    }

    /**
     * Handles the application remote services
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/remotereport_{app_name}")
    String getRemoteServices(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "remoteServices";
    }

    /**
     * Handles the application ejbs
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/ejbreport_{app_name}")
    String getEJBs(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "ejbs";
    }

    /**
     * Handles the application jpa
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/jpa_{app_name}")
    String getJPA(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "jpa";
    }

    /**
     * Handles the application server resources
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/server_resources_{app_name}")
    String getServerResources(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "serverResources";
    }

    /**
     * Handles the application hardcoded ips
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/hardcoded_ips{app_name}")
    String getHardcodedIPs(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "ips";
    }

    /**
     * Handles the application ignored files
     * @param model
     * @param app_name
     * @return
     */
    @GetMapping("/execution/1/reports/ignoredfiles_{app_name}")
    String getIgnoredFiles(HttpSession session, Model model, @PathVariable("app_name") String app_name) {
        session.setAttribute("selectedApplication", "rhq-enterprise-server-ear-1.3.0.EmbJopr.1.3.0-4.ear");
        model.addAttribute("app_name", app_name);
        return "ignoredFiles";
    }

}
