import { expect, test } from 'vitest';
import { add } from '../libs/add';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});
