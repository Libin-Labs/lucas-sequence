import { lucas } from '@lp-labs/lucas-sequence';
if (lucas(9) !== 76n) throw new Error('Sequence');
// @ts-expect-error invalid argument must be rejected by declarations
lucas('2');
