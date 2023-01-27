import moment from "moment";
import React from "react";
import "../../Styles/Reports/MonthlyDistribution.css";

function MontlyDistribution(props) {
  return (
    <>
      <div className="container">
        <div className="header">
          <p className="heading">
            Republic of the Philippines <br />
            Department of Health <br />
            ZAMBOANGA CITY MEDICAL CENTER <br />
            Dr. D. Evangelista St., Sta. Catalina, Zamboanga City, 7000
          </p>

          <p className="title">
            MONTHLY DISTRIBUTION REPORT <br />
            {moment().format("MMMM YYYY")}
          </p>
        </div>
      </div>
    </>
  );
}

export default MontlyDistribution;
