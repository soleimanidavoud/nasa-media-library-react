import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#883DF2" },
    secondary: { main: "#883DF2" },
    text: { primary: "#000", secondary: "#333" },
    background: { default: "#fff", paper: "#fff" },
  },
  typography: {
    fontFamily: "IranSansX",
    fontSize: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#ffffff33",
          backdropFilter: "blur(5px)",
          boxShadow: "none",
          // borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {},
          "& .MuiInput-underline:after": { borderColor: grey[100] },
          "& .MuiOutlinedInput-root": {
            backgroundColor: grey[100],
            borderRadius: 15,
            "& fieldset": { borderColor: grey[100] },
            "&:hover fieldset": { borderColor: grey[100] },
            "&.Mui-focused fieldset": { borderColor: grey[100] },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
          "&:active": { boxShadow: "none" },
        },
        textPrimary: { color: grey["600"] },
        root: { borderRadius: 15 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 15 },
        elevation1: { boxShadow: "none", border: "1px solid #00000011" },
      },
    },
    MuiButtonBase: { defaultProps: { disableRipple: true } },
    MuiDialog: { styleOverrides: { paper: { borderRadius: 15 } } },
    MuiList: { styleOverrides: { root: { paddingLeft: 16 } } },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          marginBottom: 5,
          paddingLeft: 11,
          // "&.Mui-selected": {
          // backgroundColor: "#7300a833",
          // color: "#fff",
          // },
        },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: "none" } } },
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
          // overflow: "hidden",
          // textOverflow: "ellipsis",
          // maxWidth: 145,
          minWidth: 145,
          // transition: "all 200ms ease",
          // border: 0,
          // fontWeight: 600,
          // ":hover": {
          // maxWidth: "unset",
          // position: "absolute",
          // backdropFilter: "brightness(1000%)",
          // boxShadow: "0px 0px 5px #75757533",
          // backgroundColor: "#fff",
          // transition: "all 200ms ease",
          // borderRadius: 6,
          // border: 0,
          // },
        },
      },
    },
  },
});

export default theme;
