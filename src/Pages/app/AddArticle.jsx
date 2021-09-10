import { usePostPosts } from "Hook/api/Posts";
import { useAddArticleCtx } from "Provider/addArticle/addArticle.provider";
import { useAuthCtx } from "Provider/auth/auth.provider";
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
import SelectsCategory from "Components/Selects/SelectsCategory";

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

function AddArticle() {
  const { user } = useAuthCtx();
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  const { state, actions } = useAddArticleCtx();
  const PostPosts = usePostPosts();
  const onSubmit = () => {

    PostPosts.mutate(
      {
        title: state.title,
        description: state.description,
        categoryId: state.categoryId,
        authorId: user?.userId,
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
          اضافه کردن مقاله
        </Typography>
        <form className={classes.root} onSubmit={onSubmit} autoComplete="off">
          <FormGroup>
            <TextField
              label="عنوان مقاله "
              variant="outlined"
              value={state.title}
              onChange={(e) => handleState("title", e.target.value)}
            />
          </FormGroup>
            <SelectsCategory 
            value={state.categoryId}
            onChange={(e) => handleState("categoryId", e.target.value)}
            />
          <FormGroup>
            <TextField
              label="متن مقاله "
              variant="outlined"
              multiline
              rows={6}
              value={state.description}
              onChange={(e) => handleState("description", e.target.value)}
            />
          </FormGroup>
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

export default AddArticle;
