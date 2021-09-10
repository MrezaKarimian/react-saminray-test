import SelectsCategory from "Components/Selects/SelectsCategory";
import { usePostCategories } from "Hook/api/Categories";
import { useAddCategoryCtx } from "Provider/addCategory/addCategory.provider";
import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import {
  ButtonGroup,
  makeStyles,
  TextField,
  Typography,
  Button,
  Grid,
  FormGroup,
} from "@material-ui/core";

function AddCategory() {
  const { enqueueSnackbar } = useSnackbar();

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


  const { state, actions } = useAddCategoryCtx();
  const PostCategories = usePostCategories();
  const onSubmit = () => {

    PostCategories.mutate(
      {
        name: state.name,
        parentCategoryId: state.parentCategoryId,
      },
      {
        onSuccess: (res) => {
          enqueueSnackbar(res.data.massage, {
            variant: "success",
          });
          handleResetState();
        },
      }
    );
  };

  const { handleState, handleResetState } = actions;

  useEffect(() => {
    handleResetState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid item xs={6} className={classes.center}>
      <div className={""}>
        <Typography variant="h6" gutterBottom>
          اضافه کردن دسته بندی
        </Typography>
        <form className={classes.root} onSubmit={onSubmit} autoComplete="off">
          <FormGroup>
            <TextField
              label="عنوان دسته بندی "
              variant="outlined"
              value={state.name}
              onChange={(e) => handleState("name", e.target.value)}
            />
          </FormGroup>
            <SelectsCategory 
            value={state.parentCategoryId}
            onChange={(e) => handleState("parentCategoryId", e.target.value)}
            />
          <div>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button type="submit">ثبت</Button>
            </ButtonGroup>
          </div>
        </form>
      </div>
    </Grid>
  );
}

export default AddCategory;
