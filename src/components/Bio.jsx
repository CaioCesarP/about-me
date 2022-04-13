import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  Text: {},
  Forte: {
    fontWeight: "bold",
    color: "red",
  },
  Destaque: {
    textDecoration: "underline",
    color: "yellow",
  },
  Hard: {
    color: "darkorange",
  },
  Soft: {
    color: "blueviolet",
  },
  Mencao: {
    color: "darkviolet",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  "@media (max-width: 900px)": {
    Aparece: {
      display: "none",
    },
  },
}));

const Bio = () => {
  const styles = useStyles();
  return (
    <>
      <Typography variant="subtitle1" gutterBottom className={styles.Text}>
        Desenvolver buscando especialização no{" "}
        <span className={styles.Forte}>front-end</span>.
      </Typography>
      <Typography gutterBottom className={styles.Text}>
        Caio César está{" "}
        <span className={styles.Forte}>cursando ciência da computação</span> e
        pretende seguir carreira na área de desenvolvedor front-end, mas não
        está preso a um cargo, ele está{" "}
        <span className={styles.Destaque}>
          buscando conhecimentos de outras áreas
        </span>{" "}
        que agreguem positivamente na sua jornada profissional e buscando sempre
        se atualizar com relação as tecnologias.
      </Typography>
      <div className={styles.Aparece}>
        <Typography gutterBottom className={styles.Text}>
          Sua experiência profissional está em constante evolução e procura
          junto aos desenvolvimentos das suas{" "}
          <span className={styles.Hard}>Hard Skills</span> melhorar as suas{" "}
          <span className={styles.Soft}>Soft Skills</span>, com o intuito de se
          tornar o melhor profissional para as mais diversas problemáticas!
        </Typography>
        <Typography gutterBottom className={styles.Text}>
          Adora tecnologia e o que ela pode proporcionar! Gosta de jogos
          virtuais em tempos livres e um bom xadrez.{" "}
          <span className={styles.Destaque}>
            Pretende ao máximo ser positivo com relação as vivências e situações
            diárias
          </span>
          .
        </Typography>
      </div>
      <Typography variant="overline" gutterBottom className={styles.Text}>
        <span className={styles.Mencao}>
          "Riscos considerados bons se tornam oportunidades!"
        </span>
      </Typography>
    </>
  );
};

export default Bio;
