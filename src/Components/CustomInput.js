import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
// import "../../../App.css";

const CustomInput = ({
  isSignup,
  title,
  type,
  value,
  placeholder,
  setValue,
  errorMessage,
  isError,
  mt,
  children,
  isRequired,
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <Box mt={mt}>
      <FormControl marginTop={mt} isInvalid={isError} border={"red"} isRequired>
        <InputGroup>
          {isSignup ? null : (
            <InputLeftElement pointerEvents="none" children={children} />
          )}
          <Input
            onPaste={(e) => (type === "password" ? e.preventDefault() : null)}
            type={type !== "password" ? type : show ? "text" : type}
            value={value}
            placeholder={placeholder}
            fontSize={14}
            bg={"white"}
            focusBorderColor={"#008080"}
            onChange={(e) => setValue(e.target.value)}
            className={"inputs"}
            boxShadow={"md"}
            isRequired={isRequired}
          />
          {type === "password" ? (
            <InputRightElement width="3rem" onClick={() => setShow(!show)}>
              {show ? (
                <MdVisibility size={"22px"} color="#718096" />
              ) : (
                <MdVisibilityOff size={"22px"} color="#718096" />
              )}
            </InputRightElement>
          ) : null}
        </InputGroup>
        {!isError ? null : <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default CustomInput;
