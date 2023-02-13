import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Textarea,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import ExceptionHandler from "../../Utils/ExceptionHandler";
import { primaryPathItem } from "../../API/Path_List";
import { Put } from "../../API/Base_Http_Request";

const ModalComponentDetailDesign = (props) => {
  return (
    <Box w={props.w} mt={props.mt === null ? 0 : props.mt}>
      <Box
        w={`${props.title.length * 10 + 30}px`}
        bg="teal"
        pl={2}
        borderTopLeftRadius={8}
        borderTopRightRadius={20}
      >
        <Text
          fontSize={[12, 12, 14, 14]}
          fontWeight={600}
          letterSpacing={2}
          color="white"
        >
          {props.title.toUpperCase()}
        </Text>
      </Box>
      <Text
        fontSize={[12, 12, 14, 14]}
        border={"2px solid teal"}
        borderRightRadius={8}
        borderBottomLeftRadius={8}
        fontWeight={props.title.includes("Price") ? 600 : 400}
        p={2}
        textAlign={!props.title.includes("Description") ? "end" : "start"}
      >
        {props.title.includes("Price")
          ? `₱ ${props.data}`
          : props.title.includes("Unit")
          ? props.data.toUpperCase()
          : props.data}
      </Text>
    </Box>
  );
};

const ProductModal = (props) => {
  const title = "Product Details";
  const [msg, setMsg] = useState("");
  const [remarks, setRemarks] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let form = new FormData();
    form.append("PK_item_ID", props.data.PK_item_ID);
    form.append("remarks", remarks);

    Put({ url: primaryPathItem }, form)
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response.", { cause: res });
        }
        props.setFetch(true);
        setRemarks("");
        setLoading(false);
        props.setProductID("");
        props.onClose();
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
        setLoading(false);
      });
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w={"inherit"}>
            <ModalComponentDetailDesign
              w={"inherit"}
              title={"Description"}
              data={props.data.description}
            />
            <Flex justifyContent={"space-between"} columnGap={5}>
              <ModalComponentDetailDesign
                w={"50%"}
                title={"Unit"}
                data={props.data.unit}
                mt={5}
              />
              <ModalComponentDetailDesign
                w={"50%"}
                title={"Quantity"}
                data={props.data.quantity}
                mt={5}
              />
            </Flex>
            <Flex justifyContent={"space-between"} columnGap={5}>
              <ModalComponentDetailDesign
                w={"50%"}
                title={"Price"}
                data={props.data.price}
                mt={5}
              />
              <ModalComponentDetailDesign
                w={"50%"}
                title={"Total Price"}
                data={props.data.total}
                mt={5}
              />
            </Flex>
          </Box>
          <FormControl>
            <FormLabel
              fontSize={["14px", "14px", "15px", "15px"]}
              fontWeight={"500"}
            >
              Remarks
            </FormLabel>
            <Textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Remarks description"
              focusBorderColor={"#008080"}
              boxShadow={"lg"}
              rounded={10}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Flex float="right" columnGap={5}>
            <Button
              bg="gray"
              color="white"
              _hover={{ bg: "gray" }}
              _active={{ bg: "gray" }}
              mt={5}
              float="right"
              size={["sm", "sm", "md", "md"]}
              onClick={() => {
                props.onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              isLoading={loading}
              loadingText={"Submitting..."}
              type={"Submit"}
              value={"Submit"}
              bg="teal"
              color="white"
              _hover={{ bg: "teal" }}
              _active={{ bg: "teal" }}
              mt={5}
              float="right"
              size={["sm", "sm", "md", "md"]}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit Product Remarks
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
