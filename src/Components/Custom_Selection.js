import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { Select, FormControl, FormLabel } from "@chakra-ui/react";
import { Get } from "../API/Base_Http_Request";
import { primaryPathDepartment } from "../API/Path_List";

const Selection = ({ label, value, setValue, datas, mt }) => {
  return (
    <FormControl mt={mt}>
      <Select
        bg={"white"}
        boxShadow={"md"}
        fontSize={14}
        focusBorderColor={"primary.900"}
        placeholder="- Please Select -"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        required
      >
        {datas.data.map((data) => {
          return (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

const SelectionLoading = ({ label, mt }) => {
  return (
    <FormControl mt={mt}>
      <Select
        boxShadow={"md"}
        bg={"white"}
        fontSize={14}
        focusBorderColor={"primary.900"}
        placeholder="- Please Select -"
        _readOnly={true}
        required
      >
        <option>{"Fetching " + label}</option>
      </Select>
    </FormControl>
  );
};

const SelectionError = ({ label, mt }) => {
  return (
    <FormControl mt={mt}>
      <Select
        bg={"white"}
        fontSize={14}
        focusBorderColor={"primary.900"}
        placeholder={"Failed to fetch " + label}
        borderColor={"red"}
        _readOnly={true}
        required
      >
        <option>{"Failed to fetch " + label}</option>
      </Select>
    </FormControl>
  );
};

const SpecializationHSelection = ({ value, setValue, mt }) => {
  const title = "Department";

  const { data, isLoading, error } = useQuery(title, () =>
    Get({ url: primaryPathDepartment + "/public" }).then((res) => res.data)
  );

  if (isLoading) {
    return <SelectionLoading label={title} mt={mt} />;
  }

  if (error) {
    return <SelectionError label={"Something went wrong!"} mt={mt} />;
  }

  return (
    <Selection
      label={title}
      value={value}
      setValue={setValue}
      datas={data}
      mt={mt}
    />
  );
};

export const CustomSelection = ({ value, setValue, mt }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SpecializationHSelection value={value} setValue={setValue} mt={mt} />
    </QueryClientProvider>
  );
};
