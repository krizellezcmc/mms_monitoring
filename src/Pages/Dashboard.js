import { Text, Box, Center, Heading } from "@chakra-ui/react";
import { IoReceiptSharp } from "react-icons/io5";

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

const Dashboard = () => {
  return (
    <Box w="inherit" h="inherit" bg="#e9ecef" p={5}>
      <Box>
        <Box w="inherit" display={"flex"} columnGap={5} flexWrap="wrap">
          {data.map((value) => {
            return <Card json={value} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
