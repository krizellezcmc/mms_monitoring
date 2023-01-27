import React from "react";
import doh from "../../Assets/logo/doh.png";
import zcmc from "../../Assets/logo/zcmc.png";
import moment from "moment";
import { Button } from "@chakra-ui/react";

function DailyIssued(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Times New Roman",
        }}
      >
        <img
          src={zcmc}
          style={{ width: "40px", float: "left", marginRight: "30px" }}
        />
        <div
          style={{
            textAlign: "center",
            lineHeight: "15px",
            fontSize: "12px",
          }}
        >
          <p>Republic of the Philippines</p>
          <p>Department of Health</p>
          <p style={{ fontWeight: "bold" }}>ZAMBOANGA CITY MEDICAL CENTER</p>
          <p>Dr. D. Evangelista St., Sta. Catalina, Zamboanga City, 7000</p>
        </div>
        <img
          src={doh}
          style={{ width: "50px", float: "right", marginLeft: "30px" }}
        />
      </div>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
          marginTop: "10px",
          fontFamily: "Times New Roman",
        }}
      >
        REPORT OF SUPPLIES AND MATERIALS ISSUED
      </p>
      <div
        style={{
          padding: "20px",
          fontFamily: "Times New Roman",
          width: "850px",
          margin: "auto",
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            width: "70%",
            float: "left",
            padding: "3px",
            // border: "2px solid red",
            lineHeight: "20px",
          }}
        >
          <div>
            <p
              style={{
                display: "inline",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              Entity Name:
            </p>{" "}
            &nbsp;
            <p
              style={{
                display: "inline",
                fontWeight: "bold",
                fontSize: "11px",
                borderBottom: "1px solid black",
                paddingBottom: "8px",
              }}
            >
              ZAMBOANGA CITY MEDICAL CENTER
            </p>
          </div>
          <div>
            <p
              style={{
                display: "inline",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              Fund Cluster: &nbsp;
            </p>
            <p
              style={{
                display: "inline",
                fontSize: "11px",
                fontWeight: "bold",
                borderBottom: "1px solid black",
                paddingBottom: "8px",
              }}
            >
              &nbsp; &nbsp;Regular Income &nbsp; &nbsp;
            </p>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            float: "left",
            padding: "3px",
            // border: "2px solid red",
            lineHeight: "20px",
          }}
        >
          <div>
            <p
              style={{
                display: "inline",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              Serial No.:{" "}
            </p>
            <p
              style={{
                display: "inline",
                fontSize: "11px",
                fontWeight: "bold",
                borderBottom: "1px solid black",
                paddingBottom: "8px",
              }}
            >
              &nbsp; &nbsp;23-01-006&nbsp; &nbsp;
            </p>
          </div>
          <div>
            <p
              style={{
                display: "inline",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              Date:{" "}
            </p>
            <p
              style={{
                display: "inline",
                fontSize: "11px",
                fontWeight: "bold",
                borderBottom: "1px solid black",
                paddingBottom: "8px",
              }}
            >
              &nbsp; &nbsp;{moment().format("LL")}&nbsp; &nbsp;
            </p>
          </div>
        </div>
      </div>
      <br />
      <table
        style={{
          width: "800px",

          margin: "auto",
          border: "1px solid black",
        }}
      >
        <tr>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              fontSize: "11px",
              fontFamily: "Times New Roman",
              fontStyle: "italic",
              textAlign: "center",
              padding: "5px",
            }}
            colSpan="6"
          >
            To be filled up by the Supply and/or Property Division/Unit
          </td>
          <td
            style={{
              borderBottom: "1px solid black",
              fontSize: "11px",
              fontFamily: "Times New Roman",
              fontStyle: "italic",
              textAlign: "center",
              padding: "5px",
            }}
            colSpan="2"
          >
            To be filled up by the Accounting Division/Unit
          </td>
        </tr>
        <tr
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "11px" }}
        >
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              padding: "5px",
            }}
          >
            RIS No.
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              width: "10%",
              padding: "5px",
            }}
          >
            Responsibility Center Code
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              padding: "5px",
            }}
          >
            Stock No.
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              width: "30%",
              padding: "5px",
            }}
          >
            Item
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              width: "5%",
              padding: "5px",
            }}
          >
            Unit
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              width: "8%",
              padding: "5px",
            }}
          >
            Quantity Issued
          </td>

          <td
            style={{
              borderRight: "1px solid black",
              width: "15%",
              padding: "5px",
            }}
          >
            Unit Cost
          </td>
          <td
            style={{
              // border: "1px solid black",
              width: "15%",
              padding: "5px",
            }}
          >
            Amount
          </td>
        </tr>
        <tr style={{ textAlign: "center", fontSize: "11px" }}>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            23-01-040
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            Ward 8
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            OF-16-001
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              textAlign: "left",
              padding: "5px",
            }}
          >
            Bond Paper, A4 Sub 20, 500's/ream
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            ream
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            5
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            00
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              padding: "5px",
            }}
          >
            00
          </td>
        </tr>
        <tr style={{ textAlign: "center", fontSize: "11px" }}>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            23-01-040
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            Ward 8
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            OF-16-001
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              textAlign: "left",
              padding: "5px",
            }}
          >
            Bond Paper, A4 Sub 20, 500's/ream
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            ream
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            5
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            00
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              padding: "5px",
            }}
          >
            00
          </td>
        </tr>
        <tr style={{ textAlign: "center", fontSize: "11px" }}>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            23-01-040
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            Ward 8
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            OF-16-001
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              textAlign: "left",
              padding: "5px",
            }}
          >
            Bond Paper, A4 Sub 20, 500's/ream
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            ream
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            5
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            00
          </td>
          <td
            style={{
              borderTop: "1px solid black",
              padding: "5px",
            }}
          >
            00
          </td>
        </tr>

        <tr>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              padding: "0 0 5px 0",
              textAlign: "center",
            }}
            colSpan="2"
          >
            xxxxxxxxxxxxxxxxxxxxxxxx
          </td>

          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderTop: "1px solid black",
            }}
          ></td>
        </tr>
        {/* HEADER */}
        <tr
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "11px" }}
        >
          <td></td>
          <td
            colSpan="2"
            style={{
              border: "2px solid black",
              padding: "5px",
            }}
          >
            Recapitulation:
          </td>
          <td></td>
          <td></td>
          <td
            colSpan="3"
            style={{
              border: "2px solid black",
              padding: "5px",
            }}
          >
            {" "}
            Recapitulation:
          </td>
        </tr>
        <tr
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "11px" }}
        >
          <td></td>
          <td
            style={{
              border: "1px solid black",
              padding: "5px",
            }}
          >
            Stock No.
          </td>
          <td
            style={{
              border: "1px solid black",
              padding: "5px",
            }}
          >
            Quantity
          </td>
          <td></td>
          <td></td>
          <td
            style={{
              border: "1px solid black",
              padding: "5px",
            }}
          >
            Unit Cost
          </td>
          <td
            style={{
              border: "1px solid black",
              padding: "5px",
            }}
          >
            Total Cost
          </td>
          <td
            style={{
              border: "1px solid black",
              padding: "5px",
            }}
          >
            UACS &nbsp; Object Code
          </td>
        </tr>
        {/* DATA */}
        <tr style={{ textAlign: "center", fontSize: "11px" }}>
          <td></td>
          <td
            style={{
              borderRight: "1px solid black",
              borderLeft: "1px solid black",
              padding: "5px",
            }}
          >
            S-16-11
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            1
          </td>
          <td colSpan="2"></td>

          <td
            style={{
              borderLeft: "1px solid black",
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
        </tr>
        <tr style={{ textAlign: "center", fontSize: "11px" }}>
          <td></td>
          <td
            style={{
              borderRight: "1px solid black",
              borderLeft: "1px solid black",
              padding: "5px",
              textAlign: "center",
            }}
          >
            xxxxxxx
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              textAlign: "center",
            }}
          >
            xxxxxx
          </td>
          <td colSpan="2"></td>

          <td
            style={{
              borderLeft: "1px solid black",
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
        </tr>

        <tr style={{ fontSize: "11px", fontFamily: "Times New Roman" }}>
          <td
            colSpan="6"
            style={{
              borderRight: "1px solid black",
              borderTop: "1px solid black",
              padding: "5px",
            }}
          >
            <p>I hereby certify to the correctness of the above information.</p>
            <br />
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              JOHN MARY C. STA. TERESA
            </p>
            <p style={{ textAlign: "center", textDecoration: "underline" }}>
              Statistician II MMS Officer-In-Charge
            </p>
            <br />
            <p style={{ textAlign: "center" }}>
              Signature over Printed name of Supply and/or Property Custodian
            </p>
          </td>
          <td
            colSpan="2"
            style={{
              borderTop: "1px solid black",
              padding: "5px",
            }}
          >
            <p>Posted by:</p>
            <br />
            <br />
            <div style={{ float: "left", width: "60%", textAlign: "center" }}>
              <p style={{ borderTop: "1px solid black" }}>
                Signature over Printed Name of Designated Accounting Staff
              </p>
            </div>
            <div style={{ float: "right", width: "40%", textAlign: "center" }}>
              <p style={{ textDecoration: "overline" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </td>
        </tr>
      </table>
      <div
        style={{
          width: "800px",
          margin: "auto",
          fontFamily: "Times New Roman",
        }}
      >
        <p style={{ fontSize: "11px", fontStyle: "italic" }}>
          (Adopted from Government Accounting Manual: Appendix 64)
        </p>
      </div>
    </div>
  );
}

export default DailyIssued;
