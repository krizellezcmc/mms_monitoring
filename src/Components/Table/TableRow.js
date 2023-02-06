import { Tr, Td, Text } from "@chakra-ui/react";
import ActionButtons from "./ActionButtons";
import moment from "moment/moment";
import { getDateToFormatDate } from "../../Utils/DateFormat";

const TableRow = (props) => {
  return (
    <Tr
      onClick={(e) => props.handleClick(e, props.row)}
      className="td"
      {...props.row.getRowProps()}
    >
      {props.row.cells.map((cell) => {
        return (
          <Td {...cell.getCellProps()}>
            {cell.column.id === "action" ? (
              <ActionButtons
                handleRedirectView={props.handleView}
                handleRedirectEdit={props.handleEdit}
                handleRedirectDelete={props.handleDelete}
                value={props.row}
              />
            ) : cell.column.id === "created_at" ? (
              moment(cell.row.values.created_at).format("hh:mm a MM-DD-YYYY")
            ) : cell.column.id === "updated_at" ? (
              moment(cell.row.values.updated_at).format("hh:mm a MM-DD-YYYY")
            ) : cell.column.id === "dept" ? (
              <Text
                fontWeight={"bold"}
                textTransform={"uppercase"}
                color={"green.600"}
              >
                {cell.row.values.dept_Name}
              </Text>
            ) : cell.column.Header === "ID" ? (
              <Text fontWeight={"bold"} color={"green.600"}>
                {props.pageIndex * 10 + props.index}
              </Text>
            ) : cell.column.Header === "users" ? (
              <>{cell.row.values.user}</>
            ) : cell.column.id === "total" ? (
              <Text fontWeight={"bold"}>₱ {cell.row.values.total}</Text>
            ) : cell.column.id === "pr_date" ? (
              getDateToFormatDate(new Date(cell.row.values.pr_date))
            ) : (
              cell.render("Cell")
            )}
          </Td>
        );
      })}
    </Tr>
  );
};

export default TableRow;
