import styled from "styled-components";

import * as tokens from "design-tokens-local";

const Text = styled.p`
  color: ${tokens.ColorTextActionActive};
`;

function App() {
  return (
    <main>
      <Text>design-tokens-local JS</Text>
    </main>
  );
}

export default App;
