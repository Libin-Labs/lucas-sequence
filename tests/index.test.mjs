import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('reference prefix', () => {
  assert.deepEqual(
    Array.from({ length: 10 }, (_, i) => api.lucas(i)),
    [2n, 1n, 3n, 4n, 7n, 11n, 18n, 29n, 47n, 76n],
  );
});
test('zero index', () => {
  assert.equal(api.lucas(0), 2n);
});
test('recurrence or independent count', () => {
  for (let n = 2; n < 100; n++) assert.equal(api.lucas(n), api.lucas(n - 1) + api.lucas(n - 2));
});
test('upper bound', () => {
  assert.equal(typeof api.lucas(5000), 'bigint');
});
test('invalid ranges', () => {
  assert.throws(() => api.lucas(-1));
  assert.throws(() => api.lucas(5001));
  assert.throws(() => api.lucas(1.5));
});
test('type contract', () => {
  assert.throws(() => api.lucas('2'));
});
