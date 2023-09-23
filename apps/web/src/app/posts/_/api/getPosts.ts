import { Post } from 'database';
import { fetcher } from '@/services/fetcher';
import { hostApi } from '@/utils/url';

export function getPosts() {
  return fetcher<Post[]>(hostApi('posts'), {
    cache: 'no-cache',
  });
}
