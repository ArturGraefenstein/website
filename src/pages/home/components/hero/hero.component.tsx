import {
  sectionWrapperClass,
  htmlTagClass,
  nameClass,
  titleClass,
  wrapperClass,
  paragraphClass,
  sectionsBaselineClass,
} from "./hero.styles";

export const Hero = () => {
  return (
    <div className={wrapperClass}>
      <div className={sectionsBaselineClass}>
        <div className={sectionWrapperClass}>
          <span className={htmlTagClass}>{"<h1>"}</span>
          <h1 className={titleClass}>
            Hey
            <br />
            I’m <span className={nameClass}>Artur</span>,
            <br />a passionate mobile
            <br />
            and web developer!
          </h1>
          <span className={htmlTagClass}>{"</h1>"}</span>
        </div>
        <div className={sectionWrapperClass}>
          <span className={htmlTagClass}>{"<p>"}</span>
          <p className={paragraphClass}>
            Bringing ideas to life has been at the heart of my work for many
            years. I’ve had the chance to contribute to a wide range of projects
            — always with a focus on quality, clarity, and collaboration. I
            enjoy solving complex problems and working with teams that care
            about making an impact.
            <br />
            <br />I live in Germany with my wife and our wonderful two kids.
            Being a dad is one of the greatest joys in my life — I love spending
            time with my family, playing and laughing together. I believe in
            God, and that belief shapes how I live, work, and treat others.
          </p>
          <span className={htmlTagClass}>{"</p>"}</span>
        </div>
      </div>
    </div>
  );
};
