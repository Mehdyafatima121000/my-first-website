import cssStyle from "./about.module.css";


console.log(cssStyle, "CSS-Style");

function AboutPage() {
  return (
    <h2 className={cssStyle.pink}>This Is About Me</h2>
  );
}

export default AboutPage;
