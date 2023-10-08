/**
 * @jest-environment node
 */

import { backApi } from './back-api';

describe('server url', () => {
  describe('backApi', () => {
    describe('nest', () => {
      it('should return nest api url', () => {
        expect(backApi.nest('')).toBe('http://localhost:3000/');
      });
    });
  });
});
