import React from 'react';
import styled from 'styled-components';

interface DividerProps {
  width?: string;
  height?: string;
  size?: string;
  color: string;
}
interface IDividerProps {
  width: string;
  height: string;
  size: string;
  color: string;
}

const DividerDiv = styled.div`
  width: ${(props: IDividerProps) => props.width};
  height: ${(props: IDividerProps) => props.height};
  border: ${(props: IDividerProps) => `
    ${props.size} solid ${props.color}
  `};
`;

export const Divider: React.FC<DividerProps> = ({
  width = '0px',
  height = '0px',
  size = '1px',
  color,
}) => {
  return <DividerDiv width={width} height={height} size={size} color={color} />;
};
