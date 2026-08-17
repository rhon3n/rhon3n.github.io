export const projectPresentation = {
  'shader-studio': {
    category: 'Creative tools',
    categoryClass: 'creative',
    image: '/images/projects/project-shader-studio.png',
    alt: 'Shader Studio interface with a live pink shader preview between media and export controls',
    caption: 'Live interface / shader preview',
  },
  'measure-coffee': {
    category: 'Product engineering',
    categoryClass: 'engineering',
    image: '/images/projects/project-measure-coffee.png',
    alt: 'measure.coffee homepage with coffee setup guidance over a hand-drawn brewer',
    caption: 'Live product / coffee profile',
  },
  'california-storm': {
    category: 'Product design',
    categoryClass: 'design',
    image: '/images/projects/project-california-storm.png',
    alt: 'California Storm homepage with youth basketball players and the Storm wordmark',
    caption: 'Live preview / California Storm',
  },
} as const;

export function getProjectPresentation(projectId: string) {
  return projectPresentation[projectId as keyof typeof projectPresentation];
}
