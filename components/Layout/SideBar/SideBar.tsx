import React from "react";
import styled from "styled-components";

//Types
export const SIDE_BAR_POSITION_ENUM = {
  left: `left: 0px;`,
  right: `right: 0px;`,
};

export type SideBarPositionType = keyof typeof SIDE_BAR_POSITION_ENUM;

//Interfaces
export interface SideBarProps {
  position: SideBarPositionType;
  width?: string;
}

const Page = styled.div`
  width: ${(props: SideBarProps) => props.width};
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
`;

const Bar = styled.div`
  position: fixed;
  ${(props: SideBarProps) => SIDE_BAR_POSITION_ENUM[props.position]};
  width: ${(props: SideBarProps) => props.width};
`;

const SideBar: React.FC<SideBarProps> = ({ position, width = "320px" }) => {
  return (
    <Page position={position} width={width}>
      <Wrapper>
        <Bar position={position} width={width}>
          <>SideBar Contents is here</>
        </Bar>
      </Wrapper>
    </Page>
  );
};

export default SideBar;
