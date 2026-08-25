import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PROJECT_RAIL_DISMISS_SCROLL_PX = 24;

export function calculateProjectRailTravel(
  scrollWidth: number,
  clientWidth: number,
): number {
  if (!Number.isFinite(scrollWidth) || !Number.isFinite(clientWidth)) return 0;
  return Math.max(0, scrollWidth - clientWidth);
}

export function clampProjectRailProgress(
  scrollLeft: number,
  maxScroll: number,
): number {
  if (
    !Number.isFinite(scrollLeft) ||
    !Number.isFinite(maxScroll) ||
    maxScroll <= 0
  ) {
    return 0;
  }

  return Math.min(1, Math.max(0, scrollLeft / maxScroll));
}

export function selectNearestProjectCard(
  cardOffsets: number[],
  scrollLeft: number,
): number {
  if (cardOffsets.length === 0) return 0;

  return cardOffsets.reduce((nearestIndex, offset, index) => {
    const nearestOffset = cardOffsets[nearestIndex] ?? 0;
    return Math.abs(offset - scrollLeft) < Math.abs(nearestOffset - scrollLeft)
      ? index
      : nearestIndex;
  }, 0);
}

export function formatProjectRailFraction(index: number): string {
  return String(index + 1).padStart(2, '0');
}

export function formatProjectRailPercentage(progress: number): string {
  return `${Math.round(Math.min(1, Math.max(0, progress)) * 100)}%`;
}

export function getProjectRailScrollBehavior(
  reducedMotion: boolean,
): ScrollBehavior {
  return reducedMotion ? 'auto' : 'smooth';
}

export function shouldEnhanceProjectRail(
  reducedMotion: boolean,
  coarsePointer: boolean,
): boolean {
  return !reducedMotion && !coarsePointer;
}

export function getProjectRailTargetIndex(
  key: string,
  currentIndex: number,
  total: number,
): number | undefined {
  if (total <= 0) return undefined;

  switch (key) {
    case 'ArrowRight':
      return Math.min(total - 1, currentIndex + 1);
    case 'ArrowLeft':
      return Math.max(0, currentIndex - 1);
    case 'Home':
      return 0;
    case 'End':
      return total - 1;
    default:
      return undefined;
  }
}

type ProjectRailElements = {
  root: HTMLElement;
  rail: HTMLElement;
  cards: HTMLElement[];
  helper?: HTMLElement;
  current?: HTMLElement;
  total?: HTMLElement;
  progress?: HTMLElement;
  percentage?: HTMLElement;
  fill?: HTMLElement;
  marker?: HTMLElement;
  cue?: HTMLElement;
};

function getProjectRailElements(
  root: HTMLElement,
): ProjectRailElements | undefined {
  const rail = root.querySelector<HTMLElement>('[data-project-rail-scroll]');
  if (!rail) return undefined;

  return {
    root,
    rail,
    cards: [...rail.querySelectorAll<HTMLElement>('[data-project-card]')],
    helper:
      root.querySelector<HTMLElement>('[data-project-rail-helper]') ??
      undefined,
    current:
      root.querySelector<HTMLElement>('[data-project-rail-current]') ??
      undefined,
    total:
      root.querySelector<HTMLElement>('[data-project-rail-total]') ?? undefined,
    progress:
      root.querySelector<HTMLElement>('[data-project-rail-progress]') ??
      undefined,
    percentage:
      root.querySelector<HTMLElement>('[data-project-rail-percentage]') ??
      undefined,
    fill:
      root.querySelector<HTMLElement>('[data-project-rail-progress-fill]') ??
      undefined,
    marker:
      root.querySelector<HTMLElement>('[data-project-rail-progress-marker]') ??
      undefined,
    cue:
      root.querySelector<HTMLElement>('[data-project-rail-cue]') ?? undefined,
  };
}

function measureSharedRows(cards: HTMLElement[]) {
  const zoneNames = ['title', 'media', 'caption'] as const;

  return zoneNames.reduce(
    (rows, zone) => {
      const maxHeight = cards.reduce((tallest, card) => {
        const zoneElement = card.querySelector<HTMLElement>(
          `[data-project-zone="${zone}"]`,
        );
        if (!zoneElement) return tallest;
        return Math.max(
          tallest,
          Math.ceil(zoneElement.getBoundingClientRect().height),
        );
      }, 0);

      rows[zone] = maxHeight;
      return rows;
    },
    {} as Record<(typeof zoneNames)[number], number>,
  );
}

function measureSharedDetailSubcells(cards: HTMLElement[]) {
  const selectors = {
    description: '[data-project-zone="description"]',
    category: '[data-project-zone="category"]',
  } as const;

  return Object.entries(selectors).reduce(
    (heights, [name, selector]) => {
      heights[name as keyof typeof selectors] = cards.reduce(
        (tallest, card) => {
          const element = card.querySelector<HTMLElement>(selector);
          if (!element) return tallest;
          return Math.max(
            tallest,
            Math.ceil(element.getBoundingClientRect().height),
          );
        },
        0,
      );
      return heights;
    },
    {} as Record<keyof typeof selectors, number>,
  );
}

function measureSharedDetailsRow(cards: HTMLElement[]) {
  return cards.reduce((tallest, card) => {
    const details = card.querySelector<HTMLElement>(
      '[data-project-zone="details"]',
    );
    if (!details) return tallest;
    return Math.max(tallest, Math.ceil(details.getBoundingClientRect().height));
  }, 0);
}

function setProjectRailRows(root: HTMLElement, cards: HTMLElement[]) {
  if (cards.length === 0) return;

  const properties = [
    '--project-row-title',
    '--project-row-details',
    '--project-row-media',
    '--project-row-caption',
    '--project-description-height',
    '--project-category-height',
  ];
  properties.forEach((property) => root.style.removeProperty(property));

  const rows = measureSharedRows(cards);
  const detailSubcells = measureSharedDetailSubcells(cards);

  if (rows.title > 0)
    root.style.setProperty('--project-row-title', `${rows.title}px`);
  if (rows.media > 0)
    root.style.setProperty('--project-row-media', `${rows.media}px`);
  if (rows.caption > 0)
    root.style.setProperty('--project-row-caption', `${rows.caption}px`);
  if (detailSubcells.description > 0) {
    root.style.setProperty(
      '--project-description-height',
      `${detailSubcells.description}px`,
    );
  }
  if (detailSubcells.category > 0) {
    root.style.setProperty(
      '--project-category-height',
      `${detailSubcells.category}px`,
    );
  }

  const detailsHeight = measureSharedDetailsRow(cards);
  if (detailsHeight > 0)
    root.style.setProperty('--project-row-details', `${detailsHeight}px`);
}

export function mountProjectRail(root: Element): () => void {
  if (!(root instanceof HTMLElement)) return () => {};

  const elements = getProjectRailElements(root);
  if (!elements) return () => {};

  const { rail, cards, current, total, progress, percentage, fill, marker } =
    elements;
  const totalCards = cards.length;
  const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointerMedia = window.matchMedia('(pointer: coarse)');
  const abortController = new AbortController();
  let reducedMotion = motionMedia.matches;
  let frame = 0;
  let rowsFrame = 0;
  let active = true;
  let scrollTween: gsap.core.Tween | undefined;
  let trigger: ReturnType<typeof ScrollTrigger.create> | undefined;

  const renderProgress = (value: number) => {
    const normalized = Math.min(1, Math.max(0, value));
    const activeIndex = Math.round(normalized * Math.max(totalCards - 1, 0));

    if (current) current.textContent = formatProjectRailFraction(activeIndex);
    if (total)
      total.textContent = formatProjectRailFraction(
        Math.max(totalCards - 1, 0),
      );
    if (percentage)
      percentage.textContent = formatProjectRailPercentage(normalized);
    if (progress)
      progress.setAttribute('aria-valuenow', `${Math.round(normalized * 100)}`);
    if (fill)
      fill.style.setProperty('--project-rail-progress', `${normalized}`);
    if (marker)
      marker.style.setProperty('--project-rail-progress', `${normalized}`);

    root.dataset.projectRailAtEnd = String(
      normalized >= 0.999 || totalCards <= 1,
    );
  };

  const syncRows = () => {
    rowsFrame = 0;
    setProjectRailRows(root, cards);
  };

  const requestRowSync = () => {
    if (rowsFrame) cancelAnimationFrame(rowsFrame);
    rowsFrame = requestAnimationFrame(syncRows);
  };

  const syncNativeProgress = () => {
    frame = 0;
    const travel = calculateProjectRailTravel(
      rail.scrollWidth,
      rail.clientWidth,
    );
    root.dataset.projectRailOverflow = String(travel > 0);
    renderProgress(clampProjectRailProgress(rail.scrollLeft, travel));
  };

  const requestNativeSync = () => {
    if (frame) return;
    frame = requestAnimationFrame(syncNativeProgress);
  };

  const destroyScrollTrigger = () => {
    trigger?.kill();
    scrollTween?.kill();
    trigger = undefined;
    scrollTween = undefined;
    gsap.set(cards, { clearProps: 'transform' });
  };

  const setupScrollTrigger = () => {
    destroyScrollTrigger();
    reducedMotion = motionMedia.matches;
    const enhanced = shouldEnhanceProjectRail(
      reducedMotion,
      pointerMedia.matches,
    );
    root.dataset.projectRailReducedMotion = String(reducedMotion);
    root.dataset.projectRailEnhanced = String(enhanced);

    if (!enhanced || totalCards <= 1) {
      syncNativeProgress();
      return;
    }

    rail.scrollLeft = 0;
    scrollTween = gsap.to(cards, {
      x: () => -calculateProjectRailTravel(rail.scrollWidth, rail.clientWidth),
      ease: 'none',
      paused: true,
    });

    trigger = ScrollTrigger.create({
      trigger: root,
      animation: scrollTween,
      start: 'top top',
      end: () =>
        `+=${Math.max(
          1,
          calculateProjectRailTravel(rail.scrollWidth, rail.clientWidth),
        )}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      onUpdate: (self) => renderProgress(self.progress),
      onRefresh: (self) => {
        root.dataset.projectRailOverflow = String(
          calculateProjectRailTravel(rail.scrollWidth, rail.clientWidth) > 0,
        );
        renderProgress(self.progress);
      },
    });
  };

  const getActiveIndex = () => {
    if (trigger && !reducedMotion) {
      return Math.round(trigger.progress * Math.max(totalCards - 1, 0));
    }
    return selectNearestProjectCard(
      cards.map((card) => card.offsetLeft),
      rail.scrollLeft,
    );
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const targetIndex = getProjectRailTargetIndex(
      event.key,
      getActiveIndex(),
      totalCards,
    );
    if (targetIndex === undefined) return;

    event.preventDefault();
    if (trigger && !reducedMotion) {
      const targetProgress = targetIndex / Math.max(totalCards - 1, 1);
      window.scrollTo({
        top: trigger.start + (trigger.end - trigger.start) * targetProgress,
        behavior: 'auto',
      });
      return;
    }

    rail.scrollTo({
      left: cards[targetIndex]?.offsetLeft ?? 0,
      behavior: getProjectRailScrollBehavior(reducedMotion),
    });
  };

  const requestRefresh = () => {
    requestRowSync();
    ScrollTrigger.refresh();
    requestNativeSync();
  };
  const onMotionChange = () => {
    setupScrollTrigger();
    ScrollTrigger.refresh();
  };

  syncRows();
  setupScrollTrigger();
  void document.fonts?.ready.then(() => {
    if (active) requestRefresh();
  });

  window.addEventListener('resize', requestRefresh, {
    passive: true,
    signal: abortController.signal,
  });
  window.addEventListener('orientationchange', requestRefresh, {
    passive: true,
    signal: abortController.signal,
  });
  rail.addEventListener('scroll', requestNativeSync, {
    passive: true,
    signal: abortController.signal,
  });
  rail.addEventListener('keydown', onKeyDown, {
    signal: abortController.signal,
  });

  const legacyMotionMedia = motionMedia as MediaQueryList & {
    addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
    removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
  };
  const legacyPointerMedia = pointerMedia as MediaQueryList & {
    addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
    removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
  };
  if ('addEventListener' in motionMedia) {
    motionMedia.addEventListener('change', onMotionChange);
  } else {
    legacyMotionMedia.addListener?.(onMotionChange);
  }
  if ('addEventListener' in pointerMedia) {
    pointerMedia.addEventListener('change', onMotionChange);
  } else {
    legacyPointerMedia.addListener?.(onMotionChange);
  }

  return () => {
    active = false;
    abortController.abort();
    if (frame) cancelAnimationFrame(frame);
    if (rowsFrame) cancelAnimationFrame(rowsFrame);
    destroyScrollTrigger();
    root.dataset.projectRailEnhanced = 'false';
    if ('removeEventListener' in motionMedia) {
      motionMedia.removeEventListener('change', onMotionChange);
    } else {
      legacyMotionMedia.removeListener?.(onMotionChange);
    }
    if ('removeEventListener' in pointerMedia) {
      pointerMedia.removeEventListener('change', onMotionChange);
    } else {
      legacyPointerMedia.removeListener?.(onMotionChange);
    }
  };
}
