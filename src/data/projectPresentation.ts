export const projectPresentation = {
  'shader-studio': {
    category: 'Creative tools',
    categoryClass: 'creative',
    image: '/images/projects/project-shader-studio.png',
    mobileImage: '/images/projects/shader-studio-mobile-portrait.png',
    imageWidth: 1600,
    imageHeight: 900,
    mobileImageWidth: 1170,
    mobileImageHeight: 1992,
    alt: 'Shader Studio interface with a live pink shader preview between media and export controls',
    caption: 'Shader preview',
  },
  'measure-coffee': {
    category: 'Product engineering',
    categoryClass: 'engineering',
    image: '/images/projects/project-measure-coffee.png',
    mobileImage: '/images/projects/measure-coffee-mobile-portrait.png',
    imageWidth: 1600,
    imageHeight: 900,
    mobileImageWidth: 1170,
    mobileImageHeight: 1992,
    alt: 'measure.coffee homepage with coffee setup guidance over a hand-drawn brewer',
    caption: 'Coffee profile',
  },
  'california-storm': {
    category: 'Product design',
    categoryClass: 'design',
    image: '/images/projects/project-california-storm.png',
    mobileImage: '/images/projects/california-storm-mobile-portrait.png',
    imageWidth: 1600,
    imageHeight: 900,
    mobileImageWidth: 1170,
    mobileImageHeight: 1992,
    alt: 'California Storm case study page with bold white and yellow headings on a dark blue background',
    caption: 'California Storm homepage',
  },
} as const;

export function getProjectPresentation(projectId: string) {
  return projectPresentation[projectId as keyof typeof projectPresentation];
}
