import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { getAllCookies } from '@/utils/cookie/getAllCookies';
import { frontApi } from '@/utils/url';

export async function getWeapons() {
  return fetcher<Weapon[]>(frontApi('weapons'), {
    cache: 'no-cache',
    // ブラウザからAPIにリクエストをする場合、cookieは自動で渡されるが
    // サーバー側でAPIにリクエストをする場合、cookieを明示的に渡す必要がある
    headers: {
      cookie: getAllCookies(),
    },
  });
}
