import React from "react";
import doh from "../../Assets/logo/doh.png";
import zcmc from "../../Assets/logo/zcmc.png";

function DirectPurchase(props) {
  return (
    <div style={{ margin: "auto", padding: "0 30px" }}>
      <table style={{ margin: "auto", width: "100%" }} cellPadding="5px">
        <tr>
          <td style={{ border: "1px solid black" }}>
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
                style={{ width: "40px", float: "left", marginRight: "100px" }}
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
                <p style={{ fontWeight: "bold" }}>
                  ZAMBOANGA CITY MEDICAL CENTER
                </p>
                <p>
                  Dr. D. Evangelista St., Sta. Catalina, Zamboanga City, 7000
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Direct Purchase and Issuance of Supplies <br />
                  during the Month of JANUARY 2022
                </p>
              </div>
              <img
                src={doh}
                style={{ width: "50px", float: "right", marginLeft: "100px" }}
              />
            </div>
          </td>
        </tr>
      </table>
      <table
        style={{
          margin: "auto",
          width: "100%",
          border: "1px solid black",
          fontSize: "11px",
          textAlign: "center",
        }}
        cellPadding="5px"
      >
        <tr>
          <td rowSpan="2" style={{ borderRight: "1px solid black" }}>
            Obligation
          </td>
          <td rowSpan="2" style={{ borderRight: "1px solid black" }}>
            RIS NO.
          </td>
          <td rowSpan="2" style={{ borderRight: "1px solid black" }}>
            Name of Creditors
          </td>
          <td rowSpan="2" style={{ borderRight: "1px solid black" }}>
            P.O NO.
          </td>
          <td rowSpan="2" style={{ borderRight: "1px solid black" }}>
            Amount
          </td>
          <td colSpan="13" style={{ borderBottom: "1px solid black" }}>
            TRANSFER&nbsp;TO
          </td>
        </tr>
        <tr>
          <td style={{ borderRight: "1px solid black" }}>CSS</td>
          <td style={{ borderRight: "1px solid black" }}>EFM</td>
          <td style={{ borderRight: "1px solid black" }}>
            Birthing Clinic
          </td>{" "}
          <td style={{ borderRight: "1px solid black" }}>Laboratory</td>
          <td style={{ borderRight: "1px solid black" }}>
            Nutrition and Dietics
          </td>
          <td style={{ borderRight: "1px solid black" }}>OB-Gyne Department</td>
          <td style={{ borderRight: "1px solid black" }}>CAO Office</td>
          <td style={{ borderRight: "1px solid black" }}>Nuclear Medicine</td>
          <td style={{ borderRight: "1px solid black" }}>WCPU</td>
          <td style={{ borderRight: "1px solid black" }}>Rehab Center</td>{" "}
          <td style={{ borderRight: "1px solid black" }}>OPD Chief Office</td>
          <td style={{ borderRight: "1px solid black" }}>Surgery</td>
          <td>Surgery Department</td>
        </tr>
        {[...Array(40)].map((x, i) => (
          <tr>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            >
              PHIC/MOOE
            </td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            >
              D-22-01-001
            </td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            >
              RNA Medical Trading
            </td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            >
              21-1-1088
            </td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            >
              444,160.00
            </td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            >
              446,160.00
            </td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            ></td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            >
              446,160.00
            </td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            ></td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            ></td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            ></td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            >
              446,160.00
            </td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            ></td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            ></td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            >
              446,160.00
            </td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            ></td>
            <td
              style={{
                borderRight: "1px solid black",
                borderTop: "1px solid black",
              }}
            ></td>
            <td style={{ borderTop: "1px solid black" }}></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DirectPurchase;
