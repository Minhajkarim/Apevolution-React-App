import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Feature.css";
function Feature() {
  return (
    <div className="main_div">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item lg={7}>
          <h1 className="text_feture">Previously Featured On</h1>
          <div>
            <ul className="img-div">
              <li>
                <img className="fec-img" src="./Assets/image12.png" alt="" />
              </li>
              <li>
                <img className="fec-img" src="./Assets/image13.png" alt="" />
              </li>
              <li>
                <img className="fec-img" src="./Assets/image14.png" alt="" />
              </li>
            </ul>
          </div>
          <h2 className="fec-text">
            What’s Coming in the <br /> Apevolution Club Collection?
          </h2>
          <div>
            <div className="fec-div">
              <button className="fec_btn">VIew WhItepaper</button>
              <button className="fec_btn">
                <img width="18px" src="./Assets/image10.png" alt="" />
                Join Our Discord
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Feature;