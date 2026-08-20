import type { CollectionEntry } from 'astro:content';

const MOBILE_QUERY = '(max-width: 45rem)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)';
const DESKTOP_READING_LINE_RATIO = 0.42;
const MOBILE_READING_LINE_RATIO = 0.38;

export type ExperienceEntry = CollectionEntry<'experience'>;

export function formatExperienceYear(date: Date): string {
  return `${date.getUTCFullYear()}`;
}

function formatExperienceType(type: ExperienceEntry['data']['type']): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

export function formatExperienceMeta(
  entry: Pick<ExperienceEntry['data'], 'startDate' | 'endDate' | 'type'>,
): string {
  return `${formatExperienceYear(entry.startDate)} to ${entry.endDate ? formatExperienceYear(entry.endDate) : 'Now'} · ${formatExperienceType(entry.type)}`;
}

export function getExperienceRailLabel(
  entry: Pick<ExperienceEntry['data'], 'startDate' | 'endDate'>,
  index: number,
): string {
  if (index === 0 && !entry.endDate) return 'Now';
  return formatExperienceYear(entry.startDate);
}

export function getExperienceAnchor({
  entryTop,
  entryHeight,
  isMobile,
}: {
  entryTop: number;
  entryHeight: number;
  isMobile: boolean;
}): number {
  if (isMobile) return entryTop + 72;
  return entryTop + Math.min(96, entryHeight * 0.33);
}

export function selectActiveExperienceIndex({
  anchors,
  readingLine,
  scrollY,
  viewportHeight,
  documentHeight,
  timelineTop,
  timelineBottom,
}: {
  anchors: number[];
  readingLine: number;
  scrollY: number;
  viewportHeight: number;
  documentHeight: number;
  timelineTop: number;
  timelineBottom: number;
}): number {
  if (anchors.length === 0) return 0;
  const lastIndex = anchors.length - 1;
  const readingPoint = scrollY + readingLine;

  if (readingPoint <= timelineTop) return 0;
  if (
    scrollY + viewportHeight >= documentHeight ||
    readingPoint >= timelineBottom
  ) {
    return lastIndex;
  }

  return anchors.reduce((nearestIndex, anchor, index) => {
    const nearestAnchor = anchors[nearestIndex] ?? anchor;
    return Math.abs(anchor - readingPoint) <
      Math.abs(nearestAnchor - readingPoint)
      ? index
      : nearestIndex;
  }, 0);
}

export function clampTimelineMarkerCenter({
  desiredCenter,
  railStart,
  railEnd,
  markerSize,
}: {
  desiredCenter: number;
  railStart: number;
  railEnd: number;
  markerSize: number;
}): number {
  const halfSize = markerSize / 2;
  return Math.min(
    Math.max(desiredCenter, railStart + halfSize),
    railEnd - halfSize,
  );
}

export function getTimelineMotionPreset(reducedMotion: boolean): {
  markerTransition: string;
  colorTransition: string;
} {
  if (reducedMotion) {
    return {
      markerTransition: 'none',
      colorTransition: 'none',
    };
  }

  const transition = `220ms ${EASE_OUT}`;
  return {
    markerTransition: `transform ${transition}`,
    colorTransition: `background-color ${transition}, color ${transition}, border-color ${transition}`,
  };
}

type TimelineElements = {
  root: HTMLElement;
  entries: HTMLElement[];
  labels: HTMLElement[];
  marker?: HTMLElement;
};

function getTimelineElements(root: HTMLElement): TimelineElements {
  return {
    root,
    entries: [...root.querySelectorAll<HTMLElement>('[data-experience-entry]')],
    labels: [
      ...root.querySelectorAll<HTMLElement>('[data-experience-rail-label]'),
    ],
    marker:
      root.querySelector<HTMLElement>('[data-experience-marker]') ?? undefined,
  };
}

function setActiveState(elements: TimelineElements, activeIndex: number) {
  elements.entries.forEach((entry, index) => {
    entry.dataset.timelineActive = index === activeIndex ? 'true' : 'false';
  });
  elements.labels.forEach((label, index) => {
    label.dataset.timelineActive = index === activeIndex ? 'true' : 'false';
  });
  elements.root.dataset.timelineActiveIndex = `${activeIndex}`;
}

export function mountExperienceTimeline(root: Element): () => void {
  if (!(root instanceof HTMLElement)) return () => {};
  if (root.dataset.timelineManaged === 'true') {
    return (
      (root as HTMLElement & { __experienceTimelineCleanup__?: () => void })
        .__experienceTimelineCleanup__ ?? (() => {})
    );
  }

  const elements = getTimelineElements(root);
  if (elements.entries.length === 0 || !elements.marker) return () => {};

  const mobile = window.matchMedia(MOBILE_QUERY);
  const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
  const motionController = root as HTMLElement & {
    __experienceTimelineCleanup__?: () => void;
  };
  let frame = 0;
  let resizeFrame = 0;
  let activeIndex = 0;

  const syncTransitions = () => {
    const preset = getTimelineMotionPreset(reducedMotion.matches);
    elements.marker?.style.setProperty(
      '--timeline-marker-transition',
      preset.markerTransition,
    );
    root.style.setProperty(
      '--timeline-color-transition',
      preset.colorTransition,
    );
    root.dataset.timelineReducedMotion = String(reducedMotion.matches);
  };

  const updateActive = () => {
    frame = 0;
    const rootRect = root.getBoundingClientRect();
    const scrollY = window.scrollY;
    const isMobile = mobile.matches;
    const readingLine =
      window.innerHeight *
      (isMobile ? MOBILE_READING_LINE_RATIO : DESKTOP_READING_LINE_RATIO);
    const anchors = elements.entries.map((entry) => {
      const rect = entry.getBoundingClientRect();
      return getExperienceAnchor({
        entryTop: rect.top + scrollY,
        entryHeight: rect.height,
        isMobile,
      });
    });

    activeIndex = selectActiveExperienceIndex({
      anchors,
      readingLine,
      scrollY,
      viewportHeight: window.innerHeight,
      documentHeight: document.documentElement.scrollHeight,
      timelineTop: rootRect.top + scrollY,
      timelineBottom: rootRect.bottom + scrollY,
    });
    setActiveState(elements, activeIndex);

    const activeEntry = elements.entries[activeIndex];
    const activeLabel = elements.labels[activeIndex];
    const rail = activeEntry?.querySelector<HTMLElement>(
      '[data-experience-rail]',
    );
    const marker = elements.marker;
    if (!activeEntry || !activeLabel || !rail || !marker) return;

    const labelRect = activeLabel.getBoundingClientRect();
    const railRect = rail.getBoundingClientRect();
    const markerWidth = marker.offsetWidth;
    const markerHeight = marker.offsetHeight;
    const desiredCenter = labelRect.top + labelRect.height / 2;
    const centerY = clampTimelineMarkerCenter({
      desiredCenter,
      railStart: rootRect.top,
      railEnd: rootRect.bottom,
      markerSize: markerHeight,
    });
    const centerX = railRect.left + railRect.width / 2;
    const markerX = centerX - rootRect.left - markerWidth / 2;
    const markerY = centerY - rootRect.top - markerHeight / 2;
    marker.dataset.timelineActive = 'true';
    marker.style.transform = `translate3d(${markerX}px, ${markerY}px, 0)`;
  };

  const requestUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(updateActive);
  };

  const requestResizeSync = () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(() => {
      resizeFrame = 0;
      requestUpdate();
    });
  };

  syncTransitions();
  setActiveState(elements, 0);
  updateActive();
  window.addEventListener('load', requestUpdate, { once: true });
  void document.fonts?.ready.then(requestResizeSync);

  const abortController = new AbortController();
  const resizeObserver = new ResizeObserver(requestResizeSync);
  elements.entries.forEach((entry) => resizeObserver.observe(entry));
  resizeObserver.observe(root);

  window.addEventListener('scroll', requestUpdate, {
    passive: true,
    signal: abortController.signal,
  });
  window.addEventListener('resize', requestResizeSync, {
    passive: true,
    signal: abortController.signal,
  });
  window.addEventListener('orientationchange', requestResizeSync, {
    passive: true,
    signal: abortController.signal,
  });

  const onMediaChange = () => {
    syncTransitions();
    requestResizeSync();
  };
  const mediaQueries = [mobile, reducedMotion] as const;
  for (const query of mediaQueries) {
    if ('addEventListener' in query) {
      query.addEventListener('change', onMediaChange);
    } else {
      (
        query as MediaQueryList & {
          addListener?: (
            listener: (event: MediaQueryListEvent) => void,
          ) => void;
        }
      ).addListener?.(onMediaChange);
    }
  }

  root.dataset.timelineManaged = 'true';

  const cleanup = () => {
    abortController.abort();
    resizeObserver.disconnect();
    if (frame) cancelAnimationFrame(frame);
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    for (const query of mediaQueries) {
      if ('removeEventListener' in query) {
        query.removeEventListener('change', onMediaChange);
      } else {
        (
          query as MediaQueryList & {
            removeListener?: (
              listener: (event: MediaQueryListEvent) => void,
            ) => void;
          }
        ).removeListener?.(onMediaChange);
      }
    }
    root.dataset.timelineManaged = 'false';
    delete motionController.__experienceTimelineCleanup__;
  };

  motionController.__experienceTimelineCleanup__ = cleanup;
  return cleanup;
}
