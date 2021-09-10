import React from "react";
import { useGetCategories } from "Hook/api/Categories";
import { DataGrid } from "@material-ui/data-grid";
import Loading from "Components/Loading/Loading";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "name",
    width: 300,
  },
  {
    field: "parentCategoryName",
    headerName: "category name",
    width: 150,
  },
  {
    field: "parentCategoryId",
    headerName: "category id",
    width: 110,
  }
];

function Category() {
  const Categories = useGetCategories();

  const dataSource = Categories?.data?.data?.data?.results || [];

  return (
    <>
    {Categories.isLoading ? (
      <Loading />
    ) : (
      <DataGrid rows={dataSource} columns={columns} pageSize={8} />
    )}
  </>
  );
}

export default Category;
