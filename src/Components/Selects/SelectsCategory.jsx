import { FormControl, InputLabel, makeStyles, Select } from "@material-ui/core";
import React from "react";
import { useGetCategories } from "Hook/api/Categories";
import MenuItem from "@material-ui/core/MenuItem";

function SelectsCategory({ value, onChange, filterOption = [] }) {
  const Categories = useGetCategories({
    Page: 1,
    PageSize: 9999999,
  });

  console.log(value);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: "25ch",
      },
    },
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  const options = Categories?.data?.data?.data?.results || [];

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-input">دسته بندی</InputLabel>
      <Select
      loading={Categories.isLoading}
      inputProps={{
        name: 'دسته بندی',
        id: 'outlined-input',
      }}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem value={option.id}>{option.name}</MenuItem>
      ))}
    </Select>
    </FormControl>
  );
}

export default SelectsCategory;

// {
//   options
//     .filter((i) => !filterOption.some((item) => item === i?.id))
//     .map((i) => ({
//       label: i?.name,
//       value: i?.id,
//     }));
// }
