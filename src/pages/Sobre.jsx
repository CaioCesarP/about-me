import { makeStyles } from "@mui/styles";

import Bio from "../components/Bio";
import Box from "../components/Box";

const useStyles = makeStyles(() => ({
  Gap: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",

    marginTop: "5vh",
  },

  painel: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-around",
  },
  Corpo: {
    display: "flex",

    alignItems: "center",
    justifyContent: "center",

    width: "100vw",
    height: "88vh",
    margin: "0 2vw"
  },
  Imagem: {
    margin: "0.3rem",
    border: "3px solid blueviolet",
    borderRadius: "50%",
  },
  Card: {
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    textAlign: "center",
  },

  "@media (max-width: 600px)": {
    Painel: {
      flexDirection: "column",
    },
    Corpo: {
      width: "90vw",
      flexDirection: "column",
    },
    Imagem: {
      display: "none",
    },
    Aparece: {
      display: "none",
    },
  },
  "@media (max-width: 900px)": {
    painel: {
      display: "flex",
      flexDirection: "row",
  
      justifyContent: "space-around",
      backgroundColor: "black",
      height: "110vh",
    },
  },
}));

const About = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.painel}>
        <div className={styles.Corpo}>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEAaRd4RXLfjQ/profile-displayphoto-shrink_200_200/0/1646976255698?e=1654128000&v=beta&t=h4Pz3hi6ncM0P73sVr65WyDHhBCq7HoRgk30OH8PcnM"
            alt="foto do autor"
            className={styles.Imagem}
          />
          <div className={styles.Gap}>
            <div className={styles.Card}>
              <Bio />
            </div>
          </div>
          <div className={styles.Corpo}>
              <Box />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
