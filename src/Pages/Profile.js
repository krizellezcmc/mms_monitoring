import {
  Box,
  Avatar,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import useAuth from "../Hooks/useAuth";
import { useState, useEffect } from "react";
import { Get } from "../API/Base_Http_Request";
import { primaryPathUser } from "../API/Path_List";
import ExceptionHandler from "../Utils/ExceptionHandler";

const InputComponent = (props) => {
  return (
    <FormControl mt={3}>
      <FormLabel>{props.title}</FormLabel>
      <Input
        boxShadow="md"
        bg="white"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        isReadOnly={props.isReadOnly}
      />
    </FormControl>
  );
};

const Profile = () => {
  const { user } = useAuth();
  const [msg, setMsg] = useState("");
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFetch = () => {
    Get({ url: `${primaryPathUser}/${1}` })
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response", { cause: res });
        }
      })
      .catch((err) => {
        setMsg(ExceptionHandler(err));
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Box>
      <Box w="inherit" p={5}>
        <Box display="flex" justifyContent={"center"}>
          <Avatar
            size="xl"
            src={require("../assets/logo/default_profile.png")}
          />
        </Box>
        <Box w="40%">
          <InputComponent
            title="Last name"
            placeholder="Last name"
            value={user.department}
            setValue={setLastName}
            isReadOnly={true}
          />
          <InputComponent
            title="First name"
            placeholder="First name"
            value={firstname}
            setValue={setFirstName}
            isReadOnly={false}
          />
          <InputComponent
            title="Middle name"
            placeholder="Middle name"
            value={middlename}
            setValue={setMiddleName}
            isReadOnly={false}
          />
          <InputComponent
            title="Last name"
            placeholder="Last name"
            value={lastname}
            setValue={setLastName}
            isReadOnly={false}
          />
          <InputComponent
            title="Username"
            placeholder="Username"
            value={username}
            setValue={setUsername}
            isReadOnly={false}
          />
          <InputComponent
            title="Password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
            isReadOnly={false}
          />
          <InputComponent
            title="Confirm password"
            placeholder="confirm password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            isReadOnly={false}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
