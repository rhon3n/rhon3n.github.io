import { describe, expect, it } from 'vitest';
import {
  experienceSchema,
  projectSchema,
  sortByDate,
} from '../../src/lib/content';

const validProject = {
  title: 'Shader Studio',
  summary: 'A browser-based creative tool.',
  publishedAt: new Date('2026-01-01'),
  role: 'Creator',
  tags: ['WebGL2'],
  featured: true,
  draft: false,
  links: [
    { label: 'View source', url: 'https://github.com/rhon3n/shader-studio' },
  ],
};

describe('content schemas', () => {
  it('accepts valid project and experience entries', () => {
    expect(projectSchema.parse(validProject).title).toBe('Shader Studio');
    expect(
      experienceSchema.parse({
        organization: 'measure.coffee',
        title: 'Founder & Founding Engineer',
        startDate: new Date('2026-03-01'),
        summary: 'Building a coffee-improvement product.',
        type: 'product',
        draft: false,
      }).organization,
    ).toBe('measure.coffee');
  });

  it('rejects malformed project links', () => {
    expect(() =>
      projectSchema.parse({
        ...validProject,
        links: [{ label: 'Broken', url: 'not-a-url' }],
      }),
    ).toThrow();
  });

  it('requires alt text whenever hero media exists', () => {
    expect(() =>
      projectSchema.parse({ ...validProject, heroImage: {} }),
    ).toThrow();
  });

  it('sorts entries newest first deterministically', () => {
    const entries = [
      {
        id: 'older',
        data: { publishedAt: new Date('2024-01-01'), sortOrder: 1 },
      },
      {
        id: 'newer',
        data: { publishedAt: new Date('2026-01-01'), sortOrder: 2 },
      },
    ];
    expect(sortByDate(entries).map((entry) => entry.id)).toEqual([
      'newer',
      'older',
    ]);
  });
});
