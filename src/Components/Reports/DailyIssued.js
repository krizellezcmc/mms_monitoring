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
          fontSize: "15px",
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
            width: "80%",
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

                borderBottom: "1px solid black",
                paddingBottom: "7px",
              }}
            >
              ZAMBOANGA CITY MEDICAL CENTER
            </p>
          </div>
          <div>
            <p
              style={{
                display: "inline",

                fontWeight: "bold",
              }}
            >
              Fund Cluster: &nbsp;
            </p>
            <p
              style={{
                display: "inline",

                fontWeight: "bold",
                borderBottom: "1px solid black",
                paddingBottom: "7px",
              }}
            >
              &nbsp; &nbsp;Regular Income &nbsp; &nbsp;
            </p>
          </div>
        </div>
        <div
          style={{
            width: "20%",
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

                fontWeight: "bold",
              }}
            >
              Serial No.:{" "}
            </p>
            <p
              style={{
                display: "inline",

                fontWeight: "bold",
                borderBottom: "1px solid black",
                paddingBottom: "7px",
              }}
            >
              &nbsp; &nbsp;23-01-006&nbsp; &nbsp;
            </p>
          </div>
          <div>
            <p
              style={{
                display: "inline",

                fontWeight: "bold",
              }}
            >
              Date:{" "}
            </p>
            <p
              style={{
                display: "inline",

                fontWeight: "bold",
                borderBottom: "1px solid black",
                paddingBottom: "7px",
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
        cellPadding="5px"
      >
        <tr>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",

              fontFamily: "Times New Roman",
              fontStyle: "italic",
              textAlign: "center",
            }}
            colSpan="6"
          >
            To be filled up by the Supply and/or Property Division/Unit
          </td>
          <td
            style={{
              borderBottom: "1px solid black",

              fontFamily: "Times New Roman",
              fontStyle: "italic",
              textAlign: "center",
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
            }}
          >
            RIS No.
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              width: "10%",
            }}
          >
            Responsibility Center Code
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            Stock No.
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              width: "30%",
            }}
          >
            Item
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              width: "5%",
            }}
          >
            Unit
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              width: "8%",
            }}
          >
            Quantity Issued
          </td>

          <td
            style={{
              borderRight: "1px solid black",
              width: "15%",
            }}
          >
            Unit Cost
          </td>
          <td
            style={{
              // border: "1px solid black",
              width: "15%",
            }}
          >
            Amount
          </td>
        </tr>

        {/* DATA */}
        {[...Array(5)].map((x, i) => (
          <>
            <tr style={{ textAlign: "center", fontSize: "11px" }}>
              <td
                style={{
                  borderRight: "1px solid black",
                }}
              >
                23-01-040
              </td>
              <td
                style={{
                  borderRight: "1px solid black",
                }}
              >
                Ward 8
              </td>
              <td
                style={{
                  borderRight: "1px solid black",
                }}
              >
                OF-16-001
              </td>
              <td
                style={{
                  borderTop: "1px solid black",
                  borderRight: "1px solid black",
                  textAlign: "left",
                }}
              >
                Bond Paper, A4 Sub 20, 500's/ream
              </td>
              <td
                style={{
                  borderTop: "1px solid black",
                  borderRight: "1px solid black",
                }}
              >
                ream
              </td>
              <td
                style={{
                  borderTop: "1px solid black",
                  borderRight: "1px solid black",
                }}
              >
                5
              </td>
              <td
                style={{
                  borderTop: "1px solid black",
                  borderRight: "1px solid black",
                }}
              >
                00
              </td>
              <td
                style={{
                  borderTop: "1px solid black",
                }}
              >
                00
              </td>
            </tr>
          </>
        ))}

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
            xxxxxxxxxxxxxxxxxxxxxxxxx
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
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            colSpan="2"
            style={{
              border: "1px solid black",
              borderBottom: "0",
              borderLeft: "0",
            }}
          >
            Recapitulation:
          </td>
          <td
            colSpan="2"
            style={{
              borderRight: "1px solid black",
            }}
          ></td>

          <td
            colSpan="3"
            style={{
              border: "1px solid black",
              borderBottom: "0",
              borderLeft: "0",
            }}
          >
            {" "}
            Recapitulation:
          </td>
        </tr>
        <tr
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "11px" }}
        >
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderRight: "1px solid black",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            Stock No.
          </td>
          <td
            style={{
              border: "1px solid black",
              borderLeft: "0",
            }}
          >
            Quantity
          </td>
          <td
            colSpan="2"
            style={{
              borderRight: "1px solid black",
            }}
          ></td>

          <td
            style={{
              border: "1px solid black",
              borderLeft: "0",
              borderRight: "0",
            }}
          >
            Unit Cost
          </td>
          <td
            style={{
              border: "1px solid black",
            }}
          >
            Total Cost
          </td>
          <td
            style={{
              border: "1px solid black",
              borderLeft: "0",
              borderRight: "0",
            }}
          >
            UACS &nbsp; Object Code
          </td>
        </tr>

        {[...Array(5)].map((x, i) => (
          <tr style={{ textAlign: "center", fontSize: "11px" }}>
            <td
              style={{
                borderRight: "1px solid black",
              }}
            ></td>
            <td
              style={{
                borderLeft: "0",
                borderRight: "1px solid black",
              }}
            >
              S-16-11
            </td>
            <td
              style={{
                borderRight: "1px solid black",
              }}
            >
              1
            </td>
            <td
              colSpan="2"
              style={{
                borderRight: "1px solid black",
              }}
            ></td>

            <td></td>
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
          </tr>
        ))}

        <tr style={{ textAlign: "center", fontSize: "11px" }}>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          ></td>
          <td
            style={{
              borderRight: "1px solid black",
              textAlign: "center",
            }}
          >
            xxxxxxx
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              textAlign: "center",
            }}
          >
            xxxxxx
          </td>
          <td
            colSpan="2"
            style={{
              borderRight: "1px solid black",
            }}
          ></td>

          <td></td>
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
        </tr>

        <tr style={{ fontSize: "12px", fontFamily: "Times New Roman" }}>
          <td
            colSpan="5"
            style={{
              borderRight: "1px solid black",
              borderTop: "1px solid black",
            }}
          >
            <p>I hereby certify to the correctness of the above information.</p>
          </td>
          <td
            colSpan="3"
            style={{
              borderTop: "1px solid black",
            }}
          >
            <p>Posted by:</p>
          </td>
        </tr>
        <tr style={{ fontSize: "12px", fontFamily: "Times New Roman" }}>
          <td
            colSpan="5"
            style={{
              borderRight: "1px solid black",
            }}
          >
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
          <td colSpan="3" style={{}}>
            <br />
            <div style={{ float: "left", width: "60%", textAlign: "center" }}>
              <p style={{ borderTop: "1px solid black" }}>
                Signature over Printed Name of Designated Accounting Staff
              </p>
            </div>
            <div style={{ float: "right", width: "40%", textAlign: "center" }}>
              <hr
                style={{
                  width: "80px",
                  marginLeft: "20px",
                  borderTop: "1px solid black",
                }}
              />
              <p>
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
        <p style={{ fontSize: "10px", fontStyle: "italic" }}>
          (Adopted from Government Accounting Manual: Appendix 64)
        </p>
      </div>
    </div>
  );
}

export default DailyIssued;
