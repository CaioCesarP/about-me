import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import "./styles.css";

const useStyles = makeStyles(() => ({
  Gap: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",

    marginTop: "3rem",
  },

  Corpo: {
    display: "flex",
    flexDirection: "column",

    backgroundImage: "url(https://wallpapercave.com/dwp1x/wp9438277.jpg)",
    backgroundSize: "cover",

    alignItems: "center",
    justifyContent: "center",

    width: "100vw",
    height: "88vh",
  },
  Imagem: {
    border: "3px solid blueviolet",
    borderRadius: "20rem",
  },
  Conhecimentos: {
    display: "flex",
    flexDirection: "row",

    color: "darkblue",
    backgroundColor: "rgba( 255, 255, 255, 0.3 )",
    backdropFilter: "blur( 12px )",

    padding: "0 0.5rem",
    borderRadius: "0.8rem"
  },

  "@media (max-width: 600px)": {
    Conhecimentos: {
      flexDirection: "column",

      alignItems: "center",
    },
    Aparece: {
      display: "none",
    },
  },
}));

const Home = () => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.Corpo}>
        <div className="box-glass">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEAaRd4RXLfjQ/profile-displayphoto-shrink_200_200/0/1646976255698?e=1654128000&v=beta&t=h4Pz3hi6ncM0P73sVr65WyDHhBCq7HoRgk30OH8PcnM"
            alt="foto do autor"
            className={styles.Imagem}
          />
          <div className={styles.Gap}>
            <Typography variant="h2">
              Caio César{" "}
              <span className={styles.Aparece}>Passos Viana Ponte</span>
            </Typography>
            <div className={styles.Conhecimentos}>
              <Typography variant="h6" className={styles.Conhecimento}>
                | Front-end Developer |
              </Typography>
              <Typography variant="h6" className={styles.Conhecimento}>
                | React.js |
              </Typography>
              <Typography variant="h6" className={styles.Conhecimento}>
                | agile methodologies |
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
