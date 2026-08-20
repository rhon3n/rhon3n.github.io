import { z } from 'astro/zod';

export const projectSchema = z
  .object({
    title: z.string().min(1),
    summary: z.string().min(1),
    publishedAt: z.coerce.date(),
    endedAt: z.coerce.date().optional(),
    role: z.string().min(1),
    organization: z.string().optional(),
    tags: z.array(z.string().min(1)).min(1),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    sortOrder: z.number().int().optional(),
    heroImage: z.unknown().optional(),
    heroAlt: z.string().min(1).optional(),
    links: z.array(
      z.object({
        label: z.string().min(1),
        compactLabel: z.string().min(1).optional(),
        url: z.string().url(),
      }),
    ),
  })
  .refine((data) => !data.heroImage || data.heroAlt, {
    message: 'heroAlt is required when heroImage is present',
    path: ['heroAlt'],
  });

export const experienceSchema = z.object({
  organization: z.string().min(1),
  title: z.string().min(1),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  summary: z.string().min(1),
  type: z.enum(['engineering', 'product', 'operations', 'leadership']),
  draft: z.boolean().default(false),
  organizationUrl: z.string().url().optional(),
  highlights: z.array(z.string().min(1)).optional(),
});

type DatedEntry = {
  id: string;
  data: { publishedAt: Date; sortOrder?: number };
};

export function getPublicationYear(date: Date): number {
  return date.getUTCFullYear();
}

export function sortByDate<T extends DatedEntry>(entries: T[]): T[] {
  return [...entries].sort(
    (a, b) =>
      (b.data.sortOrder ?? 0) - (a.data.sortOrder ?? 0) ||
      b.data.publishedAt.getTime() - a.data.publishedAt.getTime() ||
      a.id.localeCompare(b.id),
  );
}
