import { IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const useStyles = makeStyles(() => ({
  Container: {
    margin: " 2vh 2vw",
    width: "96vw",
    height: "84vh",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Localizacao: {
    width: "70%",
    height: "80%",

    display: "flex",
    flexDirection: "column",
  },
  Contato: {
    display: "flex",
    flexDirection: "column",

    alignItems: "flex-start",

    border: "solid 4px #2129",
    borderRadius: "10px",

    boxShadow: "0.3rem 0.3rem 1px #112",

    backgroundColor: "#1129",

    width: "20%",
    height: "80%",
  },
  Sociais: {
    display: "flex",
    flexDirection: "column",

    transform: "scale(1.05)",
    width: "auto",

    marginTop: "2rem",
    marginLeft: "3rem",
  },
  Destaque: {
    textAlign: "center",
    marginBottom: "8rem",
    transition: "all 0.4s",
    backgroundColor: "white",
    borderRadius: "20px",
    "&:hover": {
      transform: "scale(1.2)",
      boxShadow: "0 0 0.5rem white",
    },
    "&:active": {
      backgroundColor: "#fff8",
    },
  },
  Mapa: {
    height: "303px",
    marginBottom: "5rem",
    border: "4px solid white",
    borderRadius: "10px",
    boxShadow: "0 0 2rem purple",
    transition: "all 1s",
  },
  Info: {
    textShadow: "white 1px 0",
  },

  "@media (max-width: 900px)": {
    Localizacao: {
      display: "none",
    },
    Contato: {
      alignItems: "center",
      width: "90vw",
      height: "80vh",
    },
    Sociais: {
      marginTop: "8rem",
      marginLeft: "0",
    },
    Destaque: {
      marginBottom: "5rem",
    },
  },

  "@media (min-width: 900px)": {
    Egg: {
      display: "none",
    },
  },

  "@media (max-width: 600px)": {
    Egg: {
      display: "none",
    },
  }
}));

const Contact = () => {
  const styles = useStyles();
  return (
    <div className={styles.Container}>
      <div className={styles.Contato}>
        <div className={styles.Sociais}>
          <a
            className={styles.Destaque}
            href="https://github.com/CaioCesarP"
            title="CaioCesarP"
          >
            <IconButton>
              <label>GitHub</label>
              <GitHubIcon />
            </IconButton>
          </a>
          <a
            className={styles.Destaque}
            href="https://www.linkedin.com/in/profile-caio-c%C3%A9sar-link/"
            title="Caio César"
          >
            <IconButton color="info">
              <label>Linkedin</label>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            className={styles.Destaque}
            href="mailto:caiocesarworks@gmail.com"
            title="caiocesarworks@gmail.com"
          >
            <IconButton color="secondary">
              <label>E-mail de contato</label>
              <EmailIcon />
            </IconButton>
          </a>
          <Typography variant="caption">
            Direitos reservados 2022 © Caio César
          </Typography>
          <div className={styles.Egg}>
            <img
              alt="Caio-pic"
              src="https://cdn.discordapp.com/attachments/524055688540848128/901635038041477151/media.io_sRfmmZmX.gif"
            />
          </div>
        </div>
      </div>
      <div className={styles.Localizacao}>
        <div className={styles.Mapa}>
          <iframe
            title="Fortaleza - CE"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127394.50262997916!2d-38.58965567721091!3d-3.7931403323899913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f464c783f%3A0x4661c60a0c6b37ca!2sFortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1648645267726!5m2!1spt-BR!2sbr"
            width="956"
            height="300"
            allowfullscreen="yes"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.Info}>
          <Typography gutterBottom align="center" variant="h4">
            Informações de contato ao lado
          </Typography>
          <Typography align="center" variant="h6">
            Todos os tipos de contato verificados diariamente e atualizados
            quando necessário
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Contact;
