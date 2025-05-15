"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
const HeroUIProvider = dynamic(
  () => import('@heroui/react').then((e) => e.HeroUIProvider),
  {
    ssr: false,
  }
)

export function MainProvider({ children }: PropsWithChildren) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
