import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  TableContainer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Select } from "chakra-react-select";
import localApi from "../API/localAPI";
// import Pagination from "rc-pagination";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import { BsSearch } from "react-icons/bs";
import { Paginate } from "react-paginate-chakra-ui";
import "../Styles/style.css";

function Category(props) {
  const [options, setOptions] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = React.useState(0);

  // PAGINATION
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };

  const getList = async () => {
    let response = await localApi.get("/get_CategoryList.php");
    setOptions(response.data);
  };

  const select = async (e) => {
    let res = await localApi.get("/get_byCategory.php", {
      params: { category: e },
    });

    setList(res.data);
  };

  // TABLE CONFIGS
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [collection, setCollection] = React.useState(
    cloneDeep(list.slice(0, countPerPage))
  );

  const tableHead = {
    itemId: "Item ID",
    unit: "Unit",
    itemdesc: "Description",
    qty: "Quantity",
  };

  const searchData = React.useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setPage(1);
      const data = cloneDeep(
        list
          .filter((item) => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  const updatePage = (p) => {
    setPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(list.slice(from, to)));
  };

  const tableRows = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <th key={index}>{title}</th>
    ));
  };

  useEffect(() => {
    getList();
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }

    console.log(current);
  }, [value, list]);

  return (
    <div>
      <Box display="flex" mt={20}>
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="gray.300" />}
            />
            <Input
              w={500}
              placeholder="Search Item"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </InputGroup>
        </Box>
        <Spacer />
        <Box w={400}>
          <Select
            id="category"
            name="category"
            options={options}
            placeholder="Select Category..."
            onChange={(e) => {
              select(e.value);
            }}
          />
        </Box>
      </Box>

      <TableContainer>
        <table className="items-table">
          <thead>
            <tr>{headRow()}</tr>
          </thead>
          <tbody>{tableData()}</tbody>
        </table>
      </TableContainer>

      <Stack>
        <Paginate
          page={page}
          count={list.length}
          pageSize={countPerPage}
          onPageChange={updatePage}
          onChange={onChange}
          // optional props 👇
          margin={2}
          shadow="lg"
          fontWeight="blue"
          variant="outline"
          // ...border and other props also work 💪
          border="2px solid"
          // pageSize={countPerPage}
          // onChange={updatePage}
          // current={currentPage}
          // total={list.length}
        />
      </Stack>
    </div>
  );
}

export default Category;
