import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const App = ({ className }) => (
  <div className={className}>Hello Styled Components</div>
);

const StyledApp = styled(App)`
  background: #eee;
`;

render(<StyledApp />, document.querySelector("#app"));
