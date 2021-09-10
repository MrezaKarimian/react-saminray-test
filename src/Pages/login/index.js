import { usePostLogin } from "Hook/api/Users";
import { useAuthCtx } from "Provider/auth/auth.provider";
import { useLoginCtx } from "Provider/login/login.provider";
import React, { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router";
import ImgSrc from "images/signing-bg.jpg";
import {
  ButtonGroup,
  makeStyles,
  TextField,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { useSnackbar } from "notistack";

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

function Index() {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const queryClient = useQueryClient();
  const AuthCtx = useAuthCtx();

  const { state, actions } = useLoginCtx();
  const { handleState, handleResetState } = actions;

  const PostLogin = usePostLogin();
  const history = useHistory();
  const onFinish = (e) => {
    e.preventDefault();
    const { setUser } = AuthCtx?.actions;
    PostLogin.mutate(
      {
        username: state.username,
        password: state.password,
      },
      {
        onSuccess: (res) => {
          enqueueSnackbar(res?.data?.message, {
            variant: "success",
          });
          setUser(res?.data?.data);
          history.push("/app");
        },
      }
    );
  };

  useEffect(() => {
    queryClient.clear();
    handleResetState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={5} className={classes.center}>
        <div className={""}>
          <Typography variant="h6" gutterBottom>
            صفحه ورود
          </Typography>
          <form className={classes.root} onSubmit={onFinish} autoComplete="off">
            <div>
              <TextField
                label="نام کاربری"
                variant="outlined"
                autoComplete="new-password"
                value={state.username}
                onChange={(e) => handleState("username", e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="رمز عبور"
                variant="outlined"
                type="password"
                autoComplete="new-password"
                value={state.password}
                onChange={(e) => handleState("password", e.target.value)}
              />
            </div>
            <div>
              <ButtonGroup
                color="primary"
                aria-label="contained primary button group"
              >
                <Button variant="contained" type="submit" disabled={PostLogin.isLoading}>
                  ورود
                </Button>
                <Button onClick={() => history.push("/register")}>
                  ثبت نام
                </Button>
              </ButtonGroup>
            </div>
          </form>
        </div>
      </Grid>
      <Grid item xs={7} className={classes.center}>
        <img src={ImgSrc} width="80%" alt="logo" />
      </Grid>
    </Grid>
  );
}

export default Index;
