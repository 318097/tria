import { Text, Button, Grid } from "@radix-ui/themes";
import "./Home.scss";
import styled from "styled-components";

const StyledAssetDetailsCard = styled.div`
  color: gray;
  background-image: linear-gradient(168deg, #1a1a1a, #1a1a1a, #433fe5);
  border: 1px solid #3b3461;
  border-radius: 16px;
  padding: 16px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
  .row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
  }
  .price {
    font-size: 2rem;
    color: white;
    font-weight: 700;
  }
`;

const list = [
  {
    name: "USDC",
    price: "$10.094",
    subtext: "1 POL",
    chains: ["POL", "COS", "MOS", "POL", "COS", "MOS"],
    change: "+2.5%",
  },
  {
    name: "ETH",
    price: "$434.4",
    subtext: "2 POL",
    chains: ["POL", "COS", "MOS"],
  },
  {
    name: "UXY",
    price: "$15",
    subtext: "2 POL",
    chains: ["POL", "COS"],
  },
  {
    name: "USDC",
    price: "$10.094",
    subtext: "1 POL",
    chains: ["POL"],
  },
  {
    name: "ETH",
    price: "$434.4",
    subtext: "2 POL",
  },
  {
    name: "UXY",
    price: "$15",
    subtext: "2 POL",
  },
  {
    name: "USDC",
    price: "$10.094",
    subtext: "1 POL",
  },
  {
    name: "ETH",
    price: "$434.4",
    subtext: "2 POL",
  },
  {
    name: "UXY",
    price: "$15",
    subtext: "2 POL",
  },
];

export default function MyApp() {
  return (
    <section id="wallet">
      <div className="overlay">
        <div className="header-container">
          <div className="user-profile ghost">
            <span className="profile-image"></span>
            <span>thekaypo@tria</span>
            <span></span>
          </div>
          <div className="actions">
            <div className="copy-icon"></div>
            <div className="copy-icon"></div>
          </div>
        </div>
        <StyledAssetDetailsCard className="asset-details-card">
          <div>
            <div className="row">
              <div className="">Assets Up</div>
              <div className="pill">+2.5%</div>
            </div>
            <div className="row">
              <div className="price">$1838.83</div>
              <div className="reload-icon"></div>
            </div>
          </div>

          <Grid columns="2" gap="3" className="wallet-group">
            <Button size="3" radius="large" className="transparent center">
              Buy
            </Button>

            <Button size="3" radius="large" className="transparent center">
              Send
            </Button>
          </Grid>
        </StyledAssetDetailsCard>

        <h4 className="my">Crypto</h4>
        <div className="list-container">
          {list.map(({ name, price, subtext, chains = [], change }) => {
            const remainingChains = Math.max(chains.length - 2, 0);
            return (
              <div className="list-item ghost">
                <div className="icon"></div>
                <div className="details">
                  <div className="name">{name}</div>
                  <div className="chain-container">
                    {chains.slice(0, 2).map((chain) => {
                      return (
                        <div className="chain">
                          <span className="logo"></span>
                          <span className="name">{chain}</span>
                        </div>
                      );
                    })}
                    {remainingChains > 0 ? (
                      <div className="chain">
                        <span
                          className="name"
                          style={{ display: "flex" }}
                        >{`+${remainingChains}`}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="right-section">
                  <div className="flex">
                    {change ? <div className="pill">+2.5%</div> : null}
                    <div className="price">{price}</div>
                  </div>
                  <div className="subtext">{subtext}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="powered-by-container">
          <Text className="ghost">Open Tria</Text>
        </div>
      </div>
    </section>
  );
}
