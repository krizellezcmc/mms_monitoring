import React from "react";
import doh from "../../Assets/logo/doh.png";
import zcmc from "../../Assets/logo/zcmc.png";

function DailyReport(props) {
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
      <div style={{ padding: "20px", fontFamily: "Times New Roman" }}>
        <div
          style={{
            width: "50%",
            float: "left",
            padding: "20px",
            border: "2px solid red",
          }}
        ></div>
        <div
          style={{
            width: "50%",
            float: "left",
            padding: "20px",
            border: "2px solid red",
          }}
        ></div>
      </div>
    </div>
  );
}

export default DailyReport;
