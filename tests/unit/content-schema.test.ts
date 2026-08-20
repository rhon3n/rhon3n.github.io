import { describe, expect, it } from 'vitest';
import {
  experienceSchema,
  getPublicationYear,
  projectSchema,
  sortByDate,
} from '../../src/lib/content';
import {
  clampTimelineMarkerCenter,
  formatExperienceMeta,
  formatExperienceYear,
  getExperienceAnchor,
  getTimelineMotionPreset,
  selectActiveExperienceIndex,
} from '../../src/lib/experienceTimeline';

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
        title: 'Founding Engineer',
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

  it('renders date-only publication years in UTC', () => {
    expect(getPublicationYear(new Date('2026-01-01T00:00:00.000Z'))).toBe(2026);
  });
});

describe('experience timeline helpers', () => {
  it('formats date-only years and ranges in UTC', () => {
    const startDate = new Date('2024-01-01T00:00:00.000Z');
    const endDate = new Date('2026-03-01T00:00:00.000Z');

    expect(formatExperienceYear(startDate)).toBe('2024');
    expect(
      formatExperienceMeta({ startDate, endDate, type: 'engineering' }),
    ).toBe('2024 to 2026 · Engineering');
  });

  it('computes the requested desktop and mobile entry anchors', () => {
    expect(
      getExperienceAnchor({ entryTop: 100, entryHeight: 300, isMobile: false }),
    ).toBe(196);
    expect(
      getExperienceAnchor({ entryTop: 100, entryHeight: 300, isMobile: true }),
    ).toBe(172);
  });

  it('keeps midpoint ties on the earlier entry and advances after crossing', () => {
    const context = {
      anchors: [100, 300, 500],
      viewportHeight: 600,
      documentHeight: 2000,
      timelineTop: 80,
      timelineBottom: 700,
    };

    expect(
      selectActiveExperienceIndex({
        ...context,
        scrollY: 100,
        readingLine: 100,
      }),
    ).toBe(0);
    expect(
      selectActiveExperienceIndex({
        ...context,
        scrollY: 101,
        readingLine: 100,
      }),
    ).toBe(1);
  });

  it('locks selection to the first and last entries at timeline boundaries', () => {
    const context = {
      anchors: [100, 300, 500],
      readingLine: 200,
      viewportHeight: 600,
      documentHeight: 1200,
      timelineTop: 400,
      timelineBottom: 900,
    };

    expect(selectActiveExperienceIndex({ ...context, scrollY: 0 })).toBe(0);
    expect(selectActiveExperienceIndex({ ...context, scrollY: 600 })).toBe(2);
  });

  it('clamps marker centers and removes transitions for reduced motion', () => {
    expect(
      clampTimelineMarkerCenter({
        desiredCenter: 0,
        railStart: 10,
        railEnd: 110,
        markerSize: 10,
      }),
    ).toBe(15);
    expect(getTimelineMotionPreset(true)).toEqual({
      markerTransition: 'none',
      colorTransition: 'none',
    });
    expect(getTimelineMotionPreset(false).markerTransition).toContain(
      'transform 220ms',
    );
  });
});
