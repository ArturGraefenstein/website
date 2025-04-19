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
            I’m genuinely excited about mobile and web development. <br />
            Creating mobile and web apps that bring ideas to life is what I love
            most.
          </p>
          <span className={htmlTagClass}>{"</p>"}</span>
        </div>
      </div>
    </div>
  );
};
