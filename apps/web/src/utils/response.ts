/**
 * バックエンドからのレスポンスをそのまま受け渡すための関数
 */
export const resolveResponseInit = (res: Response) => {
  return {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers,
  };
};
