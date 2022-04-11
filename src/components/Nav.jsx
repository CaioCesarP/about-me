import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  Gap: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",

    marginTop: "3rem",
  },

  Container: {
    backgroundColor: "black",

    height: "100vh",
    maxHeight: "100%",
  },
  Nav: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",

    padding: "0.8rem",

    height: "7.5vh",
  },
  Autor: {
    textShadow: "0 0.109rem linen",
  },
  Links: {
    display: "flex",

    width: "20rem",

    alignItems: "center",
    justifyContent: "space-around",

    textShadow: "0 0.108rem linen",
  },
  Link: {
    color: "white",
    textDecoration: "none",
    transition: "0.5s all",
    "&:hover": {
        transform: "scale(1.2)",
    }
  },
  Divider: {
    marginLeft: "5vw",

    backgroundColor: "white",

    width: "90vw",
    height: "0.5vh",

    borderRadius: "10rem",

    boxShadow: "0 0.1rem 1rem white",
  },

  "@media (max-width: 600px)": {
    Autor: {
      display: "none",
    },
    Links: {
      width: "100vw",
      maxWidth: "100%",

      textShadow: "0.2rem 0.4rem #faf0e680",
    },
  },
}));

const Nav = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.Nav}>
        <Typography variant="h4" align="center" className={styles.Autor}>
          Caio César
        </Typography>
        <div className={styles.Links}>
          <Link className={styles.Link} to="home">
            home
          </Link>
          <Link className={styles.Link} to="about">
            about
          </Link>
          <Link className={styles.Link} to="contact">
            contact
          </Link>
        </div>
      </div>
      <div className={styles.Divider}></div>
    </>
  );
};

export default Nav;
