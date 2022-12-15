import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
background-color: #0b0b0b;
display: grid;
place-items: center;
`;

const Load = styled.div`
border: 16px solid #e3e3e3;
border-top: 16px solid #3498db;
border-radius: 50%;
width: 140px;
height: 140px;
animation: spin 1s linear infinite;

@keyframes spin {
0% {
  transform: rotate(0deg);
}
50% {
  transform: rotate(180deg);
}

100% {
  transform: rotate(360deg);
}
}
`;

const Loader = () => {
  return (
    <Wrapper>
      <Load>
        <div class="loader-wrapper">
          <div class="loader"></div>
        </div>
      </Load>
    </Wrapper>
  );
};

export default Loader;
