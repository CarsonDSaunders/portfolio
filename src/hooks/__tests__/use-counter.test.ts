import { renderHook } from '@testing-library/react';
import useCounter from '../use-counter';
import { test, expect } from 'vitest';

test('should use counter', () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe('function');
});
