/* eslint-disable jest/expect-expect */
import {
  EXCHANGES_ENUM,
  INTERVALS_ENUM,
  SCREENERS_ENUM,
} from '../src/contracts';
import { TradingViewScan } from '../src/main';
// import axios from 'axios';
// import { promises as fs } from 'fs';
describe('response parser', () => {
  it('delays the greeting by 2 seconds', async () => {
    const result = await new TradingViewScan(
      SCREENERS_ENUM['crypto'],
      EXCHANGES_ENUM['BINANCE'],
      'BNBBUSD',
      INTERVALS_ENUM['1m'],
    ).analyze();
    console.log(result);
  });
});
