import React from "react";
import { Box } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

import "../pages/Landing_page.css";
const NavBar = () => {
  return (
    <div>
      <Box bg="blue" pl="-10" w="100%" p={4} color="blue">
        <div>
          <span style={{ "padding-left": "100px", color: "white" }}>
            <a href="./Landing_page.jsx">Corporate Gifts</a>
          </span>
          <span style={{ "padding-left": "12px", color: "white" }}>
            <a href="/">Store Locator</a>
          </span>
          <Menu
            style={{
              bgColor: "blue",
              W: "8%",
              border: "none",
              bR: "1px",
              "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              fontFamily: "poppins",
            }}
          >
            <button>
              <MenuButton
                id="btn"
                style={{
                  bg: "blue",
                  border: "none",
                  background: "blue",
                  color: "white",
                  "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  bgColor: "white",
                }}
              >
                <h1
                  id="myID"
                  style={{
                    fontSize: "12px",
                    borderBlockColor: "blue",
                    border: "none",
                    padding: "0px",
                  }}
                >
                  International Delivery
                </h1>
              </MenuButton>
            </button>
            <MenuList
              style={{
                bg: "red",
                W: "10%",
                border: "none",

                bgColor: "white",
              }}
            >
              <MenuItem
                minH="30px"
                borderRadius="15px"
                p={8}
                maxW="80%"
                justifyItems="center"
              >
                <SimpleGrid
                  columns={2}
                  spacingX="40px"
                  spacingY="20px"
                  style={{
                    color: "green",
                    fontSize: "12px",
                  }}
                >
                  <Box height="100%" W={8} value="Australia">
                    <img
                      src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/australia.gif"
                      alt="ih"
                      style={{
                        height: "60%",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    />
                    Australia
                  </Box>
                  <Box height="60%" W={4}>
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/ireland.gif"
                        alt="ih"
                        style={{
                          height: "100%",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      />
                      Ireland
                    </span>
                  </Box>
                  <Box height="60%" W={4}>
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/brazil.gif"
                        alt="ih"
                        style={{
                          height: "100%",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      />
                      Brazil
                    </span>
                  </Box>
                  <Box height="60%" W={4}>
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/italy.gif"
                        alt="ih"
                        style={{
                          height: "100%",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      />
                      Canada
                    </span>
                  </Box>
                  <Box height="60%" W={4}>
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/italy.gif"
                        alt="ih"
                        style={{
                          height: "100%",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      />
                      Canada
                    </span>
                  </Box>
                  <Box height="60%" W={4}>
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/italy.gif"
                        alt="ih"
                        style={{
                          height: "100%",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      />
                      Canada
                    </span>
                  </Box>
                </SimpleGrid>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <div id="second">
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt13b0f02cd71877df/5f08974a8b0e59084c9f7570/hd-logo-v3.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltac334446d6f9e89c/5f96fc4f2425cd7a8af6845e/pmall_svg-logo-v2.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltf0b1021465476e4f/5f08974b0d1d2008538ce15a/SharisLogo_r.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltac303abaae751c40/5f08974af394777f87099a07/18b-logo-v2.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt71adcb0696952e83/5f08974baa5d1801639286b4/sch-logo-v2.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltef2e14ec247ab827/5f08974a2cd8e87f92bdd257/fb-logo-v2.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blte1e2eb25cfd09fb6/5f08974a91afb901b86d5251/cco-logo-v2.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltf9903ccf2408c217/5f0897552cd8e87f92bdd25b/tpf-logo-v2.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt7ef824d3f9f5074d/5f0897558b0e59084c9f7574/wlf-logo-v2.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blta2ba2ac7606f6c15/5f08974bceebbf7e87c30215/sy-logo-v2.svg?height=32&width=78"
            alt="123"
          />
        </a>
        <a href="/">
          <img
            src="https://images.contentstack.io/v3/assets/blt0281495b20b504a0/blta4f709f645453ff0/61b4eeeea000c90ecc6e15bd/VC_Logo_w_tag.svg?height=32&width=78"
            alt="123"
          />
        </a>
      </div>
      <div id="third">
        <div className="logo">
          <img
            src="https://i.ibb.co/tmRLHVG/Flowerpot.png"
            alt="hi"
            style={{ width: "200", height: "89px" }}
          />
        </div>
        <input type="text" placeholder="Enter Product Name" />
        <button>SEARCH</button>
        <div className="sr">
          <div>
            <a href="">
              <Link to="../pages/Product_page.jsx">
                <img
                  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg"
                  alt="hi"
                />
              </Link>
            </a>
            <div>Sign In</div>
          </div>
          <div>
            <a href="/">
              <img
                src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg?height=25&width=44"
                alt="hi"
              />
            </a>
            <div>My Orders </div>
          </div>
          <div>
            <a href="/">
              <img
                src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44"
                alt="hi"
              />
            </a>
            <div>Cart</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
