# Trading view recommends

Written on NodeJS with typescript

This package is fully compatible with original python lib: [deathlyface/python-tradingview-ta](https://github.com/deathlyface/python-tradingview-ta).

## Install

```
npm i trading-view-recommends
```

## Usage

```typescript
import {
  TradingViewScan,
  SCREENERS_ENUM,
  EXCHANGES_ENUM,
  INTERVALS_ENUM,
} from 'trading-view-recommends';

const result = await new TradingViewScan(
  SCREENERS_ENUM['crypto'],
  EXCHANGES_ENUM['BINANCE'],
  'BNBUSDT',
  INTERVALS_ENUM['1m'],
  // You can pass axios instance. It's optional argument (you can use it for pass custom headers or proxy)
).analyze();

console.log(result);
```
