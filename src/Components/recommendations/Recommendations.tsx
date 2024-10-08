import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import styles from "./styles.module.css";
import FadeInText from "../FadeInText";

export const Recommendations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={styles.recommendation_section}>
      <div className={styles.recommendation_container}>
        <h1>Recommendations</h1>
        <p>
          <i>
            The following testimonials from colleagues reflect my dedication and
            passion to creating high-quality software <br></br>and my ability to
            work collaboratively in diverse teams.
          </i>
        </p>
      </div>

      <div className={styles.slider_container}>
        <Slider {...settings} className={styles.slider} autoplay>
          <FadeInText delay={800}>
            <div className={styles.content}>
              <FormatQuoteIcon />

              <AccountCircleSharpIcon className={styles.recommender_icon} />

              <p>
                Ugochi is a passionate engineer with a keen eye for aesthetic
                user interface design, creating exceptional experiences and
                usability.
                <b></b> During my time working with her, she proved to be a
                proactive and reliable team member, demonstrating a strong
                dedication to solving user needs, learning new technologies,
                <br></br> completing complex tasks, and making valuable
                contributions to product improvement. <br></br> She is a skilled
                software engineer with tremendous potential <br></br> and would
                be a valuable asset to any team she joins.
              </p>
              <span>Emma</span>
            </div>
          </FadeInText>

          <FadeInText delay={800}>
            <div className={styles.content}>
              <FormatQuoteIcon />
              <AccountCircleSharpIcon className={styles.recommender_icon} />

              <p>
                Ugochi is the most resilient and dedicated person I have ever
                worked with. She prioritizes job quality and is an amazing team
                player. <br></br> Ugochi is someone I'll always admire because
                she has a natural gift for positively influencing people.{" "}
                <br></br> She gave me the motivation I needed to push forward
                and thrive in my career.
              </p>
              <span>Debby</span>
            </div>
          </FadeInText>

          <FadeInText delay={800}>
            <div className={styles.content}>
              <FormatQuoteIcon />
              <AccountCircleSharpIcon className={styles.recommender_icon} />

              <p>
                Ugochi is proactive and always seeks ways to improve her
                knowledge. She is a customer-centric developer that builds
                applications that meet and suits clients' needs.
              </p>
              <span>Victor</span>
            </div>
          </FadeInText>
        </Slider>
      </div>
    </div>
  );
};
