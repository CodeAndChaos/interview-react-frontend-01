import React, { useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.button`
  padding: 1rem;
`;
const Detail = styled.div`
  padding: 1rem;
`;

interface Payload {
  title: string;
  content: string;
}

export const MasterDetail: React.FC<{ payload: Payload[] }> = ({
  payload = [],
}) => {
  const [activeItem, setActiveItem] = useState<undefined | number>();
  let detail = "";
  if (activeItem !== undefined) {
    detail = payload[activeItem].content;
  }

  return (
    <Grid>
      <Flex>
        {payload.map((val, indx) => (
          <Item key={indx} onClick={() => setActiveItem(indx)}>
            {val.title}
          </Item>
        ))}
      </Flex>
      <Detail>{detail}</Detail>
    </Grid>
  );
};
