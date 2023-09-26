import { Post } from 'database';
import { fetcher } from '@/services/fetcher';
import { frontApi } from '@/utils/url';

export function getPost(id: Post['id']) {
  return fetcher<Post>(frontApi('posts/' + id), {
    cache: 'no-cache',
  });
}
