import React from "react";
import doh from "../../Assets/logo/doh.png";
import zcmc from "../../Assets/logo/zcmc.png";
import moment from "moment";

function BinCard(props) {
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
          style={{ width: "40px", float: "left", marginRight: "80px" }}
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
          style={{ width: "50px", float: "right", marginLeft: "80px" }}
        />
      </div>
      <div
        style={{
          width: "750px",
          margin: "auto",
          fontFamily: "Times New Roman",
        }}
      >
        <p style={{ float: "right", fontSize: "11px" }}>Appendix 9-4</p>
        <br />
        <p
          style={{
            fontWeight: "bold",
            fontSize: "15px",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          BIN CARD
        </p>
      </div>
      <div
        style={{
          padding: "20px",
          fontFamily: "Times New Roman",
          width: "850px",
          margin: "auto",
          paddingBottom: "80px",
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
              Item Name:
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
              Description: &nbsp;
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
          <div>
            <p
              style={{
                display: "inline",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              Unit of Measurement: &nbsp;
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
              S#.:{" "}
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
              Re-order Point:{" "}
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

      <table
        style={{
          width: "800px",
          borderCollapse: "collapse",
          border: "2px solid black",
          margin: "auto",
        }}
      >
        <tr
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "12px" }}
        >
          <td style={{ borderRight: "1px solid black", padding: "5px" }}>
            DATE
          </td>
          <td style={{ borderRight: "1px solid black", padding: "5px" }}>
            REF(PO#, INV./DR#, RIS#)
          </td>
          <td style={{ borderRight: "1px solid black", padding: "5px" }}>
            RECEIPT
          </td>
          <td style={{ borderRight: "1px solid black", padding: "5px" }}>
            ISSUED
          </td>
          <td>BALANCE</td>
        </tr>
        <tr>
          <td
            colSpan="5"
            style={{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              padding: "5px",
            }}
          ></td>
        </tr>
        <tr style={{ fontSize: "11px" }}>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              padding: "5px",
            }}
          >
            NAME
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              padding: "5px",
            }}
          >
            NAME
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              padding: "5px",
            }}
          >
            NAME
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              padding: "5px",
            }}
          >
            NAME
          </td>
          <td
            style={{
              borderBottom: "1px solid black",
              padding: "5px",
            }}
          >
            NAME
          </td>
        </tr>
        <tr>
          <td
            colSpan="2"
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              fontSize: "11px",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            Balance Carried Forward >>>>>
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          ></td>
          <td
            style={{
              borderRight: "1px solid black",
              padding: "5px",
            }}
          ></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default BinCard;
