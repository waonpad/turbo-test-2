import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    // refetchOnMount: false, // ページ遷移から戻ってきたときにリクエストするか
    refetchOnWindowFocus: false,
    retry: false,
    suspense: true, // reactのsuspenseに対応させられる
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
