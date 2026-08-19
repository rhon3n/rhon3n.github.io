export const MOBILE_IDLE_MS = 3000;

export type SectionPosition = {
  id: string;
  top: number;
  isIntersecting: boolean;
};

export type ActiveSectionContext = {
  atTop: boolean;
  atBottom: boolean;
  readingLine: number;
};

export function selectActiveSection(
  sections: SectionPosition[],
  context: ActiveSectionContext,
): string | undefined {
  if (sections.length === 0) return undefined;
  if (context.atTop) return sections[0].id;
  if (context.atBottom) return sections.at(-1)?.id;

  const intersecting = sections.filter((section) => section.isIntersecting);
  const intersectingBeforeLine = intersecting.filter(
    (section) => section.top <= context.readingLine,
  );

  if (intersectingBeforeLine.length > 0) {
    return intersectingBeforeLine.at(-1)?.id;
  }

  if (intersecting.length > 0) {
    return intersecting.reduce((nearest, section) =>
      Math.abs(section.top - context.readingLine) <
      Math.abs(nearest.top - context.readingLine)
        ? section
        : nearest,
    ).id;
  }

  const passed = sections.filter(
    (section) => section.top <= context.readingLine,
  );
  return passed.at(-1)?.id ?? sections[0].id;
}

export function getSectionScrollBehavior(
  reducedMotion: boolean,
): ScrollBehavior {
  return reducedMotion ? 'auto' : 'smooth';
}

type IdleVisibilityOptions = {
  onVisibilityChange: (visible: boolean) => void;
  delay?: number;
  schedule?: typeof globalThis.setTimeout;
  cancel?: typeof globalThis.clearTimeout;
};

export function createIdleVisibilityController({
  onVisibilityChange,
  delay = MOBILE_IDLE_MS,
  schedule = globalThis.setTimeout,
  cancel = globalThis.clearTimeout,
}: IdleVisibilityOptions) {
  let visible = false;
  let held = false;
  let timer: ReturnType<typeof globalThis.setTimeout> | undefined;

  const clearTimer = () => {
    if (timer !== undefined) cancel(timer);
    timer = undefined;
  };

  const setVisible = (nextVisible: boolean) => {
    if (visible === nextVisible) return;
    visible = nextVisible;
    onVisibilityChange(visible);
  };

  const scheduleHide = () => {
    clearTimer();
    if (held) return;
    timer = schedule(() => {
      timer = undefined;
      if (!held) setVisible(false);
    }, delay);
  };

  return {
    show() {
      setVisible(true);
      scheduleHide();
    },
    hold() {
      held = true;
      clearTimer();
      setVisible(true);
    },
    release() {
      held = false;
      scheduleHide();
    },
    isVisible() {
      return visible;
    },
    dispose() {
      clearTimer();
    },
  };
}
