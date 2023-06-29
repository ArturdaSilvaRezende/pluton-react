import AboutUsProgressBar from './AboutUsProgressBar';
import * as C from './style';

const AboutUs = () => {
  return (
    <C.AboutUs>
      <C.AboutUsTitle>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </C.AboutUsTitle>

      <C.AboutUsContants>
        <h3>Skills</h3>
        <C.AboutUsContainer>
          <AboutUsProgressBar />
          <div className="aboutUs__joinUs">
            <h4>We're Hiring</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, ullamcorper suscipit
              lobortis nisl ut aliquip consequat. I learned that we can do
              anything, but we can't do everything...
            </p>
            <button>Join Us</button>
          </div>
        </C.AboutUsContainer>
      </C.AboutUsContants>
    </C.AboutUs>
  );
};

export default AboutUs;
