import React from "react";
import "./Navbar.css";
import Grid from "@material-ui/core/Grid";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Navbar() {
  return (
    <div>
      <section>
        <header className="nav_header">
          <Grid container justifyContent="space-evenly">
            <Grid className="main-container" item xs={12} md={6} lg={12}>
              <div>
                <img className="logo" src="./Assets/logo.png" alt="" />
              </div>
              <div className="main-div">
                <div>
                  <ul className="text">
                    <li>
                      <a className="text-one" href="">
                        Migration
                      </a>
                    </li>
                    <li>
                      <a className="text-one" href="">
                        Tree house
                      </a>
                    </li>
                    <li>
                      <a className="text-one" href="">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a className="text-one" href="">
                        Banana Bar
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="navIcons">
                  <InstagramIcon className="icons" />
                  <TwitterIcon className="icons" />
                  <FacebookIcon className="icons" />
                  <YouTubeIcon className="icons" />
                </div>
                <div>
                  <button className="btn">
                    {" "}
                    <img
                      className="nav-img"
                      src="./Assets/image3.png"
                      alt=""
                    />{" "}
                    Connect MetaMask
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </header>
      </section>
    </div>
  );
}

export default Navbar;
