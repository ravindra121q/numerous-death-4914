import React from "react";
import "./Landing_page.css";

import { Box } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  </style>;

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
              <Link to="/pro">
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
      <div className="forth"></div>
      <hr />
      <a href="/">
        <div className="cl">
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e98fd147de5199a/631a53cd10c00a57bb0cd53d/birthday-flowers-hero-fy23-fall.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
        </div>

        <h3
          style={{
            backgroundImage:
              "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e98fd147de5199a/631a53cd10c00a57bb0cd53d/birthday-flowers-hero-fy23-fall.jpg?quality=75&auto=webp&optimize={medium}",
          }}
        >
          )
        </h3>
      </a>
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Send Flowers & Exclusive Gifts
      </h1>
      <div id="flowers">
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5eb232318d3a6d1e/637e8388deb37610ecbb8e31/flower-delivery-same-day-silo-167891-260x284.jpeg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Same-Day Flower Delivery</div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt26149ee749ecd0f3/62b5c27fa7c4490fd2ef03ef/magnificent-preserved-roses-silo-156623-260x284.jpeg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Love & Romance</div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt867d5477b7adc192/627be2023debbf3afdd2ea1e/get-well-flowers-146761-silo-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Get Well</div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt358c381bc15c10ef/63bdb18a2effe86502073b30/chocolate-covered-strawberries-delivery-silo-192546-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Chocolate Covered Strawberries</div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt180dd3fd2c5f4596/63bdb1a3ee0cf115ce1fc07c/just-because-flowers-silo-90577mprsv1-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Just Because</div>
        </div>
      </div>
      {/* !fdsfsfsssssssssssssssssss */}
      <div id="image1">
        <a href="/">
          <img
            src="https://awesomescreenshot.s3.amazonaws.com/image/4106415/36363703-2d60483f21aed403e26c7b26f9c8c7d2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20230122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230122T055725Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=eba401ec2a6024b6d4e4d5d94f82590a49103fe5c7855d8e72cec417e18c7522"
            alt=""
          />
        </a>
      </div>
      {/* send
       */}
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Explore Our Self-Care Essentials
      </h1>
      <div id="flowers1">
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt83c25a21462cccea/63a61e2e9233961262fbbcfe/spa-gift-basket-silo-mk012144-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Spa Gifts</div>
        </div>

        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8ccd8ba5f57bb6c5/63a61e6a66600623830ad5b8/candle-gifts-lanterns-silo-mk021324-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Gifts Under $25</div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt358c381bc15c10ef/63bdb18a2effe86502073b30/chocolate-covered-strawberries-delivery-silo-192546-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Chocolate Covered Strawberries</div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0c60554654188a74/63a61ee81d30ec7c2c531c79/zen-gifts-for-relaxation-silo-mkq016474-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>

          <div>Zen & Relaxation </div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9f97ed604bf1a128/63a61f39609d40109bf54fe8/lavender-flowers-gifts-silo-155227-260x284.jpg?quality=70&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Lavendra & Gifts</div>
        </div>
        <div>
          <a href="/">
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt590656ac79c533bf/63a630b99233961262fbbd0a/cozy-comfort-gifts-silo-mk005330-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
          </a>
          <div>Cozy Comfort</div>
        </div>
      </div>
      {/* !fdsfsfsssssssssssssssssss */}

      <div className="cc">
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt85b225c8e442a874/63c87022a1583f4c85f81a92/harry-and-david-gift-baskets-gourmet-food-tier-valentines-fy23.jpg?quality=60&auto=webp&optimize={medium}"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt85b225c8e442a874/63c87022a1583f4c85f81a92/harry-and-david-gift-baskets-gourmet-food-tier-valentines-fy23.jpg?quality=60&auto=webp&optimize={medium}"
            alt=""
          />
        </div>
      </div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Trending Flowers & Gifts
      </h1>
      <div className="trending">
        <div className="mydiv">
          <img
            src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipez.jpg?quality=75&auto=webp&optimize={medium}"
            alt="ho"
          />
          <p>Floral Embrance</p>
          <p>Starting From $39.99</p>
        </div>
        <div className="mydiv">
          <img
            src="https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlz.jpg?quality=75&auto=webp&optimize={medium}"
            alt="ho"
          />
          <p>Daydream Bouquet</p>
          <p>Starting From $54.99</p>
        </div>
        <div className="mydiv">
          <img
            src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/90925mpuv5ch29z.jpg?quality=75&auto=webp&optimize={medium}"
            alt="ho"
          />
          <p>Two Dozen Assorte.</p>
          <p>Starting From $69.99</p>
        </div>
        <div className="mydiv">
          <img
            src="https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191252xlz.jpg?quality=75&auto=webp&optimize={medium}"
            alt="ho"
          />
          <p>Garden of Gendeu</p>
          <p>Starting From $49.99</p>
        </div>
        <div className="mydiv">
          <img
            src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/90926mrdv4ch31z.jpg?quality=75&auto=webp&optimize={medium}"
            alt="ho"
          />
          <p>Red Rose</p>
          <p>Starting From $39.99</p>
        </div>
      </div>
      <div className="g">
        <a href="/">
          <img
            src="https://awesomescreenshot.s3.amazonaws.com/image/4106415/36365250-ec87e47936390f52bf97303a1c5f9a25.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20230122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230122T085849Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=0b2a57b0c921ef74b2985b9fa8be90f961c241d04e3aa9ee78a7568621eac863"
            alt="hi"
          />
        </a>
      </div>
      <h1 style={{ textAlign: "center" }}>
        Background Image Share Your #MadeMeSmile Flowers Moment
      </h1>
      <div className="new">
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0b835a6038f0bf1e/63ca15d9be10fd14ecb46303/ugc-image-sweetheart-romance.jpg?quality=70&auto=webp&optimize={medium}"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltad263f23a97089c1/63ca16862eab183f8e9d0347/ugc-image-valentines-assorted-roses.jpg?quality=70&auto=webp&optimize={medium}"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt968f9f82346049d8/63ca176d5156964aea4350af/ugc-image-straight-from-the-heart.jpg?quality=70&auto=webp&optimize={medium}"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt6304e56adcdd3acc/63ca1810e6cd4a7779d9fc1a/ugc-image-always-on-my-mind.jpg?quality=70&auto=webp&optimize={medium}"
            alt=""
          />
        </div>
        {/* feedback */}
      </div>
      <div className="customer">
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4c9be4e2d955776a/602a81580aba282006983f75/hp-reviews-final-167891.png?quality=70&auto=webp&optimize={medium}"
            alt=""
          />
          <h4>★ ★ ★ ★ ★</h4>
          <h4>Beautiful</h4>
          <p>
            "I brought these for my Nana's birthday she said they were amazingly
            beautiful
          </p>
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2b874f93791fce4a/62b09064482ba357e65ddbe8/web_icons_125x125_ocean_breeze_orchids.png?quality=70&auto=webp&optimize={medium}"
            alt=""
          />
          <h4>★ ★ ★ ★ ★</h4>
          <h4>est Flowers</h4>
          <p>
            "I brought these for my Nana's birthday she said they were amazingly
            beautiful
          </p>
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltfff372650000728b/6259ada700a8bb4b77960c3b/web_icons_125x125_classic_budding_rose.png?quality=70&auto=webp&optimize={medium}"
            alt=""
          />
          <h4>★ ★ ★ ★ ★</h4>
          <h4>Very Happy</h4>
          <p>
            "I brought these for my Nana's birthday she said they were amazingly
            beautiful
          </p>
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt854645311f2a8ec4/621cf518ba043c4a2c4a9a54/web_icons_125x125_Gourmet_Drizzled_Berries-v2.png?quality=70&auto=webp&optimize={medium}"
            alt=""
          />
          <h4>★ ★ ★ ★ ★</h4>
          <h4>Sweet Anniversary</h4>
          <p>
            "I brought these for my Nana's birthday she said they were amazingly
            beautiful
          </p>
        </div>
      </div>

      <div className="footer" style={{ backgroundColor: "blue" }}>
        <div>
          <a href="">
            <h4>MORE WAYS TO SHOP</h4>
          </a>

          <a href="">
            <h3>Flower Arrangements</h3>
          </a>
          <a href="">
            <h3>Flower Arrangements</h3>
          </a>
          <a href="">
            <h3>Symthay Flowers</h3>
          </a>
          <a href="">
            <h3>Roses</h3>
          </a>
          <a href="">
            <h3>Site</h3>
          </a>
          <a href="">
            <h3>Valentines Day</h3>
          </a>
          <a href="">
            <h3>International Flowers</h3>
          </a>
          <a href="">
            <h3>Plants</h3>
          </a>
          <a href="">
            <h3>Gifts</h3>
          </a>
          <a href="">
            <h3>Flower travel</h3>
          </a>
          <a href="">
            <h3>Flower find</h3>
          </a>
          <a href="">
            <h3>Flower Corporate</h3>
          </a>
          <a href="">
            <h3>Flower Marketplace seller</h3>
          </a>
          <a href="">
            <h3>Flower same day</h3>
          </a>
          <a href="">
            <h3>Flower Day</h3>
          </a>
        </div>
        <div>
          <a href="">
            <h4>MORE WAYS TO SHOP</h4>
          </a>

          <a href="">
            <h3>Symthay Flowers</h3>
          </a>
          <a href="">
            <h3>Roses</h3>
          </a>
          <a href="">
            <h3>Site</h3>
          </a>
          <a href="">
            <h3>Valentines Day</h3>
          </a>
          <a href="">
            <h3>International Flowers</h3>
          </a>
          <a href="">
            <h3>Plants</h3>
          </a>
          <a href="">
            <h3>Gifts</h3>
          </a>
          <a href="">
            <h3>Flower travel</h3>
          </a>

          <a href="">
            <h3>Flower Day</h3>
          </a>
        </div>
        <div>
          <a href="">
            <h4>MORE WAYS TO SHOP</h4>
          </a>

          <a href="">
            <h3>Flower Arrangements</h3>
          </a>
          <a href="">
            <h3>Flower Arrangements</h3>
          </a>
          <a href="">
            <h3>Symthay Flowers</h3>
          </a>
          <a href="">
            <h3>Roses</h3>
          </a>
          <a href="">
            <h3>Site</h3>
          </a>
          <a href="">
            <h3>Valentines Day</h3>
          </a>
          <a href="">
            <h3>International Flowers</h3>
          </a>
          <a href="">
            <h3>Plants</h3>
          </a>
          <a href="">
            <h3>Gifts</h3>
          </a>
          <a href="">
            <h3>Flower travel</h3>
          </a>
          <a href="">
            <h3>Flower find</h3>
          </a>
          <a href="">
            <h3>Flower Corporate</h3>
          </a>
          <a href="">
            <h3>Flower Marketplace seller</h3>
          </a>
          <a href="">
            <h3>Flower same day</h3>
          </a>
          <a href="">
            <h3>Flower Day</h3>
          </a>
        </div>
        <div>
          <a href="">
            <h4>MORE WAYS TO SHOP</h4>
          </a>

          <a href="">
            <h3>Flower Arrangements</h3>
          </a>
          <a href="">
            <h3>Flower Arrangements</h3>
          </a>
          <a href="">
            <h3>Symthay Flowers</h3>
          </a>
          <a href="">
            <h3>Roses</h3>
          </a>

          <a href="">
            <h3>Flower Corporate</h3>
          </a>
          <a href="">
            <h3>Flower Marketplace seller</h3>
          </a>
          <a href="">
            <h3>Flower same day</h3>
          </a>
          <a href="">
            <h3>Flower Day</h3>
          </a>
        </div>
      </div>
      <h4
        style={{
          color: "white",
          textAlign: "center",
          backgroundColor: "blue",
          paddingTop: "4",
        }}
      >
        © 2023 1-800-Flowers.com, Inc., Jericho, NY Family of BrandsTerms of
        Use-Privacy Notice-Accessibility Statement
      </h4>
    </div>
  );
};

export default LandingPage;
