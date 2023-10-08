import { host } from './host';
import { hostApi } from './host-api';

describe('client url', () => {
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
});
