"use client";

import { HeroUIProvider } from "@heroui/react";
import { PropsWithChildren } from "react";

export function MainProvider({ children }: PropsWithChildren) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
