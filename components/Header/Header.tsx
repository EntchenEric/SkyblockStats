'use client';

import { Text, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import styled from '@emotion/styled';

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 600px) {
    padding-left: 20%;
    padding-right: 20%;
  }
`;

export function Header() {
  return (
    <ParentDiv>
      <div>
        <Title>
          <Text
            fw={1000}
            size="xl"
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            Skyblock Stats
          </Text>
        </Title>
      </div>
      <div>
        <ColorSchemeToggle />
      </div>
    </ParentDiv>
  );
}
