import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => {
  let triggerOptions: Record<string, unknown> | undefined;
  const trigger = {
    end: 1600,
    kill: vi.fn(),
    progress: 0.4,
    start: 100,
  };
  const ScrollTrigger = {
    config: vi.fn(),
    create: vi.fn((options: Record<string, unknown>) => {
      triggerOptions = options;
      return trigger;
    }),
    refresh: vi.fn(() => {
      const onRefresh = triggerOptions?.onRefresh as
        ((self: typeof trigger) => void) | undefined;
      onRefresh?.(trigger);
    }),
  };
  const gsap = {
    registerPlugin: vi.fn(),
    set: vi.fn(),
    to: vi.fn(() => ({ kill: vi.fn() })),
  };

  return {
    gsap,
    getTriggerOptions: () => triggerOptions,
    resetTriggerOptions: () => {
      triggerOptions = undefined;
    },
    ScrollTrigger,
    trigger,
  };
});

vi.mock('gsap', () => ({ default: mocks.gsap }));
vi.mock('gsap/ScrollTrigger', () => ({ default: mocks.ScrollTrigger }));

class FakeStyle {
  values = new Map<string, string>();

  removeProperty(name: string) {
    this.values.delete(name);
  }

  setProperty(name: string, value: string) {
    this.values.set(name, value);
  }
}

class FakeEventTarget {
  listeners = new Map<string, Set<EventListenerOrEventListenerObject>>();

  addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
    const listeners = this.listeners.get(type) ?? new Set();
    listeners.add(listener);
    this.listeners.set(type, listeners);
  }

  dispatch(type: string) {
    for (const listener of this.listeners.get(type) ?? []) {
      if (typeof listener === 'function') listener(new Event(type));
      else listener.handleEvent(new Event(type));
    }
  }
}

class FakeHTMLElement extends FakeEventTarget {
  clientWidth = 900;
  dataset: DOMStringMap = {};
  offsetLeft = 0;
  scrollLeft = 0;
  scrollWidth = 2400;
  setAttribute = vi.fn();
  style = new FakeStyle() as unknown as CSSStyleDeclaration;
  textContent = '';
  private cards: FakeHTMLElement[] = [];
  private selectors = new Map<string, FakeHTMLElement>();

  addCards(cards: FakeHTMLElement[]) {
    this.cards = cards;
  }

  addSelector(selector: string, element: FakeHTMLElement) {
    this.selectors.set(selector, element);
  }

  getBoundingClientRect() {
    return { height: 100 } as DOMRect;
  }

  querySelector<T extends Element>(selector: string): T | null {
    return (this.selectors.get(selector) as T | undefined) ?? null;
  }

  querySelectorAll<T extends Element>(selector: string): T[] {
    return selector === '[data-project-card]'
      ? (this.cards as unknown as T[])
      : [];
  }

  scrollTo(options: ScrollToOptions) {
    this.scrollLeft = options.left ?? this.scrollLeft;
  }
}

const media = new FakeEventTarget() as FakeEventTarget & MediaQueryList;
Object.assign(media, { matches: false });

let animationFrames: FrameRequestCallback[];
let windowTarget: FakeEventTarget & {
  innerHeight: number;
  innerWidth: number;
  matchMedia: () => MediaQueryList;
  scrollTo: ReturnType<typeof vi.fn>;
  visualViewport?: FakeEventTarget & { height: number; width: number };
};

function flushAnimationFrames() {
  while (animationFrames.length > 0) {
    const frames = animationFrames.splice(0);
    frames.forEach((callback) => callback(0));
  }
}

function createRail() {
  const root = new FakeHTMLElement();
  const rail = new FakeHTMLElement();
  const percentage = new FakeHTMLElement();
  const progress = new FakeHTMLElement();
  const cards = [new FakeHTMLElement(), new FakeHTMLElement()];
  cards[1]!.offsetLeft = 1500;
  rail.addCards(cards);
  root.addSelector('[data-project-rail-scroll]', rail);
  root.addSelector('[data-project-rail-percentage]', percentage);
  root.addSelector('[data-project-rail-progress]', progress);
  return { percentage, progress, root, rail };
}

beforeEach(() => {
  animationFrames = [];
  windowTarget = Object.assign(new FakeEventTarget(), {
    innerHeight: 844,
    innerWidth: 390,
    matchMedia: () => media,
    scrollTo: vi.fn(),
    visualViewport: Object.assign(new FakeEventTarget(), {
      height: 844,
      width: 390,
    }),
  });

  vi.stubGlobal('HTMLElement', FakeHTMLElement);
  vi.stubGlobal('window', windowTarget);
  vi.stubGlobal('document', { fonts: undefined });
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    animationFrames.push(callback);
    return animationFrames.length;
  });
  vi.stubGlobal('cancelAnimationFrame', vi.fn());

  mocks.ScrollTrigger.create.mockClear();
  mocks.ScrollTrigger.refresh.mockClear();
  mocks.trigger.kill.mockClear();
  mocks.resetTriggerOptions();
});

describe('project rail viewport refresh lifecycle', () => {
  it('refreshes the existing pin after a height-only window resize', async () => {
    const { mountProjectRail } = await import('../../src/lib/projectRail');
    const { root } = createRail();
    const cleanup = mountProjectRail(root as unknown as Element);

    windowTarget.innerHeight = 700;
    windowTarget.dispatch('resize');
    flushAnimationFrames();

    expect(mocks.ScrollTrigger.create).toHaveBeenCalledTimes(1);
    expect(mocks.ScrollTrigger.refresh).toHaveBeenCalledTimes(1);
    expect(root.dataset.projectRailAtEnd).toBe('false');
    expect(mocks.trigger.kill).not.toHaveBeenCalled();

    cleanup();
    expect(mocks.trigger.kill).toHaveBeenCalledTimes(1);
  });

  it('refreshes the pin after a visual viewport height-only resize', async () => {
    const { mountProjectRail } = await import('../../src/lib/projectRail');
    const { root } = createRail();
    const cleanup = mountProjectRail(root as unknown as Element);

    windowTarget.visualViewport!.height = 700;
    windowTarget.visualViewport!.dispatch('resize');
    flushAnimationFrames();

    expect(mocks.ScrollTrigger.refresh).toHaveBeenCalledTimes(1);
    expect(mocks.ScrollTrigger.create).toHaveBeenCalledTimes(1);

    cleanup();
  });

  it('refreshes the existing pin after an orientation width change', async () => {
    const { mountProjectRail } = await import('../../src/lib/projectRail');
    const { root } = createRail();
    const cleanup = mountProjectRail(root as unknown as Element);

    windowTarget.innerWidth = 844;
    windowTarget.innerHeight = 390;
    windowTarget.dispatch('orientationchange');
    flushAnimationFrames();

    expect(mocks.ScrollTrigger.create).toHaveBeenCalledTimes(1);
    expect(mocks.ScrollTrigger.refresh).toHaveBeenCalledTimes(1);
    expect(mocks.trigger.kill).not.toHaveBeenCalled();

    cleanup();
  });

  it('renders restored progress when pageshow refreshes the pin', async () => {
    const { mountProjectRail } = await import('../../src/lib/projectRail');
    const { percentage, progress, root } = createRail();
    mocks.trigger.progress = 0;
    const cleanup = mountProjectRail(root as unknown as Element);

    mocks.trigger.progress = 0.25;
    windowTarget.dispatch('pageshow');
    flushAnimationFrames();

    expect(mocks.ScrollTrigger.refresh).toHaveBeenCalledTimes(1);
    expect(percentage.textContent).toBe('25%');
    expect(progress.setAttribute).toHaveBeenCalledWith('aria-valuenow', '25');

    cleanup();
    mocks.trigger.progress = 0.4;
  });
});
