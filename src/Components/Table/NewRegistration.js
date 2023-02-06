import { Button } from "@chakra-ui/react";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";

const NewRegistration = (props) => {
  const [loading, setLoading] = useState(false);
  const [loadingTxt, setLoadingTxt] = useState(
    props.title === "Purchase Request"
      ? "Importing from BizzBox"
      : "Processing..."
  );

  const handleClick = async () => {
    setLoading(true);
    const result = await props.handleClick();
    if (result.status === "Ok") {
      setLoading(false);
      console.log(result.message);
    } else {
      setLoading(false);
      console.log(result.message);
    }
  };

  return (
    <Button
      isLoading={loading}
      loadingText={loadingTxt}
      size={"sm"}
      fontSize={[11, 11, 14, 14]}
      bg={"teal"}
      colorScheme={"green"}
      color={"white"}
      variant={"solid"}
      fontWeight={"normal"}
      className={""}
      onClick={handleClick}
      columnGap={2}
      mt={5}
      _hover={{
        bg: "teal",
      }}
    >
      {props.title === "Purchase Request" || props.title === "Department" ? (
        <BsFillCloudDownloadFill fontSize={20} marginRight="5px" />
      ) : (
        <IoAddCircleOutline fontSize={20} marginRight="5px" />
      )}
      {props.title === "Purchase Request"
        ? "Download PR From BizzBox"
        : props.title === "Department"
        ? "Download department From BizzBox"
        : props.title}
    </Button>
  );
};

export default NewRegistration;
