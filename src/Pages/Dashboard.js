import { Text, Box, Center, Heading } from "@chakra-ui/react";
import { IoReceiptSharp } from "react-icons/io5";
import { Bar, Line } from "react-chartjs-2";
import { useState } from "react";

const Card = (props) => {
  const { json } = props;
  return (
    <Box
      w="100%"
      h="6rem"
      rounded={13}
      backgroundColor="white"
      boxShadow="sm"
      p={5}
      display="flex"
      justifyContent={"space-between"}
      mt={[2, 0]}
    >
      <Box>
        <Text fontSize={14} fontWeight={600} color="blackAlpha.700">
          {json.title}
        </Text>
        <Heading
          size="md"
          fontWeight={700}
          mt={1}
          color="blackAlpha.700"
          display="flex"
          alignItems={"center"}
          columnGap={1}
        >
          {json.data}
          <Text
            fontSize={15}
            color={json.subdata.includes("+") ? "green" : "lightgreen"}
          >
            {json.subdata}
          </Text>
        </Heading>
      </Box>
      <Box
        w={"50px"}
        h="50px"
        rounded={10}
        bgGradient="linear(to-r,#bed9e0,#3a95ab)"
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <IoReceiptSharp color="white" fontSize={25} />
      </Box>
    </Box>
  );
};

const data = [
  {
    title: "Total PR Value",
    data: "₱1,000,000.00",
    subdata: "-25",
  },
  {
    title: "Total PO ",
    data: "400",
    subdata: "+25",
  },
  {
    title: "Total User",
    data: "300",
    subdata: "+5",
  },
  {
    title: "Total Delivered",
    data: "140",
    subdata: "+15",
  },
];

const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

const BarChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  // const labels = Utils.months({ count: 7 });

  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020",
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

const LineChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  // const labels = Utils.months({ count: 7 });

  return (
    <Line
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020",
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

const Dashboard = () => {
  return (
    <Box w="inherit" h="inherit" bg="#e9ecef" p={5}>
      <Box>
        <Box
          w="inherit"
          display={"flex"}
          columnGap={5}
          flexWrap={["wrap", "nowrap"]}
        >
          {data.map((value) => {
            return <Card json={value} />;
          })}
        </Box>
      </Box>
      <Box w="100%" display="flex">
        <Box w="inherit" flex={2} p={2}>
          <BarChartComponent />
        </Box>
        <Box flex={1}>{/* <LineChartComponent /> */}</Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
