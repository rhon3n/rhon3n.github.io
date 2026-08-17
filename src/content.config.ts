import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { experienceSchema, projectSchema } from './lib/content';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: projectSchema,
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: experienceSchema,
});

export const collections = { projects, experience };
