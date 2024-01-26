import { Card, Image, Text, Badge, Button, Group, Container } from '@mantine/core';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;  // Aligns items vertically in the center
`;

const StyledTextContainer = styled.div`
  margin-left: 16px;  // Adds some space between the image and the text
`;

export function PlayerCard({ name, badge }: { name: string, badge: string }) {
  return (
    <Container>
      <StyledDiv>
        <Image
          src={`https://mc-heads.net/avatar/${name}`}
          height={100}
          alt="Player Avatar"
        />
        <StyledTextContainer>
          <Group>
            <Text fw={500}>{name}</Text>
          </Group>
          {
            badge
              ? <Group><Badge color={badge == "Developer"? "Red": "Green"}>{badge}</Badge></Group>
              : null  // Using null is cleaner than <></>
          }
        </StyledTextContainer>
      </StyledDiv>
    </Container>
  );
}
