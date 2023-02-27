import { Box, Heading, Text, Grid } from "@chakra-ui/react";
import GridHeader from "./GridHeader";
import GridRow from "./GridRow";
import GridGrandTotal from "./GridGrandTotal";
import { useEffect, useState } from "react";
import { Get } from "../../API/Base_Http_Request";
import { primaryPathItem } from "../../API/Path_List";

const PRViewBody = (props) => {
  const [fetch, setFetch] = useState(true);
  const [msg, setMsg] = useState("");
  const [items, setItems] = useState({});

  const handleFetch = () => {
    Get({ url: `${primaryPathItem}/${props.id}` })
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response.", { cause: res });
        }
        const {
          data: { data },
        } = res;

        setItems(data);
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setMsg("Can't complete process. try again later.");
            break;
          case 401:
            setMsg("Un-Authorized.");
            break;
          case 404:
            setMsg("No Records found.");
            break;
          default:
            setMsg("Can't process request. try again later.");
            break;
        }
      });
  };

  useEffect(() => {
    if (fetch) {
      setFetch(false);
    }
    handleFetch();

    return () => setFetch(false);
  }, [fetch]);

  return (
    <Box w={"100%"}>
      <Box w={"100%"} textAlign={"center"}>
        <Heading size={"sm"} fontFamily={" Georgia, serif"}>
          PURCHASE REQUEST
        </Heading>
      </Box>
      <Box mt={5}>
        <Text fontSize={12} fontWeight={"400"} fontFamily={"Georgia, serif"}>
          Entity Name: ZAMBOANGA CITY MEDICAL CENTER
        </Text>
        <Grid
          h={400}
          templateRows={"repeat(12, 1fr)"}
          templateColumns="repeat(12, 1fr)"
          lineHeight={"0.4"}
        >
          <GridHeader />
          {items.map((value) => {
            return <GridRow value={value} />;
          })}
          <GridGrandTotal />
        </Grid>
      </Box>
    </Box>
  );
};

export default PRViewBody;
