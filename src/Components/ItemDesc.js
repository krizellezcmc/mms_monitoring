import { Flex, Spacer, Text } from "@chakra-ui/react";
import { async } from "q";
import React, { useEffect, useState } from "react";
import localApi from "../API/localAPI";

function ItemDesc(props) {
  const [items, setItems] = useState([]);
  const getData = async () => {
    let response = await localApi.get("/get_DeptItems.php", {
      params: { mscWarehouseDST: props.selected, issueNo: props.id },
    });
    setItems(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {items.map((j, k) => {
        return (
          <>
            <Flex>
              <Text fontWeight={600} mr={2}>
                {j.ItemCode}
              </Text>
              <Text>{j.ItemDesc}</Text>
              <Spacer />
              <Text fontWeight={600} mr={2}>
                {(Math.round(j.QTY * 100) / 100).toFixed(2)}
              </Text>
              <Text fontWeight={600}>{j.Unit}</Text>
            </Flex>
          </>
        );
      })}
    </div>
  );
}

export default ItemDesc;
