# scaleMatters Service Catalog

*Generated from analysis of 5,600 completed/deployed support tickets (Feb 2021 - Jul 2026) across 32 client accounts, plus scaleMatters' strategic service catalog and competitive positioning research. Organized top-down (strategic service lines) and bottom-up (the client-experience patterns visible in ticket history).*

*Note: scaleMatters previously sold a proprietary GTM analytics platform. That product line has been discontinued and scaleMatters now operates exclusively as a RevOps services company — this catalog reflects that scope.*

## What This Document Is

This catalog groups scaleMatters' support and delivery work into the recurring patterns that show up across thousands of real client requests, framed by the strategic service lines scaleMatters sells. It is meant to help internal teams and prospective clients understand the breadth and shape of the service scaleMatters provides.

---

## Strategic Service Lines

Beyond the day-to-day support patterns visible in ticket history, scaleMatters organizes its work into three strategic service tiers. These describe *how* an engagement is structured and sold, complementing the ticket-driven categories below, which describe *what kind of work* clients actually experience once engaged.

### 1. Revenue Operations Audit & Strategy

Gap-analysis engagements that align a client on their highest-impact problems before committing to a build. Used to prioritize what comes next.

**GTM Tech Stack Audit & Roadmap** — Develops the overarching technology strategy, system architecture, and prioritized roadmap needed for the revenue tech stack to support the client's go-to-market motions. Includes deep-dive discovery of the client's ICP and lead-to-deal process, an audit of current-state tech, a gap analysis with remediation steps, and a sequenced roadmap aligned across senior leadership.

**GTM Data Audit & Roadmap** — Focuses on the strategy and prioritization of GTM data and analytics infrastructure so it satisfies governance requirements and gives revenue leaders predictable, actionable insight. Includes defining KPIs and reporting structures (using the Data Drives Action Framework), auditing current reporting/data hygiene against target state, building a data capture roadmap, and recommending a cross-functional reporting cadence.

### 2. Revenue Operations Foundations

Fixed-scope engagements that address specific operational debt — platform migrations, system consolidations, or specialized module implementations.

**Platform Stabilization & Data Normalization** — Remediates configuration errors, consolidates workflow sprawl, and standardizes data architecture across core objects. Includes auditing system architecture and custom properties to eliminate automation conflicts, normalizing deal/company/contact structures, and standardizing revenue dimensions like lead source, deal type, and subscription type.

**Funnel, Process & Lifecycle Standardization** — Aligns marketing and sales motions to a unified methodology for true end-to-end pipeline visibility. Includes top-of-funnel stage standardization (Suspect → Lead → MQL → SAL → SQL), lead status simplification, and opportunity stage redesign (validation rules, pipeline probability handling, and the scaleMatters Stage Stamper package for historical stage-transition tracking).

**Subscription, Renewal & CPQ Management** — Stabilizes quote-to-cash mechanics, recurring revenue mapping, and transactional visibility between CRMs and financial tools. Includes optimizing HubSpot/Stripe/Salesforce integrations for accurate MRR/ARR capture, stabilizing CPQ platforms (product rules, consumption schedules, pricing tier logic, document template parsing), and standardizing renewal, expansion, and upgrade/downgrade tracking.

**Platform Migrations & Cross-Tool Integrations** — Replatforms or sunsets legacy GTM technologies to centralize data and tools. Includes comprehensive data and automation migration from legacy systems (e.g., Pardot to HubSpot) and deployment/optimization of auxiliary sales tech (Gong rollouts, Outreach sunsetting, Qualified setups, ZoomInfo sync configuration).

### 3. Embedded RevOps

scaleMatters' recurring managed-services model, providing dedicated, flexible monthly capacity to manage, maintain, and iteratively improve GTM infrastructure. This is the engagement shape behind the vast majority of the ticket volume analyzed elsewhere in this document.

**GTM Systems Architecture & Administration** — Day-to-day administration, optimization, and governance of the primary CRM and marketing automation engines: Salesforce and HubSpot configuration/administration, cross-platform integration management, workflow automation engineering, lead lifecycle and routing logic, custom reporting/dashboards, and sandbox/release management.

**RevOps Collaboration & Prioritization** — Ongoing strategic partnership ensuring operational capacity aligns with the client's highest-impact business needs: regular working sessions to triage and sequence workstreams, and guidance on governance, risk management, and scalable GTM design.

**Knowledge Transfer & Support Structure** — Operational training and structured support channels to maintain adoption and resolve platform issues: documentation handoffs to internal system owners, and Help Center ticketing plus dedicated Slack channels for tiered support (from low-priority enhancements to high-priority production blockers).

---

## Technology We Support

scaleMatters works inside the client's existing GTM stack rather than pushing a proprietary platform. The team has hands-on deployment and administration experience across:

**Core CRM & Marketing Automation**
- **HubSpot** — Extensively administered as a core GTM engine: multi-brand system setup, property sprawl rationalization, workflow design, product catalog engineering, lifecycle stage standardization.
- **Salesforce (SFDC)** — The primary system of record and reporting engine across most client environments. Managed via sandbox change-set deployments: custom field/object engineering, validation rules, page layouts, platform governance.
- **Pardot** — Handled under platform migration and consolidation work, typically deprecating legacy Pardot setups while transferring data and assets into a modern CRM hub.

**Conversational Intelligence**
- **Gong** — Deployed and integrated to capture conversational data, mapped into custom CRM fields to automate opportunity stage progression and deal-health signals.
- **Chorus (by ZoomInfo)** — Configured as a conversation-intelligence layer bridging qualitative sales conversations with quantitative CRM records; tracks competitor mentions, pricing objections, and feature requests for win/loss analysis.

**Data Enrichment, Prospecting & Routing**
- **ZoomInfo** — Integrated into lead-gen infrastructure for automated intent tracking and firmographic field mapping.
- **Chili Piper** — Configured to eliminate speed-to-lead friction; complex lead-routing logic by territory, company size, and ownership rules.
- **Apollo.io** — Tracked as an inbound source and deployed as an outbound engagement engine with secure API sync and domain-reputation management.
- **LeanData** — Configured in high-volume enterprise environments for lead-to-account matching and multi-tier round-robin assignment against SLA timeframes.

**Sales Engagement**
- **Outreach** — Managed across system sunset/replacement cycles, ensuring legacy sequence architecture and field history transition cleanly.
- **Salesloft** — Managed as an embedded activity-tracking layer with bi-directional CRM activity logging.

**Quoting, CPQ & Transactional Tools**
- **Salesforce CPQ** — Backend package configuration, product rule stabilization, discounting workflows, ARR/MRR capture.
- **Stripe** — Peripheral integration for subscription invoicing and recurring revenue visibility.
- **PandaDoc** — Standardized dynamic contract templates, object token mapping, document-status alerts.
- **DocuSign** — Automated opportunity-stage advancement on final execution.
- **Calendly** — Embedded into marketing flows and rep signatures with source-attribution sync.

*This list reflects platforms the team has directly configured and supported for clients — not a certification or partnership claim for every tool named.*

---

## Salesforce (SFDC)

*5,094 tickets across 12 service categories*

### Salesforce Feature Enhancements

**1,509 tickets** | Clients come to scaleMatters when their Salesforce automations break, behave unexpectedly, or need to be improved to reflect new business requirements.

Most requests in this category start the same way: Salesforce sends an automated flow error email, a sales rep reports that a quote or opportunity is calculating incorrectly, or a business stakeholder realizes that a new process or pricing structure isn't reflected in the system. Sometimes the issue is a flow that has worked for months suddenly failing due to a governor limit, a trigger conflict, or a picklist value mismatch. Other times it's a proactive ask — a new product needs to be added to a pricebook, a round-robin assignment rule needs a new region, or an automation needs to be updated to respect a new validation rule. scaleMatters investigates the root cause, proposes the right fix (whether that's patching the flow, replacing it with a more robust alternative like DLRS, or adjusting configuration), and deploys the solution through a sandbox-to-production process.

**Example client requests:**
- One of our Salesforce flows keeps erroring out — can you fix it or replace it with something more stable?
- The annual subscription cost on quotes isn't calculating correctly — can you look into it?
- We added a new validation rule and now an automation is breaking when reps try to save records — can you update the flow to account for this?
- We need a new product category and pricing added to our pricebooks across all orgs.
- Our lead round-robin isn't assigning leads from a new region — can you add the missing logic?

**How scaleMatters responds:** scaleMatters reviews the flow error details or enhancement request to identify root cause — whether it's a trigger recursion conflict, governor limit, invalid picklist value, missing owner assignment, or logic gap. They assess whether a patch to the existing flow is sufficient or whether a more robust alternative (such as replacing a flow with a DLRS rollup) is warranted. Changes are built and validated in a sandbox environment before being deployed to production — with some clients this is via a deployment tool like Gearset (particularly for CPQ-related work), with others it's via standard Salesforce change sets — and the client is notified when the fix is live.

*When this goes to a human:* Escalate to a human when the flow error involves CPQ (Salesforce Billing/SBQQ) pricing or quote calculation logic, when the request touches financial records or multi-org deployments, or when the client is describing an active business-blocking issue (e.g., reps cannot create quotes or book opportunities). Routine flow error reports and minor configuration enhancements can be triaged and queued normally.

---

### Salesforce Issues & Bug Fixes

**833 tickets** | Clients come to scaleMatters when something in Salesforce stops working—a flow throws an error, a rep can't close a deal, a record won't save, or automation starts behaving unexpectedly.

These requests usually start with a rep hitting a wall mid-workflow: they can't close an opportunity, a quote won't generate, a lead never showed up, or a status they updated keeps reverting. Sometimes the first signal is a Salesforce-generated flow error email landing in an admin's inbox; other times a frustrated salesperson escalates to their ops contact, who then brings scaleMatters in. The issues often trace back to validation rules conflicting with automated flows, misconfigured pricebook entries, permission gaps, or automation sequences fighting each other across integrated systems. scaleMatters diagnoses the root cause using flow debug logs and org configuration context, resolves the immediate blocker—sometimes manually completing the stuck action on the rep's behalf—and then patches the underlying configuration to prevent recurrence.

**Example client requests:**
- Our reps are getting flow errors when trying to close opportunities and can't move deals forward—can you look into this?
- A lead came in through our website but never appeared in Salesforce and no one got an alert—what happened?
- When we close a renewal, the system is creating duplicate renewal opportunities instead of one—can you fix this and update the naming?
- Our quote pricing isn't calculating correctly and some fields are locked so we can't edit them manually
- Statuses we update in our sales engagement tool keep reverting back—something in the automation seems to be overwriting our changes

**How scaleMatters responds:** scaleMatters reviews the Salesforce flow debug log or error message to identify the failing element and error code, then traces the root cause—commonly a validation rule conflict, permission issue, data integrity mismatch, or automation sequencing problem. If a rep is blocked on an urgent action like closing a deal, scaleMatters may perform the action directly in the org while the fix is prepared. The team then updates the relevant flow, validation rule, permission set, or field configuration to resolve the issue and prevent it from recurring, confirming the fix with the client.

*When this goes to a human:* Escalate to a human scaleMatters admin if the issue is actively blocking a time-sensitive deal close, involves a production data integrity problem affecting multiple records, or requires direct access to the Salesforce org to debug a flow or override a stuck process. The chat widget should not attempt to diagnose specific flow errors or org configurations.

---

### Salesforce Data Hygiene

**616 tickets** | Clients come to scaleMatters when messy, missing, or misrouted data in Salesforce is causing real operational pain—broken automations, duplicate records, mismatched fields, or stale ownership that gets in the way of selling and reporting.

Data hygiene requests typically surface when something stops working or looks wrong: a round-robin flow throws an error because no active owner is set, duplicate leads pile up after a list import, account records fall out of sync with a connected system like NetSuite or HubSpot, or lead statuses quietly get overwritten by an automation nobody remembered was running. Clients often discover the issue mid-campaign or at the end of a quarter when the numbers don't match. scaleMatters diagnoses the root cause—whether it's a flow misconfiguration, a sync conflict, a missing field value, or an unintended automation side effect—and cleans up the affected records while also fixing the underlying logic so the problem doesn't recur.

**Example client requests:**
- We have nearly 2,000 duplicate leads in Salesforce—what's the best way to merge them without losing data?
- Leads are being assigned to former reps instead of the current team; can you clean up ownership and fix the routing logic?
- Our account hierarchy in Salesforce doesn't match what's in our ERP—can you update the parent-account relationships and create the missing accounts?
- Product descriptions keep reverting to old text after we update them—something seems to be overwriting our changes from another system.
- An automation is changing lead statuses in ways we didn't intend; can you find what's causing it and stop it?

**How scaleMatters responds:** scaleMatters first audits the affected records and any related automation or sync configuration to pinpoint whether the issue is a data entry problem, a flow/automation misconfiguration, or a cross-system sync conflict. For bulk issues—such as large-scale duplicate merges or mass ownership changes—the team uses data loader tools and creates a backup before making changes, then validates the output against the source of truth. For recurring issues caused by automation logic (e.g., a Salesloft status overwriting a Salesforce field), scaleMatters updates the underlying flow or sync rule so the same problem doesn't resurface. Clients are often looped in during resolution to confirm edge cases and, where feasible, trained on how to handle similar cleanup tasks themselves going forward.

*When this goes to a human:* Escalate to a human if the request involves a large-scale bulk data change (hundreds or thousands of records), a cross-system sync that could create cascading duplicates or data loss in a connected platform, or if the root cause of an automation conflict is unclear and could affect active campaigns or quota reporting.

---

### Salesforce Feature Enhancements

**546 tickets** | Clients come to scaleMatters when they need Salesforce to do something new — a field, a process, an automation, or a structural change that their current setup simply doesn't support yet.

These requests typically surface when a sales, revenue operations, or customer success team hits a wall: they want to track something they can't track, enforce a process that currently runs on trust, or surface data in a report that doesn't exist yet. The trigger might be a new sales methodology rollout, a process breakdown discovered in a pipeline review, a Salesforce platform change forcing an upgrade, or a cross-team handoff that keeps falling apart. scaleMatters works through the requirements with the client, designs the solution in a sandbox environment first, and then deploys to production — handling everything from custom fields and validation rules to Flows, approval processes, custom objects, and third-party integration configurations.

**Example client requests:**
- We're rolling out a new sales qualification framework and need new fields added to leads and opportunities with stage-gating validation rules.
- We want reps to capture why an opportunity's close date slipped — can you build a custom object and picklist to log that every time it happens?
- Our CS team needs required fields on closed-won opportunities to improve the sales-to-CS handoff — can you add those with validation logic?
- We need an approval process so that discounts above a certain threshold require manager sign-off before they're applied.
- Salesforce is requiring phishing-resistant MFA for admin users — can you walk us through what we need to do and make sure we're compliant before the enforcement date?

**How scaleMatters responds:** scaleMatters begins by gathering requirements from the client, often through a sync call or written spec, and assesses scope and approach. Changes are built and tested in a Salesforce sandbox environment first, with the client invited to review and validate before go-live. Once approved, scaleMatters deploys to production via change sets or direct configuration, and closes the case after confirming the client is satisfied. For platform-driven changes like MFA enforcement, scaleMatters proactively briefs clients on what's changing, what steps are required, and confirms compliance before closing.

*When this goes to a human:* Escalate to a human when the request involves a new multi-object data model change, a cross-system integration design (e.g., Salesforce to NetSuite or HubSpot), a platform-enforced deadline with compliance risk, or when the client's requirements are not yet fully defined and scoping is needed before work can begin.

---

### Salesforce Report & Dashboard Help

**311 tickets** | Clients come to scaleMatters when they need a Salesforce report built, fixed, or delivered on a schedule — and don't have the time or access to do it themselves.

These requests usually start when someone on the sales, marketing, or CS team needs visibility into something specific — demos completed, MQL counts, pipeline by rep, customer lists — and either can't find the right report, built one that's returning wrong results, or needs one fast for an upcoming campaign or meeting. Sometimes the issue is a broken filter or a cross-system sync problem (HubSpot, Salesloft, or another tool) causing data to show incorrectly. Other times it's a net-new build request with a tight deadline. scaleMatters diagnoses the root cause, builds or repairs the report, sets up automated delivery schedules where needed, and makes sure the output actually answers the business question being asked.

**Example client requests:**
- Can you build a report of all contacts tied to closed-lost and early-stage opportunities so we can send a campaign by end of week?
- Our MQL report has been showing zeros all month — something changed in HubSpot and now the data isn't flowing into Salesforce correctly.
- I need a weekly report automatically sent every Monday morning showing overdue tasks and upcoming ones for a specific rep.
- Can you export a list of customers from a specific region as an Excel file? We have manager approval to request this.
- I'm trying to see which campaigns drove the most opportunities — can you build a report filtered by campaign name and opportunity creation date?

**How scaleMatters responds:** scaleMatters reviews the existing report or request to understand what business question the client is trying to answer, then checks filters, field mappings, and any connected integrations (such as HubSpot or Salesloft) that may be affecting the data. For new builds, the team confirms the required fields, groupings, and date ranges before constructing the report and sharing the link with the requester. For scheduled reports, scaleMatters sets up the appropriate subscription or, where Salesforce's native scheduling is limited, advises on workarounds such as building a second report or using multiple subscribers.

*When this goes to a human:* Escalate to a human when the reporting discrepancy appears to stem from a broken automation, a cross-system sync failure (e.g., HubSpot workflows not writing to Salesforce fields), or a data integrity issue requiring investigation across multiple tools — these go beyond a simple report fix and may require flow/workflow diagnosis or a bulk data correction.

---

### Salesforce 3rd Party Integrations

**297 tickets** | Clients come to scaleMatters when a tool connected to Salesforce stops syncing, throws errors, or needs to be wired up to a new system for the first time.

These requests usually surface when something breaks at the seam between Salesforce and another platform — a record that won't push to NetSuite, a contact that isn't appearing after a sync, a document tool that stopped attaching files, or a vendor notification about a required package upgrade. The moment tends to feel urgent because a stalled deal, an unbillable project, or a blocked user is often waiting on the other side of the error. scaleMatters diagnoses what broke, coordinates across systems and teams, and either resolves the issue directly or maps out a clear remediation path so the client knows exactly what needs to happen and in what order.

**Example client requests:**
- Our Salesforce-to-NetSuite sync is failing on a specific opportunity — can you figure out why and fix it?
- A vendor just sent us a notice that their Salesforce package needs to be upgraded before a deadline. Can you handle that?
- We added new fields in our marketing platform but the data isn't flowing into Salesforce — how do we backfill and map those correctly?
- A contact we updated in our customer success tool isn't showing up in Salesforce even though the sync rule should have triggered.
- PandaDoc proposals stopped attaching to opportunities in Salesforce after we reconnected the integration — can you take a look?

**How scaleMatters responds:** scaleMatters first reproduces and diagnoses the error, checking both the Salesforce side and the connected system for conflicting field values, permission gaps, status blockers, or stale authentication. For sync errors with ERP systems like NetSuite, the team assesses whether records can be corrected in place or need to be disassociated and re-synced, and loops in the right stakeholders before making changes that could affect billing or revenue recognition. For vendor-initiated package upgrades, scaleMatters reviews the release notes, tests in sandbox, and coordinates a production deployment before any deadline. Field mapping and backfill issues are resolved by confirming the integration logic, creating or adjusting field mappings, and validating that historical data flows correctly.

*When this goes to a human:* Escalate to a human when the issue involves records with existing financial transactions in NetSuite (invoices, fulfilled lines, or billed projects) where re-syncing or deleting could affect revenue recognition or invoicing accuracy, or when a package upgrade deadline is imminent and sandbox testing has not yet been completed.

---

### Salesforce List Upload & Data Import

**245 tickets** | Clients come to scaleMatters when they have a spreadsheet of contacts, leads, accounts, or other records that need to get into Salesforce accurately and without creating duplicates or overwriting good data.

List upload requests are usually triggered by a real-world event — a trade show, conference, webinar, or internal data migration — where a batch of new records lands in someone's inbox as an Excel file. The person holding that file knows it needs to be in Salesforce but isn't sure how to handle matching logic, field mapping, duplicate prevention, or proper campaign association. scaleMatters takes the spreadsheet, confirms the correct field mappings and data transformations, handles deduplication, imports the records into the right Salesforce objects (Leads, Contacts, Accounts, Opportunities, Campaigns, or Products), and reports back on any records that couldn't be matched. The result is clean, properly attributed data in Salesforce without the risk of bulk overwrites or silent data loss.

**Example client requests:**
- Can you upload these trade show leads into Salesforce and tag them to the event campaign?
- We collected contacts at a conference — some are probably already in SF. Can you add the new ones and update the existing ones without creating duplicates?
- I have a spreadsheet of accounts that need a field updated in bulk. Here's the list.
- Can you import these webinar registrants and assign them to the right reps and Gong flows?
- We need these price list items updated in Salesforce across multiple currencies — here's the file.

**How scaleMatters responds:** The client submits a spreadsheet along with instructions on how fields should map to Salesforce objects and what campaign, lead source, or owner assignments apply. scaleMatters reviews the file for data quality issues, confirms the field mapping and deduplication logic with the client before importing, then runs the import using tools such as Salesforce Data Loader or Workbench. After the import, scaleMatters provides a report of successfully loaded records and any rows that failed to match or required manual follow-up, such as contacts whose email addresses didn't exist in Salesforce.

*When this goes to a human:* Escalate to a human when the import involves complex field mapping decisions or cross-object relationships that haven't been pre-agreed, when the client is unsure which Salesforce environment (sandbox vs. production) to target, when the record volume is very large and could have significant data quality or overwrite risk, or when the request involves migrating data from a legacy system with custom transformation logic.

---

### Salesforce Questions & How-To Guidance

**237 tickets** | Clients come to scaleMatters when something in Salesforce doesn't look right, behave as expected, or they simply need a knowledgeable expert to explain how the system works.

These questions bubble up whenever a rep, sales ops admin, or manager notices something unexpected — a lead that changed ownership without explanation, an activity that didn't log, an opportunity that got locked, or a Salesforce notification they don't know how to act on. Sometimes the question is purely conceptual ('what does this field actually mean?'), and sometimes it's a data integrity puzzle ('why did these two contact records merge?'). Clients reach out because they trust scaleMatters to quickly diagnose whether the issue is a misconfigured flow, a platform behavior they weren't aware of, or something that needs a real fix — and to explain the answer in plain language so the team can move forward confidently.

**Example client requests:**
- Our leads are changing ownership automatically and we don't know what's triggering it — can you help us figure out what's happening?
- An inbound demo request came in but it took forever to route and never enrolled in the cadence — why?
- I got a notification from Salesforce about certificate changes and sandbox expirations — do I need to do anything?
- We're trying to build a report on a specific opportunity type but the data is inconsistent and fields are sometimes blank — how should we approach this?
- I added a new picklist value to the Opportunity object — can you confirm this won't break any of our flows?

**How scaleMatters responds:** scaleMatters reviews the specific record, flow, or system configuration referenced in the question and identifies the root cause — whether it's an automation behavior, a data entry inconsistency, a permissions setting, or a platform limitation. For straightforward questions, a clear explanation is provided directly along with any recommended action. When the issue points to a misconfiguration or unintended automation behavior, scaleMatters investigates the underlying flow or rule and advises on whether a fix is needed. Complex data quality or reporting questions may result in scaleMatters running a diagnostic report or recommending a configuration change as a follow-up task.

*When this goes to a human:* Escalate to a human scaleMatters consultant if the question involves a suspected automation or flow that is actively misbehaving at scale (many records affected), if there is a security or compliance concern (e.g. unauthorized data exports, certificate changes requiring admin action), or if the client is asking for a configuration change rather than just an explanation.

---

### Salesforce User Provisioning & Deprovisioning

**234 tickets** | Clients come to scaleMatters to handle the full lifecycle of Salesforce user accounts—getting new hires access fast and cleanly removing access when someone leaves.

These requests most often arrive when a new sales rep, SDR, intern, or regional team member joins and needs to hit the ground running in Salesforce and related tools like Salesloft, Gong, or HubSpot. They also come urgently when an employee departs and access needs to be revoked immediately across the entire tech stack. Clients typically provide a name, email, and a reference user whose profile should be mirrored, and scaleMatters handles the creation, permission configuration, license assignment, and coordination with IT for SSO setup. Bulk cleanups—where a manager audits the user list and submits a batch of additions, removals, and access changes—are also common.

**Example client requests:**
- We have a new sales rep starting tomorrow—can you create their Salesforce, Salesloft, and Gong accounts and match their profile to an existing team member?
- An employee left the company today; please remove their access to Salesforce, Salesloft, and Gong immediately and let us know how to reassign their records.
- We just bought another Salesforce license—can you assign it to our new hire?
- Can you do a batch cleanup of our user list: deactivate these eight people, add one new rep, and change one user's regional access?
- Our new team member needs Salesforce access with CPQ enabled—please mirror the setup of an existing user in the same role.

**How scaleMatters responds:** When a request comes in, scaleMatters confirms the new user's name, email, intended role, and a reference user to clone permissions from. The team creates or deactivates the user in Salesforce, configures the appropriate profile and permissions (including any CPQ, API, or read-only access), assigns the available license, and coordinates with the client's internal IT for SSO and Microsoft/Active Directory group membership. For departures, access is removed across all connected tools simultaneously and record reassignment is confirmed with the requesting manager.

*When this goes to a human:* Escalate to a human if the request involves an urgent termination where immediate access revocation is required, if there is uncertainty about which licenses are available or need to be purchased, if CPQ license reallocation is needed, or if the request involves setting up API or admin-level access with broad data permissions.

---

### Salesforce Miscellaneous & Operational Requests *(catch-all / general support)*

**214 tickets** | Clients come to scaleMatters for hands-on Salesforce administrative work that doesn't fit neatly into a single category — from one-off data fixes and user access issues to product catalog updates, data migrations, and platform configuration tasks.

These requests arise whenever something in Salesforce needs attention but doesn't rise to the level of a formal project — a user is locked out, a price needs updating, a new team member needs access, or a record has an error blocking a deal from closing. The experience is often urgent and transactional: someone is stuck or something is wrong, and they need it fixed quickly. scaleMatters acts as the operational backbone, resolving individual issues, applying configuration changes, and coordinating with internal stakeholders to keep the team unblocked. The work spans a wide spectrum — user permissions, price book management, lead routing, data migration coordination, product catalog corrections, opportunity record fixes, and Salesforce-adjacent system integrations.

**Example client requests:**
- Can you add these users to our CPQ license and set their default office?
- We have a user who can't log in — can you check their SSO setup and reset access?
- Please add these products to our regional price list with the correct multi-currency pricing.
- We're migrating records from our old CRM into Salesforce — can you help map and import the data?
- One of our reps is getting an error when trying to close-book an opportunity — what's blocking it?

**How scaleMatters responds:** scaleMatters receives the request — often forwarded from an internal thread or submitted directly — and identifies whether it is a permissions issue, data issue, or configuration change. For access and login issues, the team checks SSO configuration, user group membership, and Salesforce user settings before resetting or re-triggering access. For data or product catalog changes, the team validates the request with the appropriate internal approver, makes the change in sandbox if risk warrants it, and then deploys to production. For data migrations, scaleMatters works through a structured field-mapping process, importing objects in dependency order and reconciling records between the source system and Salesforce.

*When this goes to a human:* Escalate to a human when the request involves a production data migration with significant volume or complexity, a Salesforce release deadline requiring proactive sandbox testing, a permissions issue tied to SSO or identity provider configuration that may require IT involvement, or when the correct data values need sign-off from a business stakeholder before scaleMatters can act.

---

### Salesforce Miscellaneous & Uncategorized Requests *(catch-all / general support)*

**38 tickets** | Clients reach out when they have a Salesforce need that doesn't fit neatly into a defined project — from quick data fixes and field creation to reporting help and lead assignment changes.

These requests surface when a rep, manager, or ops team member runs into something in Salesforce that's broken, missing, or just not quite right — and they need it handled without spinning up a full project. Sometimes it's a data quality flag caught during regular reviews, sometimes it's a one-off ask like merging duplicate opportunities or reassigning leads to the right owner. The requests are often small in scope but high in urgency because they're blocking a workflow, a month-end close, or a sales rep's day-to-day. scaleMatters handles these as they come in, triaging quickly, executing the fix or configuration, and confirming resolution so the client can move on.

**Example client requests:**
- Can you reassign all the incoming leads from a specific territory to a different rep?
- We have a batch of contacts mistakenly linked to the wrong account — can you detach them?
- A lead replied to an email but their status is still showing 'In Cadence' — should that update automatically?
- Can you create a checkbox field and a formula field to flag whether a record meets our ICP criteria?
- We keep seeing records come through with a missing lead source — can you investigate and clean those up?

**How scaleMatters responds:** scaleMatters reviews the incoming request to determine scope and whether it requires a configuration change, a data operation, or an automation fix. For data issues, the team investigates the affected records directly in Salesforce or via Data Loader, applies the correction, and confirms resolution. For field creation or workflow adjustments, a consultant scopes the requirement, implements it in the appropriate object, and validates the logic before closing. Recurring data maintenance issues are tracked as a pattern and addressed in batches when volume warrants a more systematic fix.

*When this goes to a human:* Escalate to a human if the request involves bulk data operations affecting more than a few hundred records, changes to core automation logic or lead routing rules, or errors that may indicate a systemic integration failure between Salesforce and a connected platform like HubSpot or Salesloft.

---

### Salesforce Training & Guided Usage

**14 tickets** | Clients come to scaleMatters when their team needs hands-on guidance to use Salesforce confidently — whether onboarding new hires, navigating a process they've never done before, or figuring out why something isn't working as expected.

Training requests in this category typically arise when a new team member joins and needs to get up to speed on the company's specific Salesforce setup, or when an existing user encounters a workflow or feature they haven't used before. The experience is usually a mix of 'show me how' and 'something seems off' — users aren't always sure whether they're doing something wrong or whether the system needs a fix. scaleMatters typically responds by scheduling a live walkthrough session, recording steps for future reference, or answering targeted how-to questions directly. The result is a team member who understands not just how to click through a process, but why it works the way it does in their specific configuration.

**Example client requests:**
- We have new BDRs starting next week — can you train them on Salesforce and our sales engagement tool?
- I tried converting a partner lead on my own and it didn't work the way I expected — can you walk me through the correct process?
- How do I merge duplicate records? The Next button is grayed out and I'm stuck.
- What field do I need to add to my opportunity view to see the CPQ quote number?
- Can you walk our new partner manager through reviewing and approving partner-registered leads?

**How scaleMatters responds:** scaleMatters first determines whether the request is a pure training need or has an underlying configuration issue that should be resolved before training occurs. For new hire onboarding, scaleMatters coordinates directly with the new team member to schedule a live session covering the client's specific Salesforce and sales engagement tool setup. For one-off how-to questions, scaleMatters either answers directly via the support channel, records a short walkthrough, or schedules a brief 1-on-1 screen-share. Where a process involves multiple steps or roles (such as partner lead approval workflows), scaleMatters walks the user through end-to-end including what happens after each action.

*When this goes to a human:* Escalate to a human when the training request reveals an underlying system misconfiguration (e.g., missing permissions, broken integrations, fields not populating as expected) that needs to be diagnosed and fixed before or alongside the training session.

---

## Sales Engagement

*174 tickets across 10 service categories*

### Sales Engagement Feature Enhancements

**42 tickets** | Clients come to scaleMatters to build, tune, and extend their sales engagement platform so their reps can focus on selling instead of wrestling with tool configuration.

These requests typically surface when a sales team is scaling into new regions, onboarding new reps, or discovering gaps between how their sales engagement platform is configured and how their actual workflow operates. The friction points are real and immediate: leads aren't auto-enrolling in cadences, reps lack the permissions to do what they need, meeting tools aren't connected, or email tracking has quietly stopped working. scaleMatters steps in to diagnose what's broken, implement the configuration change or cadence build, and coordinate with the platform vendor when the fix lives outside admin controls.

**Example client requests:**
- Can you set up a new cadence for our MENA territory that mirrors our existing NA cadence but adds a phone call step at the end?
- We have a new SDR and their leads aren't being auto-assigned to cadences — can you get that set up?
- Our reps coming in through our scheduling tool aren't showing up in Salesloft automatically — can we auto-add them?
- I need to add a new call disposition option in Salesloft — can you add 'Connected - Nurture Timing is Off'?
- Can you give a team member permissions to create group cadences?

**How scaleMatters responds:** scaleMatters reviews the current configuration in the sales engagement platform (Salesloft or Gong Engage) and the connected CRM to understand the gap. For cadence builds or copies, they draft the step sequence, confirm logic with the regional stakeholder, then build and activate. For permission, sync, or integration issues, they adjust admin settings directly or open a vendor support ticket when the change requires platform-side action. Throughout, they validate with a live example lead or test record before closing the request.

*When this goes to a human:* Escalate to a human when the request involves provisioning or registering phone numbers with a carrier or telecom regulator, when a cadence build requires sign-off from a regional business stakeholder before going live, or when the platform vendor must be engaged directly and the client needs to be looped into that support thread.

---

### Sales Engagement Platform Issues & Bugs

**40 tickets** | Clients come to scaleMatters when something in their sales engagement platform stops working and reps are losing productivity or sending bad data.

These requests typically land when a sales rep or manager notices something unexpected: automated cadence emails aren't firing, calls won't connect, platform activity isn't logging back to Salesforce or the CRM, or records are behaving in ways nobody intended. The disruption usually feels urgent because it touches live prospecting workflows — every hour a cadence isn't running or a dialer isn't working is pipeline at risk. scaleMatters digs into the platform configuration, CRM sync settings, and integration behavior to pinpoint the root cause, applies a fix or coordinates with the vendor's support team, and confirms the issue is resolved before closing.

**Example client requests:**
- Our automatic cadence emails stopped firing for new leads — can you figure out why?
- Contacts keep getting removed from cadences on their own and we don't know why.
- My calls from the sales engagement dialer aren't connecting, but the same numbers work fine from my cell.
- Emails I send through the platform aren't showing up in Salesforce activity records.
- Cadences aren't showing up when I try to import leads — the list is completely empty.

**How scaleMatters responds:** When a sales engagement bug is reported, scaleMatters first replicates the issue and checks platform-side configuration — cadence settings, CRM sync field mappings, dialer setup, and integration permissions. If the issue is platform-native or requires vendor access, scaleMatters opens a support case with the vendor (Salesloft, Outreach, Gong, etc.) and manages that process on the client's behalf. The team monitors for resolution, applies any configuration corrections needed on the client's side, and validates the fix against real records before marking the case complete.

*When this goes to a human:* Escalate to a human if the issue involves data loss or unintended record deletion, widespread cadence failure affecting multiple reps simultaneously, a billing or subscription-level problem with the platform, or a suspected security/compliance concern such as emails going to unintended recipients.

---

### Sales Engagement Platform Questions

**23 tickets** | Clients come to scaleMatters with how-to and why-is-this-happening questions about their sales engagement platform—whether that's Salesloft, Gong Engage, or a similar tool—so they can keep their reps moving without getting stuck.

These questions typically arise when a rep or sales ops team member runs into something unexpected inside their sales engagement tool—a cadence behaving oddly, an email not logging, a permission they can't find, or a feature they've heard about but can't locate. The requests often come informally, forwarded from a VP or sales manager who just needs a quick answer before a deal or outreach sequence stalls. scaleMatters steps in to explain expected system behavior, untangle sync issues between the engagement platform and Salesforce, adjust user permissions or settings, and help teams get more out of features they're already paying for.

**Example client requests:**
- Why did a lead get automatically added to my inbound cadence—was this actually an inbound lead?
- Can you give certain team members permission to create and edit team cadences?
- Our Gong Flow emails show as sent in Gong but aren't showing up as activity in Salesforce—is that expected?
- How do I move a flow that's running under my user over to a different rep?
- We're up for renewal—can you tell us how many licenses we have and what type they are?

**How scaleMatters responds:** scaleMatters reviews the specific platform configuration, user settings, or sync rules relevant to the question and provides a direct explanation of expected behavior or a how-to answer. If the issue requires a settings change—such as adjusting permissions, converting a personal template to a team template, or updating a flow owner—scaleMatters makes the change directly or walks the user through it. For issues involving the platform vendor, such as a broken email connection or a feature requiring beta access, scaleMatters may open a vendor support ticket on the client's behalf. More complex questions, like enabling a secondary email domain for flow sends or adding custom language fields, are scoped and presented to the client as options before any work proceeds.

*When this goes to a human:* Escalate to a human when the question involves a contract renewal decision, a vendor billing or licensing change, a potential compliance issue around email opt-outs or bulk sending regulations, or a request that would require Gong or Salesloft professional services engagement.

---

### Sales Engagement Platform Training & Onboarding

**14 tickets** | Clients come to scaleMatters when a sales rep, BDR, or manager needs to get up and running on their sales engagement platform — or when a specific workflow isn't working the way it should.

These requests typically surface when a new team member joins and needs to learn the platform, when a rep encounters a confusing behavior (like meeting attribution landing on the wrong person), or when someone realizes they don't have the right permissions to do what the team needs. The experience is often informal — a manager forwards a note or a rep reaches out directly — and the ask ranges from a full platform walkthrough to help with one specific feature like building cadences or connecting the Chrome extension. scaleMatters steps in to schedule hands-on training, fix permission or configuration issues blocking the rep, and make sure the rep understands how to use the tool in a way that keeps Salesforce data accurate.

**Example client requests:**
- Can you set up a Salesloft training session for our new BDR who just started?
- One of our reps can't add contacts to cadences — can you check their permissions?
- My Salesloft icon isn't showing up in Salesforce on my new laptop, how do I fix that?
- We need someone to walk our AEs and SDRs through how to use Salesloft so activity syncs correctly to Salesforce.
- Can you train our new sales hire on the full tech stack?

**How scaleMatters responds:** scaleMatters first determines whether the request is a pure training need or whether a configuration or permissions issue is also blocking the user. If permissions need adjustment, those are updated in the platform before or alongside training. scaleMatters then schedules a live walkthrough session — either one-on-one or for a group — covering the relevant features and best practices for keeping Salesforce activity data clean. For technical issues like missing browser extensions, step-by-step setup guidance is provided immediately while a training session is scheduled separately if needed.

*When this goes to a human:* Escalate to a human if the request involves provisioning new licenses, restructuring cadence permissions across a team, or if activity/meeting attribution data errors suggest a deeper Salesforce integration configuration problem rather than a user training gap.

---

### Sales Engagement User Provisioning

**13 tickets** | Clients rely on scaleMatters to quickly add, remove, or reconfigure users in their sales engagement and conversation intelligence platforms so reps can start selling without delay.

These requests typically surface when someone is hired, changes roles, leaves the company, or when a contractor or consultant needs temporary access to tools like Salesloft or Gong. Clients often don't have direct admin access or simply prefer to delegate the setup work so it's done correctly and consistently. scaleMatters handles the provisioning, cloning settings from an existing user as a template, assigning the right roles and permissions, and cleaning up licenses when users depart — keeping the team's toolset tidy and costs in check.

**Example client requests:**
- Can you add our new AE to Salesloft and set them up the same way as an existing rep?
- We have two people who left the company — can you remove them from Gong and make sure their licenses are freed up?
- A new consultant needs read-only access to Gong to review call recordings before a project kicks off.
- Can you make this person an admin in Salesloft?
- We need to add a phone number for a new user in Salesloft, similar to how another rep is configured.

**How scaleMatters responds:** When a provisioning request comes in, scaleMatters identifies the target platform (most commonly Salesloft or Gong), confirms the user's role, manager, and any reference user to clone settings from, then creates or deactivates the account accordingly. For new users, settings such as profile, cadence permissions, dialer configuration, and role assignments are mirrored from a designated template user. For departures, scaleMatters verifies the user is removed from all relevant systems and confirms licenses are released. Requests involving access tied to external identity providers like Active Directory or SSO may require a brief coordination step with the client's IT team before provisioning can be completed.

*When this goes to a human:* Escalate to a human if the request involves bulk user changes across multiple platforms at once, if SSO or Active Directory configuration changes are required on the client's side, or if there is ambiguity about which user profile or permission set to clone from and no reference user has been specified.

---

### Sales Engagement + Third-Party Integration Troubleshooting

**12 tickets** | Clients come to scaleMatters when their sales engagement platform stops talking cleanly to Salesforce or a connected tool like ZoomInfo, Cognism, Apollo, or LinkedIn Navigator.

These requests usually surface when something that was working quietly in the background suddenly breaks — a rep notices emails aren't logging, a contact won't import, a cadence isn't removing disqualified leads, or a field mapping error starts firing alerts. The friction tends to show up at the worst time: right before a tool rollout, during an active outreach push, or when a picklist or status value was recently changed in Salesforce and the downstream sync didn't follow. scaleMatters diagnoses whether the issue lives in the sales engagement platform, Salesforce, or the connector between them, fixes the broken automation or mapping, and helps clients tighten the integration so the same thing doesn't quietly break again.

**Example client requests:**
- Our sales engagement tool is sending a mapped-field alert after we updated a picklist in Salesforce — can you fix the sync?
- Reps are completing LinkedIn steps in their cadence but getting an error — can you look into it?
- We set up ZoomInfo but need emails sent from it to still track back to Salesforce — how do we configure that?
- When a lead is marked disqualified, it's not being automatically removed from the active cadence — is there an automation we're missing?
- The import button between Salesforce and our sales engagement platform launches but nothing happens — can you troubleshoot?

**How scaleMatters responds:** scaleMatters first identifies which system is the source of the break — the sales engagement platform, Salesforce, or the integration layer — by reviewing field mappings, automation rules, and sync logs. For mapping or picklist errors, the team reconciles values across both systems and updates the relevant rules. For automation gaps (such as cadence removal not triggering on status change), scaleMatters builds or adjusts the automation rule and validates it against real records. For new tool integrations, the team works through field mapping, activity tracking configuration, and any filtering logic needed to keep outbound sequencing from hitting the wrong accounts.

*When this goes to a human:* Escalate to a human if the sync failure is affecting a live outbound campaign or imminent tool rollout, if the issue involves data loss or records being incorrectly enrolled at scale, or if the root cause is unclear after initial triage and requires live screen-share diagnostics.

---

### Sales Engagement – Miscellaneous & Other *(catch-all / general support)*

**10 tickets** | Clients come to scaleMatters for hands-on help with the edge cases, one-off tasks, and in-between requests that don't fit neatly into their usual sales engagement workflows.

These requests tend to surface when something unexpected happens in a client's sales engagement platform — a compliance notice lands in someone's inbox, a round-robin assignment behaves strangely, a rep can't get their calls set up, or a tool migration creates a tangle of loose ends. The requests are often low-urgency but can quietly block reps or skew reporting if left unaddressed. scaleMatters jumps in to investigate, coordinate with platform support when needed, and close the loop so the team can keep moving.

**Example client requests:**
- Can you look into why incoming account signups are changing contact ownership and disrupting our round-robin assignments?
- We're consolidating from Salesloft to Gong Engage — can you migrate our cadences, templates, and automation rules?
- Can you provision Gong Engage licenses and enable the dialer for a batch of new users?
- One of our SDRs replied to a lead but the status didn't update in Salesloft or Salesforce — can you figure out what happened?
- Can you pull a list of everyone currently in our Account Executives Salesloft user group?

**How scaleMatters responds:** scaleMatters first clarifies the scope and urgency of the request, often in a brief sync or Slack thread, then investigates the specific platform configuration or behavior involved. For bugs or sync issues, the team may engage vendor support directly while keeping the client updated. For migrations or provisioning tasks, scaleMatters works from a defined asset list and confirms completion with the client before closing the ticket.

*When this goes to a human:* Escalate to a human when the request involves a vendor compliance or opt-out policy with potential legal implications, when a platform migration is larger in scope than a handful of cadences or templates, or when a sync/logging issue is actively preventing reps from working and hasn't been resolved by standard troubleshooting.

---

### Sales Engagement Miscellaneous & Ad-Hoc Requests *(catch-all / general support)*

**8 tickets** | Clients come to scaleMatters for one-off sales engagement platform tasks that don't fit neatly into a standard configuration or training request.

These requests arise when a sales team hits an unexpected friction point in their day-to-day use of tools like Salesloft, Outreach, or Gong — something that doesn't belong to a planned project but still needs to get done. The trigger might be a rep who can't access their account, a manager who wants a quick report on cadence activity, or a team adopting a new dialing feature to improve connect rates. ScaleMatters steps in to diagnose the issue, implement the change, or coordinate with the platform vendor, so the sales team can keep moving without losing momentum.

**Example client requests:**
- Can you update our cadence assignment rules so that leads from a specific industry get routed to the right industry-specific sequence?
- We need a report showing how many prospects are actively in progress across all our cadences — right now we're counting manually.
- I'd like to enable local dial numbers in Salesloft to improve our cold call connect rate.
- One of our reps got an account created in Outreach but can't log in — can you get them access?
- We're moving off Salesloft and onto the native Salesforce Sales Engagement tool — can you help us scope the migration?

**How scaleMatters responds:** ScaleMatters first triages the request to understand whether it requires a configuration change, a platform access fix, a reporting build, or a discovery conversation about a larger change. For quick fixes like access issues or import errors, the team resolves directly in the platform. For more complex requests such as cadence rule logic changes or platform migrations, scaleMatters may schedule a scoping call to confirm requirements before implementing, and will often coordinate with internal stakeholders to validate criteria before activating any automation.

*When this goes to a human:* Escalate to a human when the request involves a platform contract decision or renewal, a full migration between sales engagement tools, or when the client is unsure of scope and a discovery call is needed to define requirements.

---

### Sales Engagement List Upload

**6 tickets** | Clients come to scaleMatters to get prospect and lead lists imported into their sales engagement platform quickly and correctly so outreach can start without delay.

These requests typically come up when a rep or team has a fresh batch of contacts — from an event, a partner list, or a targeted outreach push — and needs them loaded into Salesloft or a similar platform before a cadence or campaign can kick off. The urgency is often real: clients are trying to launch outreach the same day, or they just returned from an event and want to strike while the iron is hot. scaleMatters handles the import, resolves formatting or column-structure errors that prevent bulk uploads, assigns the right tags or cadences, and in some cases sets up automations so future lists feed in without manual intervention.

**Example client requests:**
- Can you upload this spreadsheet of contacts into Salesloft so I can start a cadence today?
- We got a lead list from a recent event — please upload it and create a campaign for it.
- I'm getting a column groups error when trying to import leads in bulk — can you fix it?
- Can you set up an automation to auto-import leads and tag them with a specific label?
- Can you export my current Salesloft accounts and contacts so I can reconcile them with Salesforce?

**How scaleMatters responds:** scaleMatters receives the list (usually via Google Sheets or a file attachment) along with context on the intended cadence, tag, or campaign. The team imports the contacts into the sales engagement platform, resolves any formatting or structural errors that block the upload, and assigns the appropriate cadence, flow, or tag as instructed. For recurring needs, scaleMatters can configure an automation so future lists are ingested and tagged without requiring a manual ticket each time.

*When this goes to a human:* Escalate to a human if the upload involves a large or complex list with unclear field mapping, if the client wants a new automation built from scratch, or if the request involves connecting a new data source to the sales engagement platform.

---

### Sales Engagement Data Hygiene

**6 tickets** | Clients come to scaleMatters to fix mismatches, broken automations, and messy records between their sales engagement platform and Salesforce.

These requests typically surface when a rep notices something doesn't look right — an email count that doesn't match between Salesforce and Salesloft, a status field that didn't update automatically, or a lead that got linked to the wrong account. The frustration is usually a workflow that was supposed to be seamless but required a manual workaround instead. scaleMatters investigates the root cause, corrects the underlying data or configuration, and where possible automates the step so it doesn't require manual intervention again.

**Example client requests:**
- Why don't the email counts in Salesforce match what I see in Salesloft?
- When I send an email from Salesloft, can it automatically update the lead status in Salesforce?
- A contact I added got linked to the wrong account in Salesloft — can you fix it?
- Can you merge two duplicate accounts?
- A meeting I booked through Salesloft didn't show up in Salesforce — what happened?

**How scaleMatters responds:** scaleMatters reviews the specific record or report discrepancy flagged by the client, then traces the issue to its source — whether that's a sync configuration gap, a missing automation rule, or a data entry error at import. For automation gaps (like status fields not updating), scaleMatters designs and implements a trigger or workflow so the step happens automatically going forward. For record-level issues like incorrect account linkages or duplicate accounts, scaleMatters corrects the data directly and confirms accuracy in both systems.

*When this goes to a human:* Escalate to a human if the discrepancy appears systemic across many records or users, if a Salesloft platform bug may be involved, or if the automation request requires scoping new workflow logic beyond a straightforward field-update rule.

---

## Marketing Automation

*143 tickets across 9 service categories*

*A note on scope: in this ticket history, "Marketing Automation" is effectively synonymous with HubSpot Marketing Hub — 102 of 143 tickets in this category explicitly mention HubSpot, and no other marketing automation platform shows meaningful volume. Separately, HubSpot also appears in 226 tickets filed under Salesforce (SFDC) — but those are almost entirely about HubSpot ↔ Salesforce sync/integration (list exports, field mapping, selective sync), not about administering HubSpot's own CRM objects. Only 1 ticket in the entire dataset references HubSpot's Sales Hub, Service Hub, or Deal objects directly. In short: historically, scaleMatters' clients ran HubSpot purely as a marketing platform, with Salesforce as the CRM of record — this category reflects that pattern, not a limitation in what scaleMatters supports. See "HubSpot CRM (Sales Hub / Service Hub)" below for scaleMatters' growing work with clients who run HubSpot as their actual CRM.*

### Marketing Automation Issues & Bugs

**38 tickets** | Clients come to scaleMatters when something in their marketing automation stack stops working as expected — leads aren't syncing, workflows are misfiring, or data isn't flowing cleanly between HubSpot and Salesforce.

These requests almost always begin with someone noticing something is missing or wrong: a lead that never made it to Salesforce, a workflow that didn't fire, a contact with mismatched data across systems, or a bulk assignment that landed in the wrong place. The experience is often urgent because the gap touches active pipeline — a demo request that didn't trigger a follow-up, webinar registrants not added to a campaign, or newly imported leads that got auto-disqualified. scaleMatters digs into the specific workflow, sync error, or field mapping at fault, identifies the root cause, and fixes or reconfigures the broken piece so leads and data flow correctly going forward.

**Example client requests:**
- We imported a batch of leads and they all got disqualified automatically — something in our filters is wrong
- A contact filled out our demo request form but we never got the Slack alert and no one followed up
- Our HubSpot workflow is supposed to push people into a Salesforce campaign but about 30 of them aren't coming through
- Data is showing up in HubSpot but not syncing over to Salesforce — not sure if it's a field mapping or permissions issue
- We created new company records in HubSpot and now we have duplicates appearing in both systems

**How scaleMatters responds:** scaleMatters starts by reproducing the issue using specific example records provided by the client, then traces the failure point — whether that's a workflow error log, a field mapping conflict, a sync inclusion rule, or a permissions gap on a new field. Once the root cause is identified, the team either corrects the configuration directly (updating picklist values, fixing field mappings, adjusting workflow triggers or delays) or coordinates with the client's team to validate data before re-syncing. For recurring structural issues like selective sync scope or duplicate creation patterns, scaleMatters proposes a more durable fix rather than a one-off patch.

*When this goes to a human:* Escalate to a human when the issue involves bulk data loss or corruption across many records, when the sync has been broken for an extended period affecting active pipeline, or when the root cause is unclear after initial triage and may involve platform-level bugs or permission changes made outside the scaleMatters team's knowledge.

---

### Marketing Automation Data Hygiene

**27 tickets** | Clients come to scaleMatters when their marketing automation database has grown messy — duplicate records, broken syncs, misfired workflows, and unreliable data — and they need it cleaned up and kept clean.

These requests typically surface when a team notices that numbers don't add up between their marketing automation platform and CRM, or when a workflow fires incorrectly and a lead gets miscategorized. Sometimes it's a single bad record that triggers the ask; other times it's a broader realization that the database has accumulated years of stale contacts, redundant workflows, and mismatched field values. scaleMatters digs into the root cause — whether that's a broken sync, a picklist mismatch, cold contacts flooding the database, or outdated lifecycle logic — and either fixes it directly or guides the client through a structured cleanup. The goal is a database that sales and marketing can actually trust.

**Example client requests:**
- Our MQL counts in HubSpot and Salesforce don't match — can you figure out why?
- We have dozens of workflows and we're not sure which ones are still needed — can you review and clean them up?
- Cold prospects from a purchased list keep syncing into our marketing automation platform and inflating our contact count. How do we stop that?
- There are hundreds of duplicate contacts between our CRM and marketing platform — can you run a deduplication?
- A lead's source got overwritten incorrectly by a workflow — can you find what happened and fix it?

**How scaleMatters responds:** scaleMatters begins by auditing the specific symptom — reviewing sync error logs, workflow logic, field mappings, or contact records as appropriate. For sync and field issues, the team reconciles picklist values and field definitions between the marketing automation platform and CRM, then resolves mismatches. For database bloat or duplicates, scaleMatters uses deduplication tooling and works with the client to establish criteria for suppressing or excluding records that shouldn't be in the active database. Workflow audits involve cataloging all active automations, identifying conflicts or redundancies, and turning off or consolidating logic that is no longer needed.

*When this goes to a human:* Escalate to a human when the request involves a large-scale data purge or contact deletion, a sync outage affecting active campaigns, or when the client is unsure of scope and needs a scoping conversation before work begins.

---

### Marketing Automation & CRM 3rd-Party Integration Support

**22 tickets** | Clients come to scaleMatters when data stops flowing correctly between their marketing automation platform and Salesforce — or when they need a new integration stood up cleanly from the start.

Most of these requests are triggered by something breaking quietly in the background: leads duplicating, records not syncing, field values mismatching, or a workflow that was supposed to push contacts into a campaign simply not doing it. The frustration is real — the client often only notices when a rep can't find a record, a lead goes unworked, or meeting routing fails during a rep's PTO. scaleMatters investigates the root cause across both systems, fixes sync logic and field mappings, cleans up the resulting data mess, and puts guardrails in place so the same issue is less likely to recur.

**Example client requests:**
- Salesforce is creating leads in HubSpot but it should only flow the other way — can you fix this and help us clean up the duplicates?
- Our HubSpot workflow seems to be working but contacts aren't showing up in the Salesforce campaign — what's missing?
- Webinar attendees are getting registration credit in HubSpot but not attendance credit — something's off with the Zoom integration.
- We need to temporarily pause the HubSpot-Salesforce sync so we can merge duplicate companies without making things worse.
- There are thousands of records in HubSpot that never made it into Salesforce — can you figure out why and fix it?

**How scaleMatters responds:** scaleMatters starts by reviewing sync health dashboards, property/field mappings, and automation rules across both platforms to locate where the data flow is breaking down. They trace the issue to its source — whether that's a misconfigured sync direction, a mismatched picklist value, an inactive user record, or a workflow missing a CRM action step — and implement a targeted fix. Where bad data has already accumulated, they assess the scope of cleanup needed and either resolve it directly or coordinate with the client on remediation steps. For new integrations, they configure the connection carefully to avoid unintended side effects like mass-converting contacts to marketing contacts or creating unwanted records on first sync.

*When this goes to a human:* Escalate to a human if the request involves pausing or disabling an active sync, bulk-deleting or mass-updating records across systems, setting up a brand-new integration from scratch, or if the client reports widespread data loss or corruption — these carry risk of irreversible data changes and need direct consultant oversight.

---

### Marketing Automation Feature Enhancements

**17 tickets** | Clients come to scaleMatters to design, build, and refine marketing automation logic so their lead lifecycle, scoring, forms, and integrations behave the way their go-to-market process actually works.

These requests typically surface when something in a client's marketing automation platform isn't behaving as expected, or when the team is ready to add new capability they don't have time or confidence to build themselves. The friction usually sits at the intersection of HubSpot and Salesforce — lifecycle stages drifting out of sync, lead scoring models that need a first build or an overhaul, forms that aren't triggering the right downstream actions, or new programs like events and LinkedIn ads that need to be wired into existing workflows. scaleMatters steps in to audit the current configuration, align on the intended behavior, and implement or fix the automation so marketing and sales data flows cleanly and reliably.

**Example client requests:**
- Can you build and implement a new lead scoring model we've drafted?
- Our lifecycle stages in HubSpot aren't syncing correctly to Salesforce companies — can you fix that?
- We have new forms for a PPC campaign — can you make sure they trigger Slack alerts, assign tasks, and auto-MQL?
- Something is promoting contacts to SAL when a meeting hasn't actually been booked — can you investigate the workflow logic?
- We need to map out and build a new events intake process in HubSpot.

**How scaleMatters responds:** scaleMatters typically starts by reviewing the current HubSpot configuration — workflows, lifecycle stage rules, form settings, or sync mappings — to understand the gap between intended and actual behavior. For net-new requests, the team aligns with the client on desired logic before building, often in a brief working session. Once the approach is agreed upon, the configuration is implemented and tested (including inserting test records where needed), and the client is notified of what was changed and why. More complex motions like a full events process or a new scoring model may be scoped first and built under a separate follow-on ticket.

*When this goes to a human:* Escalate to a human when the request involves a third-party agency making structural changes to HubSpot that could affect the Salesforce integration, when a scoring or lifecycle model requires strategic input from sales and marketing leadership before configuration, or when a bug in workflow logic is causing incorrect lead stage promotions that may have already affected live pipeline data.

---

### Marketing Automation New Feature Requests

**10 tickets** | Clients come to scaleMatters to build out new fields, workflows, alerts, and integrations in HubSpot that make their marketing and sales processes smarter and more connected.

These requests typically surface when a client's team identifies a gap — a piece of data they aren't capturing, a workflow that doesn't yet exist, or a tool they want to connect to HubSpot. The trigger is usually a new business initiative, a sales process change, or a reporting need that the current setup can't support. Clients describe what they need in plain business terms and rely on scaleMatters to figure out the right technical implementation. The result is a configured, tested feature — whether that's a new property, a workflow, a Slack notification, or a bi-directional Salesforce sync — that works in production without the client having to navigate HubSpot's backend themselves.

**Example client requests:**
- Can you add a new contact property to HubSpot and make sure it syncs to Salesforce?
- We want to send a Slack notification whenever a high-priority form is submitted — can you set that up?
- We need to start tracking UTM parameters from our sign-up flow and pass them into both HubSpot and Salesforce.
- Can you build segmented nurture workflows in HubSpot based on a deal outcome field?
- We want to route inbound demo requests through a scheduling tool — can you help configure it?

**How scaleMatters responds:** scaleMatters reviews the business goal behind the request and determines the cleanest technical implementation inside HubSpot. New properties and fields are built with consistent naming conventions and mapped to Salesforce where relevant. Workflows and automations are configured and tested before being deployed to production. If the request touches a Salesforce sync or a third-party integration, scaleMatters coordinates across systems to ensure data flows correctly end to end.

*When this goes to a human:* Escalate to a human if the request involves a net-new integration with a tool scaleMatters hasn't previously configured for the client, if the workflow logic is complex or touches revenue-critical deal stages, or if the client needs a scoping conversation before work can begin.

---

### Marketing Automation Report & Dashboard Help

**9 tickets** | Clients come to scaleMatters when they need marketing automation reports built, fixed, or connected to the dashboards their teams actually use.

These requests typically surface when a marketing or revenue leader realizes their current setup isn't giving them the visibility they need — whether that's MQL tracking, daily visitor alerts, pipeline metrics, or activity-based lists. Sometimes the gap appears during a platform migration, sometimes it shows up in a weekly review when a key metric is missing or a filter looks off. scaleMatters steps in to build the report from scratch, validate the logic against the underlying data, and make sure the output lands in the right hands — whether that's a dashboard, a recurring email, or a live list the sales team can act on.

**Example client requests:**
- Can you build an active list in HubSpot for leads our reps have marked as closed-nurture or closed-ghosted?
- I need a daily visitor report from HubSpot similar to what we were getting from Pardot — can you set that up?
- Can you sanity-check the filter criteria on this MQL list and make sure it's pulling correctly from Salesforce?
- Please add this report to my pipeline dashboard in HubSpot.
- We need first-meeting activity grouped by week and rep, plus average deal size and sales cycle — can you add those to the dashboard?

**How scaleMatters responds:** scaleMatters reviews the client's existing report setup or dashboard and identifies what's missing, misconfigured, or needs to be built net-new. For list-based requests, they confirm the correct underlying CRM fields are mapped and that filter logic reflects the intended business definition. Reports are then built or updated in the marketing automation platform, added to the appropriate dashboard, and — where recurring delivery is needed — configured for scheduled email or real-time notification. Clients are walked through the logic during a sync or async review to confirm the output matches expectations.

*When this goes to a human:* Escalate to a human when the request involves a platform migration context, cross-system field mapping between the marketing automation tool and Salesforce, or when the client is unsure which fields or definitions should drive the report logic — these require scoping before work can begin.

---

### HubSpot Miscellaneous & Ad Hoc Requests *(catch-all / general support)*

**9 tickets** | Clients come to scaleMatters for quick, trusted help with HubSpot tasks that don't fit a standard project but still need expert eyes.

These requests tend to surface when a client is in the middle of building something, hits an unexpected snag, or discovers a discrepancy they can't explain on their own. The issues range from workflow QA checks before a Monday launch, to marketing contact status mismatches that persist after their own fix attempts, to access problems blocking a team member. What clients get is a responsive, knowledgeable partner who can step in, diagnose the situation, apply the fix or guidance, and get them unblocked fast — without requiring a formal scoping process.

**Example client requests:**
- Can you do a quick QA check on this workflow before I turn it on Monday?
- There's a discrepancy between how many marketing contacts the CRM shows versus what appears when I go to send an email — can you look into it?
- I'm trying to delete an old property but it's being used in a read-only view I can't edit — how do I get it removed?
- One of our team members lost their 2FA device and can't get into HubSpot — can you help deactivate it?
- Can you audit all our active HubSpot workflows and document their entry criteria and actions in a spreadsheet?

**How scaleMatters responds:** scaleMatters reviews the specific HubSpot asset, setting, or configuration the client has flagged — often by accessing a shared workflow link, report, or screenshot. Depending on the issue, the team either applies a direct fix (updating a workflow, adjusting a list segment, removing a property reference) or walks the client through the correct configuration on a call. For access-related issues like 2FA resets, the team coordinates with HubSpot admin controls on the client's behalf. Workflow audits are handled by systematically reviewing each workflow and documenting findings in a structured format the client can reference going forward.

*When this goes to a human:* Escalate to a human if the request involves resetting account-level access credentials, bulk data changes affecting large contact populations, or workflow logic tied to active revenue-generating campaigns where a misconfiguration could cause immediate business impact.

---

### Marketing Automation Miscellaneous & Ad Hoc Support *(catch-all / general support)*

**6 tickets** | Clients come to scaleMatters with one-off HubSpot puzzles, data quality concerns, and operational housekeeping that don't fit neatly into a planned project.

These requests tend to surface when something unexpected catches a team's attention — a suspicious lead flooding the pipeline, a confusing lead source attribution, or a technical issue like runaway scoring logic eating up API capacity. The work is often low-urgency but can snowball if ignored, such as spam leads muddying pipeline data or an integration loop pushing systems toward their limits. scaleMatters steps in to diagnose the root cause, recommend a practical fix, and help clients understand what happened so they can make an informed decision about next steps.

**Example client requests:**
- We're seeing a spike in obviously fake leads coming through our HubSpot forms — can you help us figure out what's happening and how to stop it?
- Our HubSpot lead scoring seems to be updating constantly and we're worried about hitting Salesforce API limits — can you look into this?
- I'm trying to de-duplicate companies in HubSpot and need help figuring out which HubSpot record maps to which Salesforce account.
- A lead record in our system has a confusing origin story — the source says one thing but the creation method suggests another. Can you help me understand how it got created?
- We need to provision a new HubSpot user and make sure they have the right access level.

**How scaleMatters responds:** scaleMatters reviews the reported issue in the client's HubSpot and connected systems to identify root cause, whether that's a misconfigured workflow, scoring logic, data mismatch, or access gap. For spam or data quality issues, the team assesses options like form protection, workflow filters, or field validation and presents tradeoffs to the client. For technical issues like API overload from scoring loops, scaleMatters isolates the triggering automation and recommends a targeted fix to reduce unnecessary updates. User access requests are handled by cloning an appropriate existing user profile and provisioning the required systems.

*When this goes to a human:* Escalate to a human if the issue involves repeated or high-volume spam indicating a potential security vulnerability, if Salesforce API limits have already been breached and production systems are affected, or if the user provisioning request involves elevated permissions not covered by a standard clone.

---

### Marketing Automation List Uploads

**5 tickets** | Clients come to scaleMatters to safely import contacts, accounts, or leads into HubSpot without triggering unintended automations or missing critical field mappings.

List upload requests typically arise when marketing or sales teams have a batch of new contacts, accounts, or leads they need to get into HubSpot quickly — often from a spreadsheet, event export, or territory assignment exercise. The tricky part is rarely the upload itself; it's the downstream consequences: will a workflow fire unexpectedly, will the wrong owner get notified, will fields map correctly to Salesforce campaigns or custom properties? Clients lean on scaleMatters to review the setup before anything is triggered, make sure the data lands cleanly, and handle any cross-system assignments or field exposures that come along with it.

**Example client requests:**
- Can you upload this spreadsheet of cold leads into HubSpot and make sure no email alerts go out to the new owner?
- We need these accounts assigned to a specific rep in HubSpot and tagged with the right segment — can you handle that?
- Before I trigger this workflow to push these contacts into a Salesforce campaign, can you review it to make sure the field mappings are correct?
- Can you build a reusable template so our team can do list uploads consistently going forward?
- We have a new set of target accounts — can you update HubSpot with the current list?

**How scaleMatters responds:** scaleMatters reviews the list and any associated workflows before import to identify automation risks such as unintended email alerts or workflow triggers. The team handles the upload, ensures field mappings are correct at the contact or company level, and coordinates any cross-system actions like Salesforce campaign membership or owner assignment. When a client anticipates recurring uploads, scaleMatters can build a reusable template or documented process to reduce friction on future imports.

*When this goes to a human:* Escalate to a human if the upload involves complex workflow logic that could affect live campaigns, if the list is very large and automation suppression needs to be verified, or if cross-system Salesforce field mapping decisions require client input on data governance.

---

## HubSpot CRM (Sales Hub / Service Hub)

**Clients come to scaleMatters when HubSpot itself is their system of record for sales and/or service — not just their marketing platform.** This is distinct from the "Marketing Automation" category above, which covers HubSpot Marketing Hub work for clients whose CRM of record is Salesforce.

scaleMatters works with clients running both HubSpot CRM and Salesforce CRM, including a recent uptick in HubSpot CRM clients and clients looking to migrate from Salesforce to HubSpot. *(Internal note: this category isn't built from the historical ticket dataset like the others in this catalog — tickets from HubSpot-CRM clients weren't consistently tagged separately from "Marketing Automation" work. That's a data-tagging gap, not a reflection of real experience level; see the process note below.)*

**What this covers:** HubSpot deal pipeline configuration and stage logic, Sales Hub sequences and quotes, Service Hub ticket pipelines and SLAs, HubSpot permission/team structure administration, reporting built on HubSpot's own CRM objects (Deals, Tickets) rather than Salesforce Opportunities, and migrations from Salesforce to HubSpot.

**How scaleMatters responds:** The same administration, automation, and reporting expertise scaleMatters applies to Salesforce carries over to HubSpot's CRM side — this isn't a new discipline for the team, just another surface for existing HubSpot depth (see "Technology We Support" above). For clients migrating from Salesforce, this also draws on scaleMatters' broader platform migration experience.

*A process note for scaleMatters:* going forward, tickets from clients running HubSpot as their CRM should be tagged distinctly from generic "Marketing Automation" work, so this category can build its own ticket-driven evidence base over time the way the others have.

---

## Call Transcription

*56 tickets across 4 service categories*

### Gong User Provisioning

**26 tickets** | Clients come to scaleMatters to quickly provision, configure, or adjust Gong call recording access for new and existing team members.

These requests typically arise when someone joins a team, takes on a new role, or needs to review recorded calls for a project or onboarding purpose. Clients reach out because Gong license management sits outside their day-to-day IT workflow and they need scaleMatters to handle the technical provisioning. scaleMatters creates the appropriate account type—full user, collaborator, or viewer—confirms SSO and access group settings, and notifies the requestor when the user is ready to go.

**Example client requests:**
- Can you create a full Gong account for our new sales rep who starts next week?
- We need a few collaborator accounts so some project managers can review recorded calls—can you set those up?
- Can you give a consultant view-only access to Gong so they can watch one specific recording?
- Please provision Gong access for our sales interns—they just need to be able to view calls.
- We're transitioning a role to a new person; can you set them up in Gong with the same access as their predecessor?

**How scaleMatters responds:** scaleMatters receives a request—either via a structured intake form or a forwarded email chain—that identifies the user, their email, desired access level (full user, collaborator, or viewer), and any approval already granted. RevOps confirms the appropriate license tier, creates the account, configures SSO or Office 365 login as needed, and replies to the requestor to confirm completion and coordinate any training handoff.

*When this goes to a human:* Escalate to a human if the request involves clarifying license costs or budget approval, if there is ambiguity about whether a full versus collaborator license is appropriate, or if SSO/AD group configuration requires coordination with the client's IT team.

---

### Call Transcription – Miscellaneous Administration & Configuration *(catch-all / general support)*

**14 tickets** | Clients come to scaleMatters when their call recording and transcription platform needs to be connected, configured, or adjusted in ways that fall outside routine setup.

These requests tend to surface when something in the call recording environment quietly breaks or when a new capability appears that the team wants to put to work. A sales rep notices Gong isn't recording their Zoom calls, an integration silently drops its connection to a CRM or sales engagement tool, or a new AI feature like MEDDPICC playbooks becomes available and the team wants it wired into Salesforce. Other times the ask is simply about access and permissions — enabling manual scheduling, adjusting recording consent profiles, or upgrading a user's permission level. scaleMatters steps in to diagnose the root cause, coordinate with the right admins (Zoom, HubSpot, Salesforce, or the client's own IT), and get the configuration back to a working state or the new capability fully operational.

**Example client requests:**
- Can you set up the Gong and Zoom integration so our calls are recorded automatically?
- Gong is syncing to the wrong CRM — it's picking up HubSpot instead of Salesforce. Can you fix that?
- We just turned on Gong's AI playbooks for MEDDPICC — can you get those fields pushing into Salesforce?
- One of our reps is getting an error saying they don't have permission to schedule Gong recordings manually. Can you enable that?
- Can you pull all our historical Gong call data with competitor tracker occurrences and format it for import into our opportunity records?

**How scaleMatters responds:** scaleMatters first reproduces or confirms the reported issue or scopes the requested configuration change, then identifies which integration touchpoints or admin settings are involved. For broken connections, the team works with the relevant platform admins (Zoom, HubSpot, Salesforce, or the call recording vendor) to re-authenticate or reconfigure the integration. For new capability requests such as AI field syncing or tracker data exports, scaleMatters maps the desired output to available Gong settings and CRM fields, implements the configuration, and validates the data flow before closing the ticket.

*When this goes to a human:* Escalate to a human when the request involves Gong consent or compliance settings in a regulated or multi-jurisdiction context, when a full new Gong environment setup is needed, or when the CRM integration has been broken for an extended period and data loss may have occurred.

---

### Gong Call Transcription Issues & Bugs

**11 tickets** | Clients turn to scaleMatters when Gong stops recording reliably, surfaces unexpected data, or behaves inconsistently across their team.

These requests typically arise when something in Gong breaks down at a critical moment — a recording fails to start, a call is marked as skipped, or a Zoom integration quietly disconnects. The frustration is often heightened because the affected call was important and the recording feels unrecoverable. Clients also surface subtler bugs, like Gong's AI pulling in unrelated account data, AI features not recognizing multiple languages, or activity simply not associating to the right opportunity. scaleMatters triages the issue, liaises with Gong support when needed, and helps clients understand whether the root cause is a platform outage, a configuration gap, or a Gong product limitation.

**Example client requests:**
- Gong joined my call but disconnected and never recorded it — can we retrieve anything?
- Our Zoom integration seems to have disconnected from Gong, what do we do?
- Gong isn't associating any activity to this specific opportunity even though it works on others
- The Gong AI summary is showing information from a completely unrelated account
- Some users are only getting recorded intermittently — it's inconsistent

**How scaleMatters responds:** scaleMatters first reviews the specific call or account link provided to diagnose whether the issue is a Gong platform outage, a disconnected integration, a configuration error, or an AI mismatch. If the issue is a known Gong platform problem, scaleMatters confirms the cause and closes or monitors accordingly. For issues requiring vendor intervention — such as unprocessed recordings, AI data bleed, or beta feature access — scaleMatters opens a support ticket directly with Gong and tracks it to resolution. Configuration-level fixes like reconnecting integrations, correcting user email addresses, or adjusting opportunity filters are handled directly by the scaleMatters team.

*When this goes to a human:* Escalate to a human if the missing or unprocessed recording is tied to a time-sensitive customer commitment or compliance requirement, or if the AI data exposure involves sensitive cross-account information that may have been shared inappropriately.

---

### Call Transcription (Gong) Questions & Troubleshooting

**5 tickets** | Clients come to scaleMatters when their Gong call recording and transcription setup isn't behaving as expected and they need a knowledgeable partner to diagnose and resolve it quickly.

Questions in this category typically surface when something in the Gong environment stops working or a user doesn't know how to accomplish a specific recording task — an API key expiration notice lands in a co-founder's inbox, a rep can't get Gong to join a call they're not hosting, or an entire regional team's calls are mysteriously absent from upcoming call lists. Because Gong sits at the intersection of calendar integrations, CRM connectors, user permissions, and telephony, these issues can feel opaque to the people experiencing them. scaleMatters investigates the root cause, communicates clearly about what's happening, and either resolves it directly or opens and manages a ticket with Gong support on the client's behalf.

**Example client requests:**
- Our API keys are about to expire in Gong — is there anything we need to do on our end?
- I'm joining a meeting I'm not hosting and the customer wants a recording — how do I get Gong to record just this one call without turning on auto-record for everything?
- One of our reps' contacts aren't being recognized in Gong — can you check their profile settings?
- The entire Asia-Pacific team's calls aren't showing up in Gong's Upcoming Calls list — can you investigate?
- I can't log into Gong through Salesforce or Office 365 and it doesn't recognize me as a user.

**How scaleMatters responds:** scaleMatters reviews the affected user's Gong profile and workspace settings to identify misconfiguration, missing permissions, or integration gaps. For issues involving calendar sync or CRM contact matching, the team checks connector health and user-level settings in both Gong and the linked system. If the root cause points to a Gong platform bug or Beta feature behavior, scaleMatters opens and manages a support ticket directly with Gong so the client doesn't have to navigate vendor support on their own. Clients are kept informed throughout and receive clear guidance on any steps they need to take, such as regenerating API keys or adjusting recording preferences.

*When this goes to a human:* Escalate to a human scaleMatters team member if the issue affects multiple users or an entire regional team, involves API key rotation with active integrations at risk, or appears to stem from a Gong platform-side bug requiring vendor engagement.

---

## Training Request

*13 tickets across 2 service categories*

### Sales Tech Stack Training

**12 tickets** | Clients come to scaleMatters when their sales reps or ops team need hands-on training to actually use the tools that have been set up for them.

Training requests typically surface when a new team member joins, when someone missed or didn't absorb an initial onboarding session, or when a key internal champion leaves and institutional knowledge walks out the door with them. The experience often feels urgent — a rep can't connect their accounts, a team is sitting on tools they don't know how to use, or a manager realizes their whole sales team needs a refresher before a new quarter. scaleMatters steps in to schedule live sessions, record them for future reference, and walk users through the specific workflows that matter for their role — covering platforms like Salesforce, Salesloft, Gong, ZoomInfo, and Leadfeeder in combination rather than in isolation.

**Example client requests:**
- Can we schedule follow-up training for a rep who didn't fully absorb the initial Salesforce walkthrough?
- We have several new hires who need to get set up on Salesloft and Gong — can you coordinate a session?
- Our previous ops contact left the company and now our sales team needs a full tech stack refresher.
- Can someone walk me through how Contacts work in Salesforce?
- We need ZoomInfo and Leadfeeder up and running — can you help us get everything connected?

**How scaleMatters responds:** scaleMatters coordinates scheduling directly with the client contact and the relevant internal trainer or consultant, often recording sessions via Gong for future reference. Sessions are tailored to the user's role and existing familiarity — a complete beginner gets a full walkthrough while someone needing a refresher gets a targeted review. When multiple tools are involved (e.g., Salesforce plus Salesloft plus Gong), the session is sequenced so foundational tools are covered first. Internal certifications for scaleMatters staff (Gong, Salesforce Trailhead) are tracked and assigned as separate tasks with documented next steps.

*When this goes to a human:* Escalate to a human if the request involves training for an entire sales team after a staff departure, if multiple tools need to be set up and trained simultaneously, or if the client is unsure which tools they have access to — these require scoping before scheduling.

---

### Reporting & Data Customization Guidance *(catch-all / general support)*

**1 tickets** | Clients come to scaleMatters when they want to extend or customize their reports but aren't sure how to surface the data fields they need.

This type of request usually starts when a client has built a report and realizes a key field — like a contact's email address or an owner's information — isn't showing up as a column. They have a sense of what they want but aren't sure whether the data exists, how to add it, or whether they need to join related objects or tables. scaleMatters steps in to assess the report structure, identify where the missing data lives, and either walk the client through the solution or configure it directly.

**Example client requests:**
- Can you add an email address column to a report I already built?
- I want to show the assigned owner's contact info in my report — is that possible?
- I think I need to join two objects to get the data I want, but I'm not sure how to do that.
- How do I pull in fields from a related record into my existing report?

**How scaleMatters responds:** scaleMatters reviews the client's existing report setup and identifies whether the missing field is available natively or requires joining a related object. If a join or cross-object lookup is possible, scaleMatters configures it or provides step-by-step guidance tailored to the client's permission level and tool. The resolution usually includes a brief explanation so the client understands how to replicate the approach in the future.

*When this goes to a human:* Escalate to a human if the client's report involves complex multi-object joins, custom metadata, or data that may require schema changes or elevated admin access to surface.

---

## Other

*120 tickets across 9 service categories*

### Third-Party Integration Support

**40 tickets** | Clients come to scaleMatters when a tool they've added to their revenue stack needs to be connected, configured, or fixed in relation to Salesforce or another core system.

These requests typically surface when a team purchases or onboards a new tool—like a meeting scheduler, sales engagement platform, conversation intelligence tool, or document management system—and needs help getting it wired up correctly to Salesforce or other existing systems. Sometimes the integration breaks after a credential change, user swap, or system refresh, and clients need it reconnected fast. Other times the tools are technically connected but behaving unexpectedly: leads routing to the wrong rep, activities not syncing, fields not mapping, or calendar logic misfiring. scaleMatters steps in to diagnose what's wrong across the integration layer, apply fixes, and validate that data flows cleanly end to end.

**Example client requests:**
- We just bought LinkedIn Sales Navigator and set up the Salesforce integration ourselves—can you make sure we did it right?
- Our meeting scheduler is double-booking leads with two reps and confusing prospects. Can you fix the router?
- Gong calls are showing up in the conversation tool but not attaching to the opportunity in Salesforce.
- We swapped the user connected to our customer success platform and now the sync is broken—can you reconnect it?
- Outreach is pulling contacts into Salesforce from emails we didn't intend to capture. Can we change that behavior?

**How scaleMatters responds:** scaleMatters first reviews the integration configuration in both the third-party tool and Salesforce to identify the root cause—whether it's a broken authentication, misconfigured field mapping, conflicting routing logic, or a permissions issue. They coordinate with the client and sometimes the vendor's support team to apply the fix, whether that means re-authorizing credentials, updating field mappings, adjusting routing rules, or correcting user role settings. Once changes are made, scaleMatters validates the integration end to end—often by walking through a test record or scenario—before confirming resolution with the client.

*When this goes to a human:* Escalate to a human when the integration involves API credentials, OAuth tokens, or system admin access that needs to be securely transferred; when the issue requires coordination with a third-party vendor's support team; or when the broken integration is actively disrupting prospect-facing workflows like meeting booking or inbound lead routing.

---

### Miscellaneous & Administrative Requests *(catch-all / general support)*

**24 tickets** | Clients come to scaleMatters for one-off operational tasks, internal coordination, and administrative work that doesn't fit neatly into a single system or service category.

These requests surface when something falls outside the normal rhythm of a defined project — a team member needs to be onboarded or offboarded from a tool, a spreadsheet needs to be consolidated, a document needs formatting cleanup, or a new vendor is being evaluated and the client wants scaleMatters in the room. The work is often small but time-sensitive, and clients trust scaleMatters to handle it quickly without requiring a formal scoping process. scaleMatters acts as a flexible operational partner, picking up the tasks that keep day-to-day go-to-market operations running smoothly even when they don't belong to a single platform or workstream.

**Example client requests:**
- Can you help consolidate these four Google Sheets into one master file?
- We need to remove a rep from our scheduling tool but they're tied to active campaigns — can you handle that without breaking anything?
- A prospect booked a demo outside of our AE's set availability in our routing tool — can you figure out why?
- We're onboarding a new IT resource and want to clarify how service desk requests should flow to your team
- Can you help clean up and reformat our proposal document in PandaDoc?

**How scaleMatters responds:** scaleMatters triages the request to determine whether it can be handled directly or needs to be assigned to a specialist. For lightweight tasks like spreadsheet work, document formatting, or user access changes, the team completes the work asynchronously and confirms via the ticket. For coordination requests — such as clarifying how service desk routing should work or attending a vendor kickoff call — scaleMatters responds with guidance or participates as needed. Parent or master cases are sometimes created to track bundled work across multiple small tasks under a single engagement milestone.

*When this goes to a human:* Escalate to a human when the request involves deprovisioning an entire client environment, a contract termination or offboarding of scaleMatters itself, or when the scope is ambiguous enough to require a scoping call before work begins.

---

### Third-Party Integration Issues & Bugs

**11 tickets** | Clients come to scaleMatters when a tool they rely on stops syncing, importing, or firing correctly with their CRM or other stack components.

These requests typically surface when a rep or ops team member notices something missing — a record that didn't sync, an import that threw an error, a routing rule that didn't fire, or a form submission that vanished. The frustration is compounded because the error often originates in a third-party system (ZoomInfo, DocuSign, LeanData, Calendly, LinkedIn, Planhat) rather than Salesforce or HubSpot directly, making it hard to know who to call. Clients turn to scaleMatters because they need someone who can sit across the full stack, pinpoint where the handoff broke, and either fix it directly or coordinate with the vendor until it's resolved. The outcome is a restored integration, a process correction, or a configuration change that prevents the same break from recurring.

**Example client requests:**
- Our ZoomInfo imports keep throwing errors and we can't tell why — can you look into it?
- Revenue from Salesforce isn't showing up in our customer success platform and deals are missing.
- DocuSign works fine when I log in directly but keeps erroring through Salesforce.
- Meetings are being booked on the wrong rep's calendar and our routing tool isn't reassigning accounts like it should.
- LinkedIn lead form fills are coming in but work emails aren't populating in Salesforce.

**How scaleMatters responds:** scaleMatters first replicates the error and identifies which side of the integration is failing — the source tool, the destination system, or the connector itself. They review sync logs, field mappings, and configuration settings across both platforms. If the issue is on the vendor side, scaleMatters opens or escalates a support ticket with the third-party vendor and monitors resolution. If it's a misconfiguration or missing required field, they implement the fix directly and confirm records are flowing correctly before closing.

*When this goes to a human:* Escalate to a human when the issue involves a revenue discrepancy with financial implications, a vendor support ticket that has stalled without resolution, or a routing misconfiguration that is actively misassigning live deals or accounts.

---

### Uncategorized & Miscellaneous Requests *(catch-all / general support)*

**10 tickets** | Clients come to scaleMatters for requests that span onboarding setup, third-party vendor integrations, shared infrastructure provisioning, and strategic planning work that doesn't fit neatly into a single system or workflow category.

These requests often arise during early onboarding phases or when a new tool, vendor, or process is being introduced for the first time. The work can range from configuring a lead capture form for a newly contracted SDR vendor, to provisioning shared inboxes, to kicking off a full customer acquisition strategy and plan. Clients experience this as foundational or connective-tissue work — the setup and alignment steps that make everything else run. scaleMatters handles these by scoping the request, building or provisioning the relevant piece of the stack, and documenting it so the team can operate it going forward.

**Example client requests:**
- We just signed with a new SDR vendor — can you set up a form so their meeting submissions flow into our system correctly?
- We need a shared inbox for our sales and marketing team — can you get that set up?
- Can you put together our customer acquisition strategy and present it to the team?
- We want to make sure all of our tech stack is fully provisioned, implemented, and documented before we go live.
- There's a data discrepancy in our reporting — can you investigate and flag what's off?

**How scaleMatters responds:** scaleMatters first assesses whether the request maps to an existing service category or represents net-new setup work. For onboarding milestones, each provisioning, implementation, and documentation step is tracked discretely so nothing falls through the cracks. For vendor intake forms, scaleMatters replicates a proven internal form template and updates all hidden fields, lead source values, and routing logic to reflect the new vendor. Strategic deliverables like acquisition plans are developed collaboratively and presented back to the client team.

*When this goes to a human:* Requests involving full customer acquisition strategy development, multi-system onboarding planning, or data discrepancy investigations should be escalated to a human scaleMatters team member, as these require scoping conversations before work can begin.

---

### Other System Feature Enhancements & Custom Builds

**9 tickets** | Clients come to scaleMatters when they need something new built, configured, or improved across tools that don't fit neatly into a single core platform.

These requests surface when a team outgrows their current setup or realizes a gap between how their systems work and how their business actually operates. The ask might be a new integration between two platforms, a custom object to support a new process, a smarter notification in Slack, or conditional logic on a document. What unites them is that the client has a specific workflow pain or opportunity in mind and needs scaleMatters to translate that into a working technical solution. scaleMatters scopes, builds, and configures the enhancement — coordinating across tools and stakeholders until the new capability is live and doing its job.

**Example client requests:**
- Can you install and configure a new app we just contracted for and give us admin access so we can start using it?
- We need our CRM opportunity stage to sync to a field in our ERP and project management tool — can you set that up?
- Can you update our Slack GTM channel notifications to show more data fields and make certain lead types stand out visually?
- We want conditional content blocks on our quotes that automatically show different text depending on what products are included.
- Our deduplication tool keeps reassigning account ownership incorrectly when there's an open opportunity — can we revisit those merge rules?

**How scaleMatters responds:** scaleMatters receives the request — often via Slack or a submitted form — and clarifies requirements with the relevant stakeholders before scoping the build. Depending on complexity, work may move through a sandbox environment before being promoted to production. Configuration, integration mapping, and any approval steps are coordinated directly with the client's team until the enhancement is live and validated.

*When this goes to a human:* Escalate to a human when the request involves a net-new integration between systems not previously configured, a new third-party package installation with admin-level permissions, or when the client's ask spans multiple platforms and requires scoping before work can begin.

---

### User Provisioning & Access Management (Non-Salesforce)

**8 tickets** | Clients come to scaleMatters to quickly get new team members access to the right sales and revenue tools — or to remove access when someone leaves.

These requests typically arise when someone is hired, promoted, reassigned, or offboarded, and their manager or ops contact realizes the person's tool access doesn't match their current role. The ask is usually urgent and practical: get this person into Gong, Salesloft, Outreach, Chili Piper, Crossbeam, or a similar platform so they can start working, or lock down a departing employee's account. scaleMatters handles the provisioning or deactivation across whichever tools are in scope, coordinates licensing and org structure details when they're ambiguous, and flags any onboarding or training gaps that surface in the process.

**Example client requests:**
- Can you create a new user in Salesloft and Gong for our new SDR starting Monday?
- Please deactivate the account for someone who just left the team
- I need to be added as a collaborator in Gong — can you set that up?
- We have a new rep starting — can we talk through what systems they need access to?
- Can you swap one user out for another on Chili Piper?

**How scaleMatters responds:** scaleMatters receives the request with the user's name, role, and target platform(s), then provisions or deactivates the account in the relevant tool. When org structure or license type is ambiguous (e.g., which team or seat type the user belongs to), scaleMatters clarifies with the requestor before proceeding. For new hires, scaleMatters may also flag related onboarding needs such as list-building tool access or workflow training. Deactivation requests are treated as higher priority to minimize security exposure.

*When this goes to a human:* Escalate to a human if the request involves bulk user changes, uncertainty about which license tier or org structure applies, or if the request is tied to a sensitive offboarding situation requiring immediate action.

---

### General System & Tool Questions

**7 tickets** | Clients come to scaleMatters with ad hoc 'how does this work?' questions that span their entire tech stack — from lead routing and sales engagement flows to data export and system documentation.

These requests tend to surface when something unexpected happens — a lead doesn't route as expected, a record sits stuck in a queue, or a rep discovers a workflow gap mid-process. Other times, a team member simply needs to understand how to use a specific feature in a tool like Gong or ZoomInfo before they can move forward. The questions are often quick in nature but cross multiple systems (Salesforce, HubSpot, Gong, ZoomInfo, Salesloft), and clients look to scaleMatters to either explain the answer, investigate the system behavior, or confirm that a feature simply doesn't exist. scaleMatters responds by diagnosing the situation, providing clear guidance or next steps, and closing the loop — including escalating to vendors when the question lives outside the platform.

**Example client requests:**
- Why didn't this lead get routed after the prospect didn't book a meeting?
- A demo request came in yesterday but the lead never moved out of the queue — what happened?
- How do I set up an automated email in my sales engagement flow that includes a calendar link for the prospect to book time?
- Can we export our lead or contact list from Gong the way we used to do it from our previous tool?
- Is there a way to see how many companies our SDRs are uploading from ZoomInfo?

**How scaleMatters responds:** scaleMatters reviews the specific record, workflow, or platform behavior in question to diagnose what occurred or answer the question directly. For lead routing failures, the team traces automation logic and identifies the gap or exception that caused the record to stall. For feature questions, scaleMatters either provides step-by-step guidance or confirms with the vendor whether the capability exists. Questions that require documentation (e.g., current tech stack and process flows) are handled by producing or updating a reference artifact for the client team.

*When this goes to a human:* Escalate to a human if the question involves a lead routing failure tied to a live hot lead requiring immediate follow-up, or if the client is asking for a full documentation or audit of their tech stack and process flows, as that requires scoped project work rather than a quick answer.

---

### Miscellaneous & One-Off Requests *(catch-all / general support)*

**6 tickets** | Clients come to scaleMatters for ad-hoc questions, quick troubleshooting, and requests that don't fit neatly into a defined workflow or system category.

These requests tend to surface when something unexpected comes up in day-to-day operations — an integration behaves oddly, a team member needs a quick answer before acting, or a process needs to be documented somewhere official. Clients often reach out informally, sometimes via Slack or a short message, to sanity-check an approach or get unstuck fast. scaleMatters steps in to clarify, investigate, coordinate across systems like Salesforce, NetSuite, Celigo, or ZoomInfo, and either resolve the issue directly or point to the right next step.

**Example client requests:**
- Can you help me figure out why ZoomInfo exports keep throwing an error when I push records to Salesforce?
- We need to handle multiple subsidiary values in our NetSuite integration — is that something Celigo can manage automatically?
- I want to request intent data through ZoomInfo but I'm not sure if it will cause issues or add costs — can you check?
- We need to document our key revenue processes as part of a blueprint deliverable — can you help organize and house that?
- Our OpenAir billing rule integration is misfiring because of how we're triggering the Celigo flow — can you fix the logic?

**How scaleMatters responds:** scaleMatters reviews the request to understand the underlying need, which may involve checking integration logic, verifying tool configurations, or consulting with the relevant system owner. For technical issues like misfiring Celigo flows or export errors, the team diagnoses root cause, implements a fix, and promotes it to production. For informational or documentation requests, scaleMatters gathers the relevant inputs and organizes or delivers the output in the agreed location or format.

*When this goes to a human:* Escalate to a human if the request involves a multi-system integration failure affecting live data, potential billing or subscription changes with a vendor, or if the client is unsure whether acting on something could break a production workflow.

---

### Reporting & Dashboard Help (Cross-System)

**5 tickets** | Clients come to scaleMatters when they need visibility across their tech stack — usage data, cost allocation, and performance metrics that span Salesforce, Salesloft, Gong, and other tools.

These requests typically arise around recurring business events: annual renewals, board meetings, regional cost allocation cycles, or new stakeholder onboarding. Clients often need a consolidated view that doesn't exist natively in any single tool — for example, license utilization across multiple platforms broken down by region, or pipeline and marketing performance metrics formatted for executive or board-level audiences. scaleMatters responds by pulling the relevant data from each system, assembling it into a usable format (often a Google Sheet, scheduled export, or dashboard), and delivering it in time for the business event that triggered the request.

**Example client requests:**
- Can you give me the usual license usage breakdown across our tools so we can allocate costs by region for renewal?
- We need a board dashboard showing sales rep performance, team performance, and marketing lead volume and quality.
- Can you pull the tech stack usage data for this calendar year across all our platforms?
- Can you set up a weekly scheduled export of a specific case subset for one of our regional leads?
- We need a cost-per-user report across all of our licenses — Salesforce, sales engagement, and conversation intelligence.

**How scaleMatters responds:** scaleMatters identifies which systems hold the relevant data (commonly Salesforce, Salesloft, and Gong) and pulls usage, license, or performance metrics from each. The data is consolidated into a delivery format appropriate to the audience — a shared spreadsheet, a scheduled export, or a Salesforce dashboard — and validated against known license counts or benchmarks before delivery. For recurring needs like annual renewal summaries or weekly exports, scaleMatters sets up repeatable processes so the client doesn't have to re-request the same data each cycle.

*When this goes to a human:* Escalate to a human when the request involves custom dashboard architecture, multi-system data modeling, or metrics that require alignment with finance or executive stakeholders on definitions and scope.

---

## Side-by-Side Competitor Comparison

*Compiled from market landscape research on the RevOps/GTM services space. This is a reference for understanding scaleMatters' position relative to the broader market — not a claim about specific deals or head-to-head encounters. Company descriptions reflect how each organization positions itself publicly; where the source research only described a group of firms collectively (no individual differentiation available), they are listed together rather than given invented distinctions.*

### The Problem scaleMatters Solves

The most common trigger for a new scaleMatters engagement: a new CRO, CMO, or CFO gets hired and inherits a GTM tech stack nobody fully trusts — CRM data that doesn't match reality, metrics that mean different things to different teams, marketing campaigns and sales pipeline that can't be connected, and system sprawl nobody wants to touch for fear of breaking something. scaleMatters calls this moment **"The GTM Reckoning"** — the point where a new leader realizes their reporting problem is actually a system problem. scaleMatters rebuilds the underlying systems, process, and data foundation so that leader has a real shot at succeeding in the role, and the company has a better shot at growing and retaining customers — because decisions are finally being made on data that holds up.

### How scaleMatters is different, in one paragraph

Most of the market below falls into one of two shapes: **project-based implementers** who deploy a platform and hand it off, or **software platforms** that sell a tool and expect the client's team to run it. Many "RevOps" firms also operate as sales-ops specialists in disguise — optimizing pipeline and forecasting for the sales team while marketing, customer success, and finance keep working off separate, disconnected numbers. scaleMatters is built differently on both counts: an embedded, cross-functional RevOps team — one foundation that Marketing, Sales, Customer Success, and Finance all trust — billed on flexible monthly capacity (not fixed SOWs), working across a client's *entire* stack (CRM, marketing automation, sales engagement, conversational intelligence) rather than a single platform silo. scaleMatters does not sell a proprietary software product; it works inside the client's existing tools rather than asking them to adopt a new one.

**The clearest evidence of the difference is retention, not features.** scaleMatters has spent 7 years exclusively serving B2B tech companies. Client relationships average 3+ years, client retention runs at 82%, and 75% of new business comes from referrals. Those numbers are difficult for project-based or software-only competitors to match, because they aren't structured around a multi-year embedded relationship in the first place — a client that trusts scaleMatters enough to stay for years, and to refer their peers, is a different kind of proof point than a feature list.

**Security and compliance are also a differentiator.** scaleMatters is SOC 2 certified, requiring rigorous data security and privacy standards across the organization and every team member — not a self-reported policy. scaleMatters works with a number of clients in regulated or sensitive industries (cybersecurity, FP&A, laboratory/life-sciences environments among them), where this level of security discipline is a baseline requirement, not a nice-to-have.

### Category A — Elite Platform-Specialist Partners

Firms that have earned top-tier partner status with a single platform (HubSpot or Salesforce) and compete on certification depth within that ecosystem.

| Organization | Core Focus | Primary Platform(s) |
|---|---|---|
| RevPartners | RevOps as a Service; only firm globally with both HubSpot Elite Solutions Partner and Clay Elite Studio Partner status | HubSpot, Clay |
| New Breed | HubSpot Elite Solutions Partner; 3x NA Partner of the Year; all 8 HubSpot accreditations | HubSpot |
| Aptitude 8 | Mid-market HubSpot specialist: advanced portal configs, shared pipeline definitions, dashboards | HubSpot |
| MergeYourData | Ranked #1 RevOps agency by verified client outcomes for mid-market transformations | HubSpot |
| Six and Flow | 10+ years aligning sales/marketing through HubSpot implementations | HubSpot |
| Cerebria Tech | Boutique, singularly focused on Salesforce architecture and technical-debt remediation for B2B SaaS | Salesforce |
| Salesforce Professional Services | Salesforce's own team; handles the most complex enterprise rollouts, custom Apex, large migrations | Salesforce |
| Operatus | Deep technical optimization via Salesforce CPQ consulting and MuleSoft integrations | Salesforce |
| Coastal Cloud | Enterprise Salesforce implementations, multi-cloud transformation, Zero-Copy data federation | Salesforce, Snowflake, Databricks |
| DemandBlue | On-demand Salesforce services, CPQ and Service Cloud deployments | Salesforce |
| Diabsolut | Field service optimization, higher-ed solutions, Revenue Cloud implementations | Salesforce |
| Salesforce Consultants / CUBE84 / Torrent | Standard-to-enterprise Salesforce deployments, managed services, custom object design | Salesforce |

**How scaleMatters differs:** These firms compete on certification depth within one ecosystem. scaleMatters' ticket history shows deep Salesforce expertise (89% of volume) *plus* real, sustained work in HubSpot, sales engagement, and marketing automation — a client doesn't need a second vendor when their stack spans more than one platform.

### Category B — Fractional RevOps / Ops-as-a-Service

Firms using a similar "embedded team, flexible billing" model to scaleMatters' own Embedded RevOps tier.

| Organization | Core Focus | Primary Platform(s) |
|---|---|---|
| SaaScend | Fractional ops for SaaS/Service/B2B Tech scaling past $5M ARR; uniquely bridges GTM software with IT hardware and cybersecurity (HPE, Aruba, VMware) | Salesforce, Microsoft |
| Kicksaw | "Fractional Operations" in dedicated pods, month-to-month billing, explicitly rejects rigid SOWs | Salesforce (Agentforce, Data Cloud, Revenue Cloud), HubSpot |
| CS2 Marketing | Embedded full-stack GTM ops teams; targets "Pipeline Blindness"; uses Clay for AI-powered data enrichment | Marketo, HubSpot, Salesforce, 6sense |
| MAN Digital | RevOps/MOPs consultancy connecting HubSpot to heavy enterprise systems (ERP, Zuora, Stripe) | HubSpot, SAP, Microsoft Dynamics 365 |
| Lane Four | Salesforce-native lead routing, territory design, opportunity ownership audits | Salesforce |
| Candybox | Dual-CRM architecture, fixing HubSpot-to-Salesforce routing breaks, attribution modeling | HubSpot, Salesforce, Chili Piper |
| Skydog / Skydog Ops | High-communication CRM implementations, marketing-to-sales alignment | Salesforce, HubSpot |
| CloudKettle | Salesforce ecosystem optimization, marketing automation infrastructure | Salesforce, Marketing Cloud |
| OPFOCUS | SaaS growth consultancy: CPQ, billing, quoting, executive advisory for high-growth tech | Salesforce CPQ, Revenue Cloud |
| MassEngines | B2B marketing operations, funnel optimization, lead management design | Oracle Eloqua, Marketo, Salesforce |
| Lean Layer | Deep technical architecture, system design, data governance at scale | Advanced Salesforce, data warehouses |
| Domestique | AI-augmented, full-stack RevOps agency, positions as physically executing technical implementations | Not specified |
| dimartec | Builds integrated "Revenue Engines" for post-PMF SaaS/fintech, tightly integrating RevOps with paid media/CRO | Not specified |

**How scaleMatters differs:** This is the most structurally similar category — the fractional, embedded-team billing model is the same shape scaleMatters uses in its Embedded RevOps tier. The differentiator here is track record: 82% client retention, multi-year average engagements, and 75% of new business from referrals — evidence of sustained trust rather than a methodology pitch.

### Category C — Marketing & Sales Strategy Agencies

Firms focused on strategy, creative, or outsourced headcount rather than hands-on system administration.

| Organization | Core Focus |
|---|---|
| The Pedowitz Group | Revenue marketing transformation, martech stack optimization, marketing automation strategy |
| Winning by Design | B2B sales methodology design, recurring revenue architecture, sales coaching (CRM-agnostic) |
| The Alexander Group, Darwinian Ventures, SmartAcre, Bubblebox, NextActiv | Demand generation, inbound marketing, creative campaign execution |
| MarketStar, Regalix, Concept, mcalign, Sales Optimizer, Skaled | Sales enablement, outsourced SDR/BDR services, conversion-rate optimization |

**How scaleMatters differs:** scaleMatters doesn't run outsourced sales headcount or marketing creative/demand-gen campaigns — it's a technical execution partner for the systems those functions run on, not a replacement for the functions themselves.

### Category D — Data, IT & Digital Transformation Consultants

Enterprise-scale firms where GTM systems are one piece of a broader IT/data transformation mandate.

| Organization | Core Focus | Primary Platform(s) |
|---|---|---|
| Atrium | Predictive analytics, AI implementation, enterprise data strategy | Salesforce Einstein, Tableau, Snowflake, AWS |
| Centric Consulting | Digital transformation, enterprise architecture, IT strategy | Microsoft Azure, AWS, ERPs |
| Spaulding Ridge | Enterprise cloud integration, revenue lifecycle management, connected planning | Anaplan, Salesforce, Snowflake |
| Argano Partners, Streamforce Solutions, West Coast Consulting, Digital Transformation | ERP, supply chain optimization, commerce cloud, billing/finance integration | SAP, Oracle, Microsoft Dynamics |

**How scaleMatters differs:** These firms treat GTM systems as a subset of enterprise IT. scaleMatters is GTM-native and revenue-focused specifically — not an ERP or infrastructure vendor.

### Category E — Autonomous AI & GTM Engineering Platforms

Software products (not services firms) that automate parts of the GTM motion directly.

| Organization | Core Focus |
|---|---|
| Artisan | Autonomous AI BDR ("Ava") that monitors signals and writes personalized outreach |
| Revenue.io | Salesforce-native conversation intelligence, real-time coaching, AI deal insights |
| Clari | Forecast accuracy and algorithmic pipeline inspection |
| TigerEye | AI GTM analytics platform; "Time Warp" historical CRM snapshots, Monte Carlo simulation |
| Passetto | Continuous marketing measurement via Model Context Protocol / LLM querying |
| Anfloy / The GTM Engineering Co. | AI-powered GTM infrastructure, custom AI agents, data pipeline architecture |
| Reachly, ColdIQ, FullFunnel | Signal-based outbound campaign execution (Clay, Smartlead, HeyReach-powered) |

**How scaleMatters differs:** These are software products a client's team must adopt and operate. scaleMatters is a services team that configures, maintains, and troubleshoots the client's existing stack — including tools like these, if the client already uses them.

### Category F — Long-Tail Generalist Consultancies

Firms the source research grouped together with a shared profile — staff augmentation, CRM administration, fractional RevOps, and process mapping on a standard GTM stack (Salesforce, HubSpot, Marketo, Outreach, Salesloft, ZoomInfo, Chili Piper, LeanData) — without individual distinguishing detail available:

Delegate, SalesLabX, Nebula Consulting, Admin Within, Caribiner Group, Hyperscayle, Iceberg RevOps, Skyvenn, Union Square, Cloud Connex, Think RevOps, Strong CRM, Cloud Trailz, Bluewave, Alternative Partners, Fast Slow Motion, FullFunnel, Marketing Automation Canada, Brainsell, Go Nimbly, The Obo Group, SalesOps.io, Atomic Revenue, Cortado Group, Salesdock, Measured Results Marketing, GNW Consulting, House of Revenue, Amplify, RevPal, Unicorn Revenue Operations, Vetrus Solutions, Revenue Ops LLC, RevOps Global.

---

## What We Don't Do

scaleMatters is a hands-on RevOps services team. To be clear about scope:

- **We don't sell a proprietary software product.** scaleMatters previously offered a GTM analytics platform; that product is no longer part of the business. Today the team works entirely inside the client's *existing* tools (Salesforce, HubSpot, sales engagement platforms, etc.) rather than asking clients to adopt a new one.
- **We don't do IT infrastructure, hardware, networking, or cybersecurity.** That's a different discipline from GTM systems work.
- **We don't do enterprise ERP, supply chain, or finance-system implementations** (SAP, Oracle, Microsoft Dynamics, and similar). Our systems focus is revenue/GTM, not back-office enterprise IT.
- **We don't provide outsourced SDR/BDR headcount or sales execution services.** We build and maintain the systems sales teams use; we don't staff the sales team itself.
- **We don't run demand-generation, creative, or paid media campaigns.** That's marketing agency work, distinct from the marketing *operations* (systems, automation, data) we do handle.
- **We don't build or sell autonomous AI agents as a commercial product** (e.g., an AI BDR). We do use AI internally to power tools like this chat widget, and we help clients configure AI-adjacent tools already in their stack, but that's not our product line.
- **We don't offer legal, financial, or compliance advice.** For anything touching data privacy regulation, financial reporting standards, or contract law, we'll point you to the right kind of advisor.
- **We don't guarantee specific timelines or ROI in an initial conversation.** Every environment is different; we scope real timelines and outcomes after a technical audit, not before one.
- **We don't fit every problem.** If what you're describing doesn't map to a RevOps/CRM/GTM systems need, we'll say so rather than stretch to fit.