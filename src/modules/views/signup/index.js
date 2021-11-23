import * as React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import UserService from "../../services/user";

function SignUp() {
  const [user, setUser] = useState({
    nickname: "",
    steam_id: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  return (
    <form
      className={"form"}
      method="post"
      action="/user/signup"
      autoCorrect="off"
      autoSave="off"
    >
      <Typography variant="h4">Sign Up!</Typography>
      <TextField
        required
        fullWidth
        id="nickname"
        name="nickname"
        label="Nickname"
        margin="normal"
        variant="outlined"
        value={user.nickname}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="steam_id"
        name="steam_id"
        label="STEAM User ID"
        margin="normal"
        variant="outlined"
        value={user.steam_id}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        id="email"
        name="email"
        label="Email"
        margin="normal"
        variant="outlined"
        value={user.email}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        margin="normal"
        variant="outlined"
        value={user.password}
        onChange={handleChange}
      />
      <Button
        disabled={!user.nickname || !user.email || !user.password}
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        style={{ marginTop: "30px" }}
        onClick={(event) => {
          event.preventDefault();
          UserService.signup(user);
        }}
      >
        Submit
      </Button>
    </form>
  );
}

export default SignUp;
