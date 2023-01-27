import moment from "moment";
import React from "react";
import "../../Styles/Reports/MonthlyDistribution.css";
import doh from "../../Assets/logo/doh.png";
import zcmc from "../../Assets/logo/zcmc.png";
import { Box, Button, Container } from "@chakra-ui/react";

function MontlyDistribution(props) {
  return (
    <Box px={40}>
      <div className="container">
        <div className="top-text">
          <div className="header">
            <img
              src={zcmc}
              style={{
                width: "45px",
                height: "auto",
                float: "left",
                marginRight: "70px",
              }}
            />
            <p className="heading">
              Republic of the Philippines <br />
              Department of Health <br />
              ZAMBOANGA CITY MEDICAL CENTER <br />
              Dr. D. Evangelista St., Sta. Catalina, Zamboanga City, 7000
            </p>

            <img
              src={doh}
              style={{
                width: "60px",
                height: "auto",
                float: "right",
                marginLeft: "70px",
              }}
            />
          </div>
          <p className="title">
            MONTHLY DISTRIBUTION REPORT <br />
            {moment().format("MMMM YYYY")}
          </p>
          <div>
            <p className="office">
              Office/Agency: ZAMBOANGA CITY MEDICAL CENTER
              <br />
              Section/Unit: Material Management Section
            </p>
          </div>
        </div>
        {/* TABLE */}

        <div style={{ marginTop: "18px" }}>
          <table
            width="100%"
            style={{
              border: "1px solid gray",
              fontSize: "12px",
            }}
            className="table"
            cellPadding="5px"
          >
            <tr>
              <th rowSpan="2" align="left">
                Name of Item classification Distribution
              </th>
              <th rowSpan="2" width="50px">
                Units
              </th>
              <th rowSpan="2" width="70px">
                Beg. Balance Quantity on hand
              </th>
              <th rowSpan="2" width="70px">
                Items Rec'd during month
              </th>
              <th rowSpan="2" width="70px">
                Total
              </th>
              <th rowSpan="2" width="70px">
                Std Stock Level
              </th>
              <th colSpan={6} style={{ fontWeight: "700", letterSpacing: 1 }}>
                DISTRIBUTION / ISSUED TO
              </th>
              <th colSpan={2} width="100px"></th>
              <th rowSpan="2" width="100px">
                Total
              </th>
              <th rowSpan="2" width="100px">
                Balance <br />
                on hand
              </th>
            </tr>

            <tr align="center">
              {/* AREAS */}
              <th
                style={{
                  // writingMode: "vertical-rl",
                  // transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
                width="80px"
                height="85.2px"
              >
                Pharmacy
              </th>
              <th
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
                width="80px"
              ></th>
              <th
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
                width="80px"
              ></th>
              <th
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
                width="80px"
              ></th>
              <th
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
                width="80px"
              ></th>
              <th
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
                width="80px"
              ></th>{" "}
              <th
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
                width="80px"
              ></th>{" "}
              <th
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
                width="80px"
              ></th>
              {/* END AREAS */}
            </tr>

            {/* DATA */}
            {[...Array(40)].map((x, i) => (
              <tr align="center" justifyContent="center">
                <th
                  style={{
                    textAlign: "left",
                    justifyContent: "center",
                  }}
                >
                  Metoprolol 50mg (as tartrate), tab
                </th>
                <th>tab</th>
                <th>9,000</th>
                <th>9,000</th>
                <th>9,000</th>
                <th></th>
                <th>9,000</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>T</th>
                <th></th> <th> 9,000</th> <th></th>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </Box>
  );
}

export default MontlyDistribution;
