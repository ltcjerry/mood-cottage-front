import styled from "@emotion/styled";

export const Row = styled.div<{
  gap?: number;
  between?: boolean;
  bottom?: number;
}>`
  display: flex;
  margin-bottom: ${(props) =>
    props.bottom ? props.bottom + "rem" : undefined};
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  > * {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: ${(props) => (props.gap ? props.gap + "rem" : undefined)};
  }
`;
