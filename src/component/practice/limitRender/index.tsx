import { useActive } from "hook/use-active";
import { memo, ReactNode } from "react";

type ExtraProps = Readonly<{ active?: Boolean; children: ReactNode }>;

export const ComponentLoader = ({ children }: { children: ReactNode }) => {
  const active = useActive();
  return <RenderWhenActive active={active}>{children}</RenderWhenActive>;
};

const RenderWhenActive = memo(
  ({ children }: { children: ReactNode }): any => children,
  (prevProps: ExtraProps, nextProps: ExtraProps) => !nextProps?.active
);
