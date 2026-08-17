export type ContributionStat = {
  value: string;
  label: string;
  context: string;
};

export const publicGitHubSnapshot = {
  id: 'public-github-activity',
  eyebrow: '02 · Individual contributor',
  heading: 'Code leaves a trail.',
  description:
    'A dated public activity snapshot keeps the engineering proof direct and verifiable.',
  sourceLabel: 'Public GitHub snapshot',
  windowLabel: '10 AUG 2025–16 AUG 2026 · UPDATED 16 AUG 2026',
  sourceUrl: 'https://github.com/rhon3n',
  sourceText: 'github.com/rhon3n',
  ariaLabel: 'Public GitHub contribution statistics',
  stats: [
    { value: '709', label: 'Contributions', context: 'Recorded activity' },
    { value: '72%', label: 'Commits', context: 'Activity mix' },
    { value: '26%', label: 'Pull requests', context: 'Activity mix' },
    { value: '9', label: 'Repositories', context: 'Contributed to' },
    { value: '24', label: 'Public repos', context: 'Profile total' },
  ] satisfies ContributionStat[],
};

export const measurePrivateSnapshot = {
  id: 'measure-repository-activity',
  eyebrow: 'Private engineering record',
  heading: 'The build has receipts.',
  description:
    'Aggregate owner activity from local private-repository history, published without exposing code, branches, or collaborators.',
  sourceLabel: 'Measure private repositories',
  windowLabel: '16 AUG 2025–10 JUN 2026 · SNAPSHOT 16 AUG 2026',
  sourceText: 'Owner-authored commits only',
  ariaLabel: 'Measure private repository statistics',
  stats: [
    { value: '633', label: 'Owner commits', context: 'Three repositories' },
    { value: '3', label: 'Private repos', context: 'Local history' },
    { value: '3', label: 'Active months', context: 'Recorded window' },
    { value: '464', label: 'App commits', context: 'Largest repository' },
    { value: '155', label: 'Web commits', context: 'Product repository' },
    {
      value: '14',
      label: 'Intelligence commits',
      context: 'Guidance repository',
    },
  ] satisfies ContributionStat[],
};
