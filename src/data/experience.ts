import type { Experience } from '@/types/content'

export const experience: Experience[] = [
  {
    company: 'Tech Mahindra',
    client: 'Microsoft Xbox',
    role: 'Associate AI Engineer',
    note: 'Promoted from Associate Software Engineer',
    period: 'Aug 2026 – Present',
    stack: [
      'Python',
      'C#',
      '.NET Framework',
      'Playwright',
      'Azure OpenAI',
      'LLM Agents',
      'Azure DevOps',
    ],
    highlights: [
      'Leading AI-driven automation strategy for large-scale legacy Xbox .NET applications — assessing architecture, testing patterns, and dev workflows to identify and prioritise the highest-ROI automation opportunities across the Xbox engineering org.',
      'Designing and prototyping Playwright end-to-end test frameworks and coverage matrices for complex enterprise Xbox applications, establishing modern testing foundations on legacy codebases.',
      'Translating Xbox engineering requirements into LLM-backed automation proposals and proof-of-concepts — owning the full cycle from business problem to working prototype.',
      'Designing and validating AI-powered automation solutions that reduce manual QA effort, improve release velocity, and accelerate operational workflows at enterprise scale.',
    ],
  },
  {
    company: 'Tech Mahindra',
    client: 'Microsoft',
    role: 'Associate Software Engineer',
    period: 'Nov 2024 – Aug 2026',
    stack: [
      'Python',
      'C# .NET Core',
      'MCP',
      'LLM Agents',
      'Azure DevOps REST APIs',
      'Plugin Architecture',
    ],
    highlights: [
      'Built a plugin-based AI control plane that converts natural-language engineering specs into federated Azure DevOps test plans — eliminating hours of manual test authoring per release cycle and measurably accelerating team productivity.',
      'Designed a dual-surface architecture pairing a conversational LLM agent (custom agent profile, skill manifests, MCP STDIO server) with a deterministic headless execution engine — keeping LLM output on the user side of the trust boundary.',
      'Authored a test-engine-agnostic plugin contract bounding onboarding of any future execution tool to a single new plugin, plus an org-wide agent-customization blueprint covering agent profiles, skill schemas, and MCP registration.',
      'Shipped a production GitHub CLI AI agent and C# .NET Core RESTful APIs with TDD and Git-based CI/CD pipelines; drove end-to-end traceability across 100+ test scenarios.',
      'Enforced security-by-construction: deny-by-default egress, policy-as-code authorization allowlists, SSO-only credentials, redacted append-only audit trails, and confirmation guards on every mutating operation.',
      'Reduced engineer onboarding effort by ~40% through automated test plan scaffolding and standardized documentation workflows.',
    ],
  },
]
