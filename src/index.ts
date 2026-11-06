function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
function pair(n: number): [bigint, bigint] {
  if (!n) return [0n, 1n];
  const [a, b] = pair(Math.floor(n / 2)),
    c = a * (2n * b - a),
    d = a * a + b * b;
  return n % 2 ? [d, c + d] : [c, d];
}
export function lucas(n: number): bigint {
  integer(n, 0, 5000);
  const [a, b] = pair(n);
  return 2n * b - a;
}
