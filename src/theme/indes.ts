import {
  type MantineColorsTuple,
  MultiSelect,
  Select,
  createTheme,
} from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#d7eefaff",
  "#ACE0FD",
  "#ACE0FD",
  "#ACE0FD",
  "#ACE0FD",
  "#d89000",
  "#d89000",
  "#d89000",
  "#d89000",
  "#d89000",
];

export const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
  components: {
    Select: Select.extend({
      defaultProps: {
        nothingFoundMessage: "لا يوجد نتائج",
        limit: 50,
      },
    }),
    MultiSelect: MultiSelect.extend({
      defaultProps: {
        nothingFoundMessage: "لا يوجد نتائج",
        limit: 50,
      },
    }),
  },
});
