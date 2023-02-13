import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Post } from "../../API/Base_Http_Request";
import { primaryPathProcurement, primaryPathPR } from "../../API/Path_List";
import ExceptionHandler from "../../Utils/ExceptionHandler";
import { Get } from "../../API/Base_Http_Request";
import { useDataApi } from "../../API/API";

const DatePicker = (props) => {
  const [errorMsg, setErrorMsg] = useState("Lol");

  const handleChange = (e) => {
    const date = new Date(e.target.value);

    if (date > new Date()) {
      setErrorMsg("Please Don't select future dates.");
      return;
    }

    props.setValue(e.target.value);
  };

  return (
    <FormControl isInvalid={errorMsg.length === 0}>
      <FormLabel fontSize={["13px", "13px", "14px", "14px"]} fontWeight={"600"}>
        {props.title}
      </FormLabel>
      <Input
        bg="white"
        rounded={10}
        boxShadow={"lg"}
        placeholder={props.placeholder}
        size="md"
        type="datetime-local"
        focusBorderColor={"#008080"}
        value={props.value}
        onChange={(e) => handleChange(e)}
      />
      <FormErrorMessage>{errorMsg}</FormErrorMessage>
    </FormControl>
  );
};

const ProcurementPRForm = (props) => {
  const title = "Purchase Request";
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const data = props.data;
  const currentDate = new Date();
  const [prNo, setPRNo] = useState(data.pr_no);
  const [rCC, setRCC] = useState(data.rcc);
  const [fundClaster, setFundClaster] = useState(data.fund_cluster);
  const [procurementMode, setProcurementMode] = useState(
    data.procurement_description
  );

  const [solNo, setSolNo] = useState(data.sol_no);
  const [procurementDate, setProcurementDate] = useState(
    data.procurement_date === null ? currentDate : data.procurement_date
  );

  const [postingDate, setPostingDate] = useState(
    data.posting_date === null ? currentDate : data.posting_date
  );

  const [openingDate, setOpeningDate] = useState(
    data.opening_date === null ? currentDate : data.opening_date
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let form = new FormData();
    form.append("id", props.data.PK_pr_ID);
    form.append("message", procurementMode);
    form.append("prNo", prNo);
    form.append("rcc", rCC);
    form.append("fund", fundClaster);
    form.append("solNo", solNo);
    form.append("procurementDate", procurementDate);
    form.append("postingDate", postingDate);
    form.append("openingDate", openingDate);

    Post({ url: primaryPathProcurement }, form)
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response.", { cause: res });
        }

        setProcurementMode("");
        setLoading(false);
        props.setFetch(true);
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
        setLoading(false);
      });
  };

  return (
    <Box w={"100%"} h={["13rem", "13rem", "16rem", "16rem"]} pt={5} pb={5}>
      <Box
        display="flex"
        flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
        columnGap={5}
      >
        <FormControl>
          <FormLabel
            fontSize={["13px", "13px", "14px", "14px"]}
            fontWeight={"600"}
          >
            Purchase Request. No.
          </FormLabel>
          <Input
            value={prNo}
            onChange={(e) => setPRNo(e.target.value)}
            placeholder="Fund claster"
            focusBorderColor={"#008080"}
            boxShadow={"lg"}
            rounded={10}
          />
        </FormControl>
        <FormControl>
          <FormLabel
            fontSize={["13px", "13px", "14px", "14px"]}
            fontWeight={"600"}
          >
            Responsibility Center Code
          </FormLabel>
          <Input
            value={rCC}
            onChange={(e) => setRCC(e.target.value)}
            placeholder="Fund claster"
            focusBorderColor={"#008080"}
            boxShadow={"lg"}
            rounded={10}
          />
        </FormControl>
        <FormControl>
          <FormLabel
            fontSize={["13px", "13px", "14px", "14px"]}
            fontWeight={"600"}
          >
            Fund Cluster
          </FormLabel>
          <Input
            value={fundClaster}
            onChange={(e) => setFundClaster(e.target.value)}
            placeholder="Fund claster"
            focusBorderColor={"#008080"}
            boxShadow={"lg"}
            rounded={10}
          />
        </FormControl>
      </Box>
      <FormControl mt={5}>
        <FormLabel
          fontSize={["13px", "13px", "14px", "14px"]}
          fontWeight={"600"}
        >
          Purchase Request
        </FormLabel>
        <Textarea
          value={procurementMode}
          onChange={(e) => setProcurementMode(e.target.value)}
          placeholder="Remarks description"
          focusBorderColor={"#008080"}
          boxShadow={"lg"}
          rounded={10}
        />
      </FormControl>
      <Box
        display="flex"
        flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
        columnGap={5}
        mt={5}
      >
        <DatePicker
          title="Sol. No/RFQ No."
          placeholder="Select Date and Time"
          value={solNo}
          setValue={setSolNo}
        />
        <DatePicker
          title="Procurement Date"
          placeholder="Select Date and Time"
          value={procurementDate}
          setValue={setProcurementDate}
        />
        <DatePicker
          title="Posting Date"
          placeholder="Select Date and Time"
          value={postingDate}
          setValue={setPostingDate}
        />
        <DatePicker
          title="Opening Date"
          placeholder="Select Date and Time"
          value={openingDate}
          setValue={setOpeningDate}
        />
      </Box>
      <Button
        isLoading={loading}
        loadingText="Submitting..."
        type={"Submit"}
        value={"Submit"}
        bg="teal"
        color="white"
        _hover={{ bg: "teal" }}
        _active={{ bg: "teal" }}
        mt={5}
        float="right"
        size={["sm", "sm", "md", "lg"]}
        onClick={(e) => handleSubmit(e)}
      >
        Submit remarks
      </Button>
    </Box>
  );
};

export default ProcurementPRForm;
