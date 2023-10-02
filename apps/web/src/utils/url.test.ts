// import { HOST_URL, NEST_API_URL } from '@/constants';

// export const host = (path: string) => {
//   return `${HOST_URL}${path}`;
// };

// export const frontApi = (path: string) => {
//   return `${HOST_URL}api/${path}`;
// };

// export const backApi = {
//   nest: (path: string) => {
//     return `${NEST_API_URL}${path}`;
//   },
// };

// 上のファイルのテスト
// NextJS

// Path: turbo-test/apps/web/src/utils/url.test.ts
import { host, frontApi, backApi } from './url';

describe('url', () => {
  describe('host', () => {
    it('should return host url', () => {
      expect(host('')).toBe('http://localhost:8080/');
    });
  });

  describe('frontApi', () => {
    it('should return front api url', () => {
      expect(frontApi('')).toBe('http://localhost:8080/api/');
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
