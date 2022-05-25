import { memo, ReactNode, useEffect, useState } from "react";

type ExtraProps = Readonly<{ active?: Boolean; children: ReactNode }>;
const useActive = (domId?: string) => {
  const [active] = useState(false);
  useEffect(() => {});
  return active;
};
export const ComponentLoader = ({ children }: { children: ReactNode }) => {
  const active = useActive();
  return <RenderWhenActive active={active}>{children}</RenderWhenActive>;
};

const RenderWhenActive = memo(
  ({ children }: { children: ReactNode }): any => children,
  (prevProps: ExtraProps, nextProps: ExtraProps) => !nextProps?.active
);
