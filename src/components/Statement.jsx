import styles from "./Statement.module.css";

export default function Statement({
  mission,
  direction = "row",
  gap = "14rem",
  padding = "0",
  background = "none",
  width = "51.5rem",
  height = "33.5rem",
}) {
  const statementStyle = {
    display: "flex",
    flexDirection: direction,
    gap,
    padding,
    background,
  };

  const statementImgBoxStyle = {
    width,
    height,
  };

  return (
    <div style={statementStyle}>
      <div className={styles.statementDetails}>
        <h5 className="fs-16-500">{mission.title}</h5>
        <h3 className="fs-38-600">{mission.heading}</h3>
        <p className="fs-16-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div style={statementImgBoxStyle} className={styles.statementImgBox}>
        <img src={mission.image} alt="" style={{ height: "100%" }} />
      </div>
    </div>
  );
}
