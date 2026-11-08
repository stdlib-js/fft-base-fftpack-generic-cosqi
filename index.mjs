// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cos@v0.3.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/fft-base-fftpack-generic-rffti@esm/index.mjs";function i(i,r,n,f){var d,m,o,a;for(d=s/i,o=0,m=f,a=0;a<i;a++)o+=1,r[m]=t(o*d),m+=n;return e(i,r,n,f+i*n),r}export{i as default};
//# sourceMappingURL=index.mjs.map
