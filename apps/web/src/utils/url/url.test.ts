import { host } from './host';
import { hostApi } from './hostApi';
import { backApi } from './backApi';

describe('url', () => {
  describe('host', () => {
    it('should return host url', () => {
      expect(host('')).toBe('http://localhost:8080/');
    });
  });

  describe('hostApi', () => {
    it('should return front api url', () => {
      expect(hostApi('')).toBe('http://localhost:8080/api/');
    });
  });

  describe('backApi', () => {
    describe('nest', () => {
      it('should return nest api url', () => {
        expect(backApi.nest('')).toBe('http://localhost:3000/');
      });
    });
  });
});
