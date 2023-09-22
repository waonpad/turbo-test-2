import { fetcher } from "@/services/fetcher";
import { hostApi } from "@/utils/url";
import { Post } from "database";

export function getPosts() {
  return fetcher<Post[]>(hostApi("posts"), {
    cache: "no-cache",
  });
}
