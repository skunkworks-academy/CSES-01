import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  courseSidebar: [
    'index',
    'course-overview',
    'learner-path',
    'implementation-architecture',

    {
      type: 'category',
      label: 'Course Modules',
      collapsed: false,
      items: [
        'modules/strategic-initiation-governance',
        'modules/defender-cloud-posture',
        'modules/workload-protection',
        'modules/ai-security-identity',
        'modules/remediation-operations',
        'modules/live-environment-review',
      ],
    },

    {
      type: 'category',
      label: 'Hands-on Labs',
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
      collapsed: false,
      items: [
        'instructor/agenda',
        'instructor/prep-guide',
      ],
    },

    'references',
  ],
};

export default sidebars;
