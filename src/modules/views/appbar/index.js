import * as React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import MuiAppBar from "@material-ui/core/AppBar";
import { styled } from "@material-ui/core/styles";
import MuiToolbar from "@material-ui/core/Toolbar";

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up("sm")]: {
    height: 70,
  },
}));

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppBar() {
  return (
    <div>
      <MuiAppBar elevation={0} position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {"Dota 2 Updates"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Box sx={{ paddingLeft: "30px" }}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/sign-in/"
                sx={rightLink}
              >
                {"Sign In"}
              </Link>
            </Box>
            <Box sx={{ paddingLeft: "30px" }}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/sign-up/"
                sx={rightLink}
              >
                {"Sign Up"}
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
    </div>
  );
}

export default AppBar;
