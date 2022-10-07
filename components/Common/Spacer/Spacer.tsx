import React from 'react';
import styled from 'styled-components';

interface SpacerProps {
  width?: string;
  height?: string;
}
interface ISpacerProps {
  width: string;
  height: string;
}

const SpacerDiv = styled.div`
  width: ${(props: ISpacerProps) => props.width};
  height: ${(props: ISpacerProps) => props.height};
`;

export const Spacer: React.FC<SpacerProps> = ({
  width = '100%',
  height = '100%',
}) => {
  return <SpacerDiv width={width} height={height} />;
};
