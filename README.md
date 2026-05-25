# CSES-01 â€” Cloud Security Envisioning & Strategy

[![Course Portal](https://img.shields.io/badge/Course%20Portal-GitHub%20Pages-0078D4?logo=githubpages&logoColor=white)](https://skunkworks-academy.github.io/CSES-01/)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-2E8555?logo=docusaurus&logoColor=white)](https://docusaurus.io/)
[![Microsoft Defender for Cloud](https://img.shields.io/badge/Microsoft-Defender%20for%20Cloud-0078D4?logo=microsoftazure&logoColor=white)](https://learn.microsoft.com/en-us/azure/defender-for-cloud/)
[![Microsoft Entra](https://img.shields.io/badge/Microsoft-Entra-0078D4?logo=microsoft&logoColor=white)](https://learn.microsoft.com/en-us/entra/)
[![Microsoft Learn Collection](https://img.shields.io/badge/Microsoft%20Learn-Collection-5E5E5E?logo=microsoft&logoColor=white)](https://learn.microsoft.com/en-us/collections/qrx3iqtkpwee6g?source=docs&sharingId=6319874F856A7FF8)

> **CSES-01** is a self-paced, GitHub-hosted courseware portal for the **Cloud Security Envisioning & Strategy** workshop. It converts a one-day instructor-led envisioning workshop into a structured digital learning experience with modules, labs, knowledge checks, and reusable instructor resources.

---

## Why Docusaurus?

This repo uses **Docusaurus** because it is well suited to Microsoft Learn-style courseware:

- Markdown and MDX authoring
- Sidebar navigation and document hierarchy
- Mermaid architecture diagrams
- Rich callout/admonition blocks
- GitHub Pages deployment
- Versionable courseware content
- Easy contribution workflow through GitHub pull requests

---

## Course focus

The course aligns to Microsoft cloud security strategy, governance, posture management, workload protection, AI security, and practical Defender for Cloud implementation.

```mermaid
flowchart LR
    A[Strategy & Governance] --> B[Unified Visibility]
    B --> C[CSPM Risk Prioritization]
    C --> D[Workload Protection]
    D --> E[AI Security Controls]
    E --> F[Remediation & Operational Review]
```

---

## Repository structure

```text
CSES-01/
â”œâ”€â”€ docs/
â”‚   â”œâ”€â”€ index.mdx
â”‚   â”œâ”€â”€ course-overview.mdx
â”‚   â”œâ”€â”€ implementation-architecture.mdx
â”‚   â”œâ”€â”€ modules/
â”‚   â”œâ”€â”€ labs/
â”‚   â”œâ”€â”€ assessments/
â”‚   â””â”€â”€ instructor/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/
â”‚   â””â”€â”€ css/
â”œâ”€â”€ static/
â”‚   â””â”€â”€ img/
â”œâ”€â”€ .github/
â”‚   â””â”€â”€ workflows/deploy.yml
â”œâ”€â”€ docusaurus.config.ts
â”œâ”€â”€ sidebars.ts
â””â”€â”€ package.json
```

---

## Quick start

```bash
gh repo clone skunkworks-academy/CSES-01
cd CSES-01

npm install
npm run start
```

Open the local development server:

```text
http://localhost:3000/CSES-01/
```

---

## Build and deploy

```bash
npm run build
npm run serve
```

Deployment is configured through GitHub Actions in:

```text
.github/workflows/deploy.yml
```

After the first successful deployment, enable GitHub Pages in the repository settings:

```text
Settings â†’ Pages â†’ Source â†’ GitHub Actions
```

---

## Courseware backlog

| Item | Status | Owner |
|---|---:|---|
| Course overview | Started | Skunkworks Academy |
| One-day agenda | Started | Skunkworks Academy |
| Self-paced learning path | Started | Skunkworks Academy |
| Student lab guide | Drafted | Skunkworks Academy |
| Instructor prep guide | Drafted | Skunkworks Academy |
| Knowledge assessment | Drafted | Skunkworks Academy |
| GitHub Pages deployment | Configured | Skunkworks Academy |

---

## Source collection

Primary Microsoft Learn collection:

- [Cloud Security Envisioning & Strategy Workshop Syllabus â€” Microsoft Learn Collection](https://learn.microsoft.com/en-us/collections/qrx3iqtkpwee6g?source=docs&sharingId=6319874F856A7FF8)

Supporting topic areas:

- [Microsoft Defender for Cloud documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/)
- [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/)
- [Microsoft Sentinel documentation](https://learn.microsoft.com/en-us/azure/sentinel/)
- [Microsoft Purview documentation](https://learn.microsoft.com/en-us/purview/)
- [Microsoft Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/)
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/)

---

## License

Internal training content for Skunkworks Academy unless otherwise specified. Microsoft product names and links are used for training reference purposes.

