import { Box, Flex, Text, IconButton, Tooltip } from "@chakra-ui/react";

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const CustomBtnTheme = {
  backgroundColor: "#9AE6B4",
  borderRadius: "52px",
  fontSize: "20px",
};

const TableFooter = (props) => {
  return (
    <Flex justifyContent={"end"} bg={"rgba(0,0,0,0.05)"} mt={5}>
      <div id="btnleft">
        <Tooltip label="First Page">
          <IconButton
            style={CustomBtnTheme}
            onClick={() => props.gotoPage(0)}
            isDisabled={!props.canPreviousPage}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            style={CustomBtnTheme}
            className="paginationbtn"
            onClick={props.previousPage}
            isDisabled={!props.canPreviousPage}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </div>

      <Box bg={"white.200"} p={2} borderRadius={5}>
        <Flex>
          <Box fontSize={13}>Page</Box>
          <Text fontWeight="bold" fontSize={13} ml={2} as="span">
            {props.pageIndex}
          </Text>
          <Box ml={2} fontSize={13} w={"2rem"}>
            of
          </Box>

          <Text fontSize={13} fontWeight="bold" as="span">
            {props.pageOptions.length}
          </Text>
        </Flex>
      </Box>

      <div id="btnright">
        <Tooltip label="Next Page">
          <IconButton
            style={CustomBtnTheme}
            className="paginationbtn"
            onClick={props.nextPage}
            isDisabled={!props.canNextPage}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            style={CustomBtnTheme}
            className="paginationbtn"
            onClick={() => props.gotoPage(props.pageCount - 1)}
            isDisabled={!props.canNextPage}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </div>
    </Flex>
  );
};

export default TableFooter;
