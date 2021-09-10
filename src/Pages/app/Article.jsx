import React from "react";
import { useGetPosts } from "Hook/api/Posts";
import { DataGrid } from "@material-ui/data-grid";
import Loading from "Components/Loading/Loading";
import { Grid } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "title",
    width: 300,
  },
  {
    field: "description",
    headerName: "description",
    width: 150,
  },
  {
    field: "authorId",
    headerName: "author id",
    width: 110,
  },
  {
    field: "categoryId",
    headerName: "category id",
    width: 110,
  },
];

function Article() {
  const Posts = useGetPosts();

  const dataSource = Posts?.data?.data?.data?.results || [];

  return (
    <>
      {Posts.isLoading ? (
        <Loading />
      ) : (
        <DataGrid rows={dataSource} columns={columns} pageSize={8} />
      )}
    </>
  );
}

export default Article;
