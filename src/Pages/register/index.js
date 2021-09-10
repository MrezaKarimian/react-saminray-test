import { useRegisterCtx } from "Provider/register/register.provider";
import React, { useEffect } from "react";
import { usePostRegister } from "Hook/api/Users";
import { useHistory } from "react-router";
import { useQueryClient } from "react-query";
import ImgSrc from "images/signing-bg.jpg";
import {
  ButtonGroup,
  makeStyles,
  TextField,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  FormGroup,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import MenuItem from "@material-ui/core/MenuItem";

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

  const { state, actions } = useRegisterCtx();
  const { handleState, handleResetState } = actions;

  const PostRegister = usePostRegister();
  const history = useHistory();
  const onFinish = (e) => {
    e.preventDefault();
    PostRegister.mutate(
      {
        userName: state.userName,
        email: state.email,
        password: state.password,
        fullName: state.fullName,
        age: state.age,
        gender: state.gender,
      },
      {
        onSuccess: () => {
          enqueueSnackbar("حساب کاربری شما ثبت گردید .", {
            variant: "success",
          });
          history.push("/login");
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
            صفحه ثبت نام
          </Typography>
          <form className={classes.root} onSubmit={onFinish} autoComplete="off">
            <FormGroup>
              <TextField
                label="نام کاربری"
                variant="outlined"
                autoComplete="new-password"
                value={state.userName}
                onChange={(e) => handleState("userName", e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="رمز عبور"
                variant="outlined"
                type="password"
                autoComplete="new-password"
                value={state.password}
                onChange={(e) => handleState("password", e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="ایمیل"
                variant="outlined"
                autoComplete="new-password"
                value={state.email}
                onChange={(e) => handleState("email", e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="نام و نام خانوادگی"
                variant="outlined"
                autoComplete="new-password"
                value={state.fullName}
                onChange={(e) => handleState("fullName", e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="سن"
                variant="outlined"
                type="number"
                autoComplete="new-password"
                value={state.age}
                onChange={(e) => handleState("age", e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>جنسیت</InputLabel>
                <Select
                  value={state.gender}
                  onChange={(e) => handleState("gender", e.target.value)}
                >
                  <MenuItem value={"female"}>زن</MenuItem>
                  <MenuItem value={"male"}>مرد</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>

            <div>
              <ButtonGroup
                color="primary"
                aria-label="contained primary button group"
              >
                <Button onClick={() => history.push("/login")}>ورود</Button>
                <Button variant="contained" type="submit" disabled={PostRegister.isLoading}>
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
