import { Select } from "antd";
import React from "react";

type ComponentProps = React.ComponentProps<typeof Select>;

interface SelectProps
  extends Omit<ComponentProps, "value" | "onChange" | "options"> {
  value: number | string | null | undefined;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}
/**
 * 重定义选择组件，解决传入的各类型值输出都为字符串类型的问题
 * value 可以传入多种类型的值
 * onchange只会回调number|undefined类型
 * 当isNaN(number(value))为true的时候，代表选择默认值
 * 当选择默认类型的时候， onchange会回调undefined
 * 透传组件自定义的属性
 */
export const CommonSelect = (props: SelectProps) => {
  const { value, defaultOptionName, options, onChange, ...restProps } = props;
  return (
    <Select
      value={toNumber(value)}
      onChange={(vlaue) => onChange(toNumber(value) || undefined)}
      {...restProps}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));
