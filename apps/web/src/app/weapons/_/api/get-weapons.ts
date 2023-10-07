import { Weapon } from 'database';
import { fetcher } from '@/services/fetcher';
import { getAllCookies } from '@/utils/cookie/get-all-cookies';
import { hostApi } from '@/utils/url/host-api';

export async function getWeapons() {
  return fetcher<Weapon[]>(hostApi('weapons'), {
    cache: 'no-cache',
    // ブラウザからAPIにリクエストをする場合、cookieは自動で渡されるが
    // サーバー側でAPIにリクエストをする場合、cookieを明示的に渡す必要がある
    headers: {
      cookie: getAllCookies(),
    },
  });
}
