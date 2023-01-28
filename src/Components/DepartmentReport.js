import React from "react";
import moment from "moment";

function DepartmentReport(props) {
  return (
    <div>
      <div style={{ padding: "0 0 30px 0", maxWidth: "900px" }}>
        <h1
          style={{
            float: "left",
            fontSize: "16px",
            fontWeight: "bolder",
            wordSpacing: "5px",
          }}
        >
          Department: {props.label}
        </h1>
        <h1 style={{ float: "right", fontSize: "16px", fontWeight: "bolder" }}>
          Date and Time: {moment().format("LLL")}
        </h1>
      </div>

      <table
        style={{
          width: "900px",
          textAlign: "center",
          borderCollapse: "collapse",
        }}
        className="items-table"
      >
        <tr>
          <td
            style={{
              fontWeight: "bolder",
              padding: "5px",
            }}
          >
            Issue &nbsp; No
          </td>
          <td style={{ fontWeight: "bolder", padding: "5px" }}>Item Code</td>
          <td
            style={{
              fontWeight: "bolder",
              padding: "5px",
              width: "40%",
            }}
          >
            Item Description
          </td>
          <td style={{ fontWeight: "bolder", padding: "5px" }}>
            Issue&nbsp; Date
          </td>
          <td style={{ fontWeight: "bolder", padding: "5px" }}>Unit</td>
          <td style={{ fontWeight: "bolder", padding: "5px" }}>QTY</td>
          {/* <td style={{ fontWeight: "bolder", padding: "5px" }}>
                    Grand Total
                  </td> */}
        </tr>

        {props.issRprt.map((j, k) => {
          return (
            <>
              <tr>
                <td style={{ padding: "5px" }}>{j.IssueNo}</td>
                <td style={{ padding: "5px" }}>{j.ItemCode}</td>
                <td style={{ padding: "5px", textAlign: "left" }}>
                  {j.ItemDesc}
                </td>
                <td style={{ padding: "5px" }}>
                  {moment(j.DateIssued).format("MMMM DD, YYYY, hh:mm A")}
                </td>

                <td style={{ padding: "5px" }}>
                  {(Math.round(j.QTY * 100) / 100).toFixed(2)}
                </td>
                <td style={{ padding: "5px" }}>{j.Unit}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default DepartmentReport;
