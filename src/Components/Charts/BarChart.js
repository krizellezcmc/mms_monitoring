import React from "react";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import localApi from "../../API/localAPI";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart(props) {
  const [chartData, setChartData] = useState({});
  const [supplierName, setSupplierName] = useState([]);
  const [suppliertotal, setSupplierTotal] = useState([]);

  const fetchSupplier = async () => {
    let supName = [];
    let supTotal = [];
    let responseSupplier = await localApi.get("/get_top5supplier.php");
    console.log(responseSupplier.data);
    for (const dataObj of responseSupplier.data) {
      supName.push(dataObj.supplier);
      supTotal.push(parseInt(dataObj.total));
    }
    setSupplierName(supName);
    setSupplierTotal(supTotal);

    // console.log(supName, supTotal);
  };

  useEffect(() => {
    fetchSupplier();
  }, []);

  const data = {
    labels: supplierName,
    datasets: [
      {
        label: "Total Number",
        data: suppliertotal,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={config} height={600} width={600} />
    </div>
  );
}

export default BarChart;
