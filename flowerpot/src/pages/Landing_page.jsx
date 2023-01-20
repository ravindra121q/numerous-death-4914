import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Img,
  textDecoration,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
const Landing_page = () => {
  const menu = () => {};
  return (
    <div>
      <Box bg="blue" pl="-10" w="100%" p={4} color="blue">
        <div>
          <span style={{ "padding-left": "100px", color: "white" }}>
            <a href="">Corporate Gifts</a>
          </span>
          <span style={{ "padding-left": "12px", color: "white" }}>
            <a href="">Store Locator</a>
          </span>
          <Menu style={{ bg: "red", W: "10%" }}>
            <button>
              <MenuButton style={{ "backGround-color": "white" }}>
                International Delivery
              </MenuButton>
            </button>
            <MenuList>
              <MenuItem
                minH="30px"
                borderRadius="15px"
                p={8}
                maxW="50%"
                justifyItems="center"
              >
                <SimpleGrid
                  columns={2}
                  spacingX="40px"
                  spacingY="20px"
                  style={{
                    color: "red",
                  }}
                >
                  <Box height="40px" W={4}>
                    <img
                      src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/australia.gif"
                      alt="ih"
                      style={{
                        height: "100%",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    />
                    Fluffybuns
                  </Box>
                  <Box bg="tomato" height="40px">
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/australia.gif"
                        alt="ih"
                        style={{ height: "100%" }}
                      />
                      <h1>Fluffybuns the Destroyer</h1>
                    </span>
                  </Box>
                  <Box bg="tomato" height="40px">
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/australia.gif"
                        alt="ih"
                        style={{ height: "100%" }}
                      />
                      <h1>Fluffybuns the Destroyer</h1>
                    </span>
                  </Box>
                  <Box bg="tomato" height="40px">
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/australia.gif"
                        alt="ih"
                        style={{ height: "100%" }}
                      />
                      <h1>Fluffybuns the Destroyer</h1>
                    </span>
                  </Box>
                  <Box bg="tomato" height="40px">
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/australia.gif"
                        alt="ih"
                        style={{ height: "100%" }}
                      />
                      <h1>Fluffybuns the Destroyer</h1>
                    </span>
                  </Box>
                  <Box bg="tomato" height="40px">
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/australia.gif"
                        alt="ih"
                        style={{ height: "100%" }}
                      />
                      <h1>Fluffybuns the Destroyer</h1>
                    </span>
                  </Box>
                  <Box bg="tomato" height="40px">
                    <span>
                      <img
                        src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/banners/international/flags/australia.gif"
                        alt="ih"
                        style={{ height: "100%" }}
                      />
                    </span>
                  </Box>
                </SimpleGrid>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </div>
  );
};

export default Landing_page;
