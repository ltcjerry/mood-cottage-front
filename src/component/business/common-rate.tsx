import { Rate } from "antd";
import { ComponentProps } from "react";

interface RateProps extends ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckChange?: (checked: boolean) => void;
}

export const CommonRate = (props: RateProps) => {
  const { checked, onCheckChange, ...remain } = props;
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      onChange={(num) => onCheckChange?.(!!num)}
      {...remain}
    />
  );
};
