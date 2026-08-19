export const PROJECT_RAIL_DISMISS_SCROLL_PX = 24;

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

export function getProjectRailScrollBehavior(
  reducedMotion: boolean,
): ScrollBehavior {
  return reducedMotion ? 'auto' : 'smooth';
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

  const { rail, cards, current, total, progress, fill, marker } = elements;
  const totalCards = cards.length;
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reducedMotion = media.matches;
  let dismissedCue = false;
  let frame = 0;
  let rowsFrame = 0;

  const setCueDismissed = () => {
    if (dismissedCue) return;
    dismissedCue = true;
    root.dataset.projectRailCueDismissed = 'true';
  };

  const syncRows = () => {
    rowsFrame = 0;
    setProjectRailRows(root, cards);
  };

  const requestRowSync = () => {
    if (rowsFrame) cancelAnimationFrame(rowsFrame);
    rowsFrame = requestAnimationFrame(syncRows);
  };

  const syncProgress = () => {
    frame = 0;
    const maxScroll = Math.max(rail.scrollWidth - rail.clientWidth, 0);
    const progressValue = clampProjectRailProgress(rail.scrollLeft, maxScroll);
    const activeIndex = selectNearestProjectCard(
      cards.map((card) => card.offsetLeft),
      rail.scrollLeft,
    );
    const atEnd = progressValue >= 0.999 || maxScroll === 0;

    if (current) current.textContent = formatProjectRailFraction(activeIndex);
    if (total)
      total.textContent = formatProjectRailFraction(
        Math.max(totalCards - 1, 0),
      );
    if (progress)
      progress.setAttribute(
        'aria-valuenow',
        `${Math.round(progressValue * 100)}`,
      );
    if (fill)
      fill.style.setProperty('--project-rail-progress', `${progressValue}`);
    if (marker)
      marker.style.setProperty('--project-rail-progress', `${progressValue}`);

    root.dataset.projectRailCueVisible = atEnd
      ? 'false'
      : String(maxScroll > 0);
    root.dataset.projectRailAtEnd = String(atEnd);
    root.dataset.projectRailOverflow = String(maxScroll > 0);
  };

  const requestSync = () => {
    if (frame) return;
    frame = requestAnimationFrame(syncProgress);
  };

  const syncReducedMotion = () => {
    reducedMotion = media.matches;
    root.dataset.projectRailReducedMotion = String(reducedMotion);
  };

  const onScroll = () => {
    if (Math.abs(rail.scrollLeft) >= PROJECT_RAIL_DISMISS_SCROLL_PX) {
      setCueDismissed();
    }
    requestSync();
  };

  const onFocusIn = () => {
    setCueDismissed();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const activeIndex = selectNearestProjectCard(
      cards.map((card) => card.offsetLeft),
      rail.scrollLeft,
    );
    const targetIndex = getProjectRailTargetIndex(
      event.key,
      activeIndex,
      totalCards,
    );

    if (targetIndex === undefined) return;

    event.preventDefault();
    setCueDismissed();
    rail.scrollTo({
      left: cards[targetIndex]?.offsetLeft ?? 0,
      behavior: getProjectRailScrollBehavior(reducedMotion),
    });
  };

  syncReducedMotion();
  syncRows();
  syncProgress();
  void document.fonts?.ready.then(() => {
    requestRowSync();
    requestSync();
  });

  const abortController = new AbortController();
  window.addEventListener('resize', requestRowSync, {
    passive: true,
    signal: abortController.signal,
  });
  window.addEventListener('resize', requestSync, {
    passive: true,
    signal: abortController.signal,
  });
  window.addEventListener('orientationchange', requestRowSync, {
    passive: true,
    signal: abortController.signal,
  });
  window.addEventListener('orientationchange', requestSync, {
    passive: true,
    signal: abortController.signal,
  });

  rail.addEventListener('scroll', onScroll, {
    passive: true,
    signal: abortController.signal,
  });
  rail.addEventListener('focusin', onFocusIn, {
    signal: abortController.signal,
  });
  rail.addEventListener('keydown', onKeyDown, {
    signal: abortController.signal,
  });

  const onMotionChange = () => syncReducedMotion();
  const legacyMedia = media as MediaQueryList & {
    addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
    removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
  };
  if ('addEventListener' in media) {
    media.addEventListener('change', onMotionChange);
  } else {
    legacyMedia.addListener?.(onMotionChange);
  }

  return () => {
    abortController.abort();
    if (frame) cancelAnimationFrame(frame);
    if (rowsFrame) cancelAnimationFrame(rowsFrame);
    if ('removeEventListener' in media) {
      media.removeEventListener('change', onMotionChange);
    } else {
      legacyMedia.removeListener?.(onMotionChange);
    }
  };
}
