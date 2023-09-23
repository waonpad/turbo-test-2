import { Post } from 'database';
import { fetcher } from '@/services/fetcher';
import { hostApi } from '@/utils/url';

export function getPost(id: Post['id']) {
  return fetcher<Post>(hostApi('posts/' + id), {
    cache: 'no-cache',
  });
}
