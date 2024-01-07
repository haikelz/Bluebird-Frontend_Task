"use client";

import { ChildrenProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import { Toaster } from "react-hot-toast";

export default function Wrapper({ children }: ChildrenProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>{children}</Provider>
      <Toaster />
    </QueryClientProvider>
  );
}
