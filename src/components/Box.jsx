import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  Box: {
    display: "flex",
    flexDirection: "column",
    width: "46vw",
    height: "70vh",
    padding: "0.3rem",
    maxHeight: "100%",
  },
  Formacao: {
    margin: "1.5rem 0",
    color: "powderblue",
    fontWeight: "bold",
  },
  Experiencia: {
    margin: "1.5rem 0",
    color: "lightgreen",
    fontWeight: "bold",
  },
  Competencias: {
    margin: "1.5rem 0",
    color: "pink",
    fontWeight: "bold",
    Spot: {
        height: "6rem",
        cursor: "default", 
    },
  },
  Place: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0.5rem 0",
  },
  Spot: {
    height: "7rem",
  },

  "@media (max-width: 600px)": {
    Box: {
      height: "45vh",
      width: "90vw",
    },
    Formacao: {
      display: "none",
    },
    Experiencia: {
      display: "none",
    },
    Place: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    },
    Spot: {
      margin: "1rem",
      width: "92px",
      height: "92px",
      boxShadow: "0.7rem 0.7rem 1rem purple",
    },
  },
}));

const Box = () => {
  const styles = useStyles();
  return (
    <div className={styles.Box}>
      <div className={styles.Formacao}>
        <Typography variant="h4">Formação Acadêmica</Typography>
        <div className={styles.Place}>
          <div className={styles.Spot}>
            <a href="https://www.ufc.br/" title="Universidade Federal do Ceará">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQF1N2DHs0kqjA/company-logo_100_100/0/1594918756352?e=1656547200&v=beta&t=KK1uhzrLi7gMRUbIF8y0bZQug1rFAaFS9syMKxw3krY"
                alt="Universidade Federal do Ceará"
              />
            </a>
          </div>
          <div className={styles.Spot}>
            <a href="https://digitalcollege.com.br/" title="Digital College">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQFCvyAGW0glNQ/company-logo_100_100/0/1636339682984?e=1656547200&v=beta&t=n6awCIHBok-ZQVFd_FKOpeqjSiK6XOvDNXuGama8Mvs"
                alt="Digital College"
              />
            </a>
          </div>
          <div className={styles.Spot}>
            <a href="https://www.alura.com.br/" title="Alura">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQEHX7cfhFZv8w/company-logo_100_100/0/1638241687335?e=1656547200&v=beta&t=towBppBafs0iCC6H9NA3iRYXRnbQqoRjDGVqXheWsA0"
                alt="Alura"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Experiencia}>
        <Typography variant="h4">Experiência Profissional</Typography>
        <div className={styles.Place}>
          <div className={styles.Spot}>
            <a
              href="https://itargettecnologia.com.br/"
              title="Itarget Tecnologia"
            >
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQFKRgIEYkyLyQ/company-logo_100_100/0/1573314093891?e=1656547200&v=beta&t=9kmHZOXtnB0PZA8doFUA-4jbq9mDC68xK2IKvzj9cgk"
                alt="Itarget Tecnologia"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Competencias}>
        <Typography variant="h4">Competências</Typography>
        <div className={styles.Place}>
          <div className={styles.Spot}>
            <a href="#html&css" title="HTML5 & CSS3">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5607AQG-H8xlUETsIQ/group-logo_image-shrink_92x92/0/1639827331554?e=1648648800&v=beta&t=QyZtWO-H0rmGQvfX4RvVvGPhnOavR3TPTxg8WccATbE"
                alt="HTML5 & CSS3"
              />
            </a>
          </div>
          <div className={styles.Spot}>
            <a href="#JavaScript" title="JavaScript">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D07AQFK5LmvZWWTGg/group-logo_image-shrink_92x92/0/1630999696851?e=1648648800&v=beta&t=6jSf9C-XSTqQj2Wsl6Vp0_sg9H6DRn1FJ19gXur1zzw"
                alt="JavaScript"
              />
            </a>
          </div>
          <div className={styles.Spot}>
            <a href="#ReactJs" title="React Js">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5107AQHqe3L-6LMsUg/group-logo_image-shrink_92x92/0/1631006326814?e=1648648800&v=beta&t=N_b2WJdO8Hrs186ODSvAKDxuqKbLqJB_csl4E6NTAXQ"
                alt="React Js"
              />
            </a>
          </div>
          <div className={styles.Spot}>
            <a href="#MetodologiaÁgeis" title="Metodologias Ágeis">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D07AQGjGdPAfJEHsA/group-logo_image-shrink_92x92/0/1544095609086?e=1648648800&v=beta&t=micYKWDhsaEeWGrTSKFNBGH35N96fLxBsoR-SxwekF8"
                alt="Agile"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Box;
