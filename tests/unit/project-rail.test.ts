import { describe, expect, it } from 'vitest';
import {
  calculateProjectRailTravel,
  clampProjectRailProgress,
  formatProjectRailPercentage,
  shouldEnhanceProjectRail,
} from '../../src/lib/projectRail';

describe('project rail geometry', () => {
  it('derives horizontal travel from rendered dimensions', () => {
    expect(calculateProjectRailTravel(2400, 900)).toBe(1500);
    expect(calculateProjectRailTravel(900, 900)).toBe(0);
    expect(calculateProjectRailTravel(700, 900)).toBe(0);
  });

  it('normalizes progress at both gallery endpoints', () => {
    expect(clampProjectRailProgress(0, 1500)).toBe(0);
    expect(clampProjectRailProgress(750, 1500)).toBe(0.5);
    expect(clampProjectRailProgress(1500, 1500)).toBe(1);
    expect(clampProjectRailProgress(1700, 1500)).toBe(1);
  });

  it('formats visible normalized progress', () => {
    expect(formatProjectRailPercentage(0)).toBe('0%');
    expect(formatProjectRailPercentage(0.504)).toBe('50%');
    expect(formatProjectRailPercentage(1)).toBe('100%');
  });

  it('uses native touch scrolling for coarse pointers', () => {
    expect(shouldEnhanceProjectRail(false, false)).toBe(true);
    expect(shouldEnhanceProjectRail(false, true)).toBe(false);
    expect(shouldEnhanceProjectRail(true, false)).toBe(false);
  });
});
