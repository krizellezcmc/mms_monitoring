import { Box, Flex, Text, IconButton, Tooltip } from "@chakra-ui/react";

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const PaginateButton = (props) => {
  return (
    <IconButton
      backgroundColor={"white"}
      rounded={100}
      boxShadow={"lg"}
      border="1px solid gray"
      onClick={() => props.gotoPage()}
      isDisabled={props.handleDissable()}
      icon={props.children}
      mr={4}
      _hover={{
        bg: "#9AE6B4",
      }}
    />
  );
};

const TableFooter = (props) => {
  const handleDissabledDecrementPaginate = () => !props.canPreviousPage;
  const handleResetPaginate = () => props.gotoPage(0);
  const handleDecrementPaginate = () => props.previousPage;

  const handleDissabledIncrementPaginate = () => !props.canNextPage;
  const handleIncrementPaginate = () => props.nextPage;
  const handleMaxPaginate = () => props.gotoPage(props.pageCount - 1);

  return (
    <Flex justifyContent={"end"} mt={5}>
      <div id="btnleft">
        <Tooltip label="First Page">
          <PaginateButton
            gotoPage={handleResetPaginate}
            children={<ArrowLeftIcon h={3} w={3} />}
            handleDissable={handleDissabledDecrementPaginate}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <PaginateButton
            gotoPage={handleDecrementPaginate}
            children={<ChevronLeftIcon h={6} w={6} />}
            handleDissable={handleDissabledDecrementPaginate}
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
          <PaginateButton
            gotoPage={handleIncrementPaginate}
            children={<ChevronRightIcon h={6} w={6} />}
            handleDissable={handleDissabledIncrementPaginate}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <PaginateButton
            gotoPage={handleMaxPaginate}
            children={<ArrowRightIcon h={3} w={3} />}
            handleDissable={handleDissabledIncrementPaginate}
          />
        </Tooltip>
      </div>
    </Flex>
  );
};

export default TableFooter;
