import { Flex, Text, Button, Box, Grid, Callout } from "@radix-ui/themes";
import "./Login.scss";
import { useState } from "react";
import styled from "styled-components";

const StyledCreateAccount = styled.div`
  color: gray;
  h3 {
    font-family: Inter;
    font-size: 22px;
    font-weight: 600;
    color: #808080;
    margin-bottom: 20px;
  }
  .username-field {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    gap: 8px;
    input {
      flex-grow: 1;
      height: 48px;
      border-radius: 16px;
      outline: none;
      background: transparent;
      border: 1px solid #555;
      padding: 0px 12px;
      color: white;
      font-size: 1rem;
      transition: 0.4s;
      caret-color: #7f43ff99;
      &:focus {
        border-bottom-color: #7f43ff99;
      }
    }
    button {
      width: 100px;
      justify-content: center;
    }
  }
  .error-msg {
    color: #da4343;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
  }
  .pill-label {
    font-size: 0.8rem;
    margin: 10px 0;
  }
  .pill-container {
    display: flex;
    flex-direction: row;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    span {
      cursor: pointer;
      padding: 6px 16px;
      border-radius: 20px;
      border: 1px solid #4a4a4a;
      font-size: 0.8rem;
    }
  }
  .alert {
    padding: 12px;
    border: 1px solid #4a4a4a;
    border-radius: 8px;
    line-height: normal;
    font-size: 0.8rem;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      display: inline-block;
      position: absolute;
      width: 70px;
      height: 199.83px;
      opacity: 0.04;
      transform: rotate(45deg);
      z-index: 1;
      background: #d9d9d9;
      animation: animate 3s infinite ease-in-out;
      filter: blur(12px);
      top: -66.4px;
    }
  }

  @keyframes animate {
    from {
      left: calc(-100px);
    }
    to {
      left: calc(100% + 100px);
    }
  }
`;

export default function MyApp() {
  const [view, setView] = useState();

  const handleClick = () => {
    setView((prev) => !prev);
  };

  return (
    <section>
      <div className="title-container">
        <Text className="title">
          Login to <br />
          <strong>tria</strong> Demo
        </Text>
      </div>

      {view ? (
        <StyledCreateAccount
          direction="column"
          className="account-creation-container"
        >
          <h3>Create your Tria name</h3>
          <div className="username-field">
            <input type="text" />
            <Button className="primary">Next</Button>
          </div>
          <div>
            <span className="error-msg">Username not available</span>
          </div>

          <div className="pill-label">Recommended:</div>
          <div className="pill-container">
            <span className="dark">mehul123</span>
            <span className="dark">mmlakhanpal</span>
            <span className="dark">abfsdfc</span>
          </div>
          <div className="alert">
            <div>
              Your <strong style={{ color: "#c5c5c5" }}>@tria</strong> is like
              Gmail, for Web3. Pay, receive and log-in to apps on any device,
              and blockchain.
            </div>
          </div>
        </StyledCreateAccount>
      ) : (
        <Flex direction="column" className="account-creation-container">
          <Button className="primary">Continue with Google</Button>
          <Button className="dark">Continue with X (formerly Twitter)</Button>
          <Button className="dark" onClick={handleClick}>
            Continue with X (formerly Twitter)
          </Button>
          <div className="hr">
            <div />
            <span>OR</span>
            <div />
          </div>
          <Grid columns="2" gap="3" className="wallet-group">
            <Button size="3" radius="large" className="dark outline center">
              Metamask
            </Button>

            <Button size="3" radius="large" className="dark outline ">
              WalletConnect
            </Button>
          </Grid>
        </Flex>
      )}

      <div className="powered-by-container">
        <Text className="ghost">Powered by Tria</Text>
      </div>
    </section>
  );
}
