# Student Manual: Microsoft Defender for AI Services

**Course context:** CESE323 ERC1.0 — Cloud Security Envisioning & Strategy  
**Topic:** Monitoring and protecting Gen-AI workloads against unique threats

## Learning outcomes

By the end of this module, students should be able to:

- Explain why prompts, model responses, grounding data, tools, identities, and APIs are part of the AI attack surface.
- Describe the Defender for Cloud workflow: **Discover → Harden → Detect → Investigate**.
- Recognize AI threat signals such as prompt injection, jailbreak attempts, data leakage, data poisoning, credential exposure, tool misuse, and unsafe model behavior.
- Enable Defender for AI Services and understand optional settings such as prompt evidence, Purview data security integration, and AI model security.
- Design a secure implementation pattern using Microsoft Entra ID, managed identities, least privilege, private access, Prompt Shields, Purview, Defender XDR, and secure DevSecOps practices.

---

## 1. Operating model

| Stage | Purpose | Student outcome |
|---|---|---|
| Discover | Find AI assets, endpoints, model deployments, agents, identities, data sources, and exposure. | Students can identify which AI resources exist and whether they are protected. |
| Harden | Apply CSPM recommendations, least privilege, data controls, network restrictions, and guardrails. | Students can prioritize remediation actions. |
| Detect | Monitor runtime activity, suspicious prompts, jailbreak attempts, leakage, credential exposure, and anomalous usage. | Students can recognize AI-specific alert types. |
| Investigate | Triage alerts, review evidence, identify affected identities/resources, contain risk, and document remediation. | Students can use Defender for Cloud and Microsoft Defender XDR to investigate AI workload incidents. |

---

## 2. Core Gen-AI threat signals

### Prompt injection / jailbreak
Attempts to override instructions, bypass safety controls, reveal hidden prompts, or force unsafe output.

### Indirect prompt injection
Malicious instructions hidden in external documents, webpages, emails, or retrieved RAG content.

### Data leakage
Sensitive information appears in prompts, retrieved context, model responses, logs, or alert evidence.

### Data poisoning
Training, fine-tuning, evaluation, model registry, or grounding data is tampered with to alter model behavior.

### Credential and tool misuse
An AI application or agent has excessive permissions and is manipulated into calling APIs, accessing secrets, or performing unauthorized actions.

### Unsafe model behavior
The model produces harmful, policy-violating, anomalous, or operationally dangerous output.

---

## 3. Defender for AI Services capability summary

| Capability | What it provides | Operational value |
|---|---|---|
| AI threat protection | Runtime alerts for AI-specific threats such as prompt attacks, data leakage, credential exposure, and anomalous API activity. | Gives the SOC visibility into Gen-AI-specific behavior. |
| Prompt evidence | Suspicious prompt/response snippets in alerts where enabled. | Helps analysts understand attacker intent and model behavior. |
| Defender XDR integration | Centralizes AI workload alerts with identity, endpoint, app, and cloud signals. | Supports end-to-end incident investigation. |
| Data and AI dashboard | Unified view of data/AI resources, protection status, recommendations, and exposure. | Helps prioritize risk remediation. |
| AI security posture management | Discovers AI assets and identifies configuration, identity, data, and exposure risks. | Reduces exposure before runtime attacks occur. |
| Purview integration | Extends data governance, DLP, audit, DSPM for AI, and compliance workflows where licensed. | Supports AI data protection and compliance. |

---

## 4. Implementation prerequisites

- Azure subscription.
- Microsoft Defender for Cloud enabled.
- Owner or Contributor permissions to enable the AI services plan.
- Lab or approved customer AI workload.
- Microsoft.Security resource provider registered.
- Synthetic prompts only; no real customer, personal, confidential, regulated, or secret data.
- Budget approval and cleanup plan for paid Defender/Purview features.

---

## 5. Enable Defender for AI Services

1. Sign in to the Azure portal.
2. Search for **Microsoft Defender for Cloud**.
3. Select **Environment settings**.
4. Select the relevant subscription.
5. On the Defender plans page, toggle **AI services** to **On**.
6. Open **AI services > Settings**.
7. Review optional components:
   - Suspicious prompt evidence.
   - Data security for AI interactions with Microsoft Purview.
   - AI model security.
8. Save/continue.
9. Validate the Data and AI dashboard, CSPM recommendations, alerts, and Defender XDR incident visibility.

---

## 6. Baseline secure architecture

| Layer | Baseline control | Example |
|---|---|---|
| Identity | Use Microsoft Entra ID and managed identities. | Avoid embedded API keys and broad shared secrets. |
| Authorization | Apply least privilege. | Scope roles to project/workspace/resource/data level. |
| Network | Reduce public exposure. | Use private endpoints and trusted network access where feasible. |
| Input controls | Detect prompt attacks. | Use Prompt Shields, content filters, and Foundry guardrails. |
| Output controls | Validate responses. | Use schema validation, allowlists, encoding, and human review for high-risk actions. |
| Data governance | Classify and protect data. | Use Purview labels, DLP, audit, DSPM for AI, and eDiscovery. |
| Monitoring | Enable security visibility. | Use Defender for AI Services, Defender XDR, Azure Monitor, and Sentinel where required. |
| DevSecOps | Test before release. | Threat model prompts, RAG sources, tools, identities, and red-team cases. |

---

## 7. Secure RAG pattern

- Ingest only approved sources.
- Track owner, classification, lineage, and expiry metadata.
- Scan documents for malware, secrets, sensitive data, and hidden prompt instructions.
- Preserve source references and sensitivity metadata during chunking.
- Filter retrieval results by user access rights.
- Treat retrieved text as untrusted data.
- Validate output before display or downstream execution.
- Log correlation IDs, source IDs, model deployment, and content-filter results without overlogging sensitive content.

---

## 8. SOC investigation flow

1. Confirm alert type, severity, resource, model deployment, subscription, and time window.
2. Identify user, workload identity, service principal, agent identity, source IP, application, and API path.
3. Review evidence only as required.
4. Determine whether the event was blocked or detected only.
5. Correlate in Microsoft Defender XDR.
6. Contain risk by restricting the endpoint, identity, tool, API key, or retrieval source.
7. Remediate RBAC, guardrails, prompt templates, network paths, data sources, or monitoring.
8. Add regression tests and update the AI security playbook.

---

## 9. Troubleshooting quick reference

| Symptom | Likely cause | Action |
|---|---|---|
| AI services toggle missing | Wrong subscription, unsupported scope, or insufficient permissions. | Confirm tenant, subscription, permissions, and support matrix. |
| Cannot enable plan | Missing Owner/Contributor permissions. | Ask subscription owner to assign proper role or enable the plan. |
| Dashboard empty | Discovery delay, no supported resources, missing provider, or missing plan. | Verify resource provider, plan status, supported resources, and permissions. |
| No alerts during testing | Unsupported scenario/model, detection delay, or guardrail settings. | Use approved sample alert scenarios and validate current docs. |
| Prompt evidence masked | Prompt evidence disabled or restricted. | Enable only with governance approval. |
| Purview has no AI interaction data | Purview prerequisites, licensing, user context, or collection delay. | Validate Purview setup and allow collection time. |

---

## 10. Final student takeaway

AI security is a control system, not a single product toggle. Use Defender for Cloud to discover, harden, detect, and investigate. Use Entra to constrain identities. Use Purview to govern data. Use Prompt Shields and guardrails to reduce prompt attack risk. Use secure architecture to limit what a compromised prompt or model response can do.
