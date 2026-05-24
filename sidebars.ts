import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  courseSidebar: [
    'index',
    'course-overview',
    'implementation-architecture',
    {
      type: 'category',
      label: 'Core Modules',
      collapsed: false,
      items: [
        'modules/01-strategic-initiation-governance',
        'modules/02-defender-cloud-posture',
        'modules/03-workload-protection',
        'modules/04-ai-security-identity',
        'modules/05-remediation-operations',
        'modules/06-live-environment-review',
      ],
    },
    {
      type: 'category',
      label: 'Labs',
      collapsed: false,
      items: [
        'labs/lab-01-defender-for-cloud-onboarding',
        'labs/lab-02-cspm-risk-prioritization',
        'labs/lab-03-workload-protection-plans',
        'labs/lab-04-ai-security-controls',
      ],
    },
    {
      type: 'category',
      label: 'Assessments',
      collapsed: false,
      items: [
        'assessments/knowledge-check',
        'assessments/capstone-scenario',
      ],
    },
    {
      type: 'category',
      label: 'Instructor Resources',
      collapsed: true,
      items: [
        'instructor/prep-guide',
        'instructor/agenda',
      ],
    },
    'learner-path',
    'references',
  ],
};

export default sidebars;
