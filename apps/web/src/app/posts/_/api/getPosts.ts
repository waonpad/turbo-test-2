import { Post } from 'database';
import { fetcher } from '@/services/fetcher';
import { frontApi } from '@/utils/url';

export function getPosts() {
  return fetcher<Post[]>(frontApi('posts'), {
    cache: 'no-cache',
  });
}
