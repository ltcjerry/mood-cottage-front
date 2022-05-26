import { useUser } from "hook/business/user";
import { ComponentProps } from "react";
import { CommonSelect } from "./common-select";

export const UserSelect = (props: ComponentProps<typeof CommonSelect>) => {
  const { data: users } = useUser();
  return <CommonSelect options={users || []} {...props} />;
};
