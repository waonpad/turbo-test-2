"use client";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/react-query";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* https://tanstack.com/query/v4/docs/react/devtools */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
