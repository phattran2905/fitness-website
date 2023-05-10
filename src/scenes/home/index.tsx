import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px;)");

  return (
    <section
      id={`${SelectedPage.Home}`}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* Image and main header */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Heading */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-pageText" />
              </div>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              error repellat cumque. Eius quae facilis sequi voluptas ullam
              temporibus sunt fuga, quo, nesciunt officiis adipisci.
            </p>
          </div>
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </div>
        </div>

        {/* Image */}
        <div>
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </div>

      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img src={SponsorRedBull} alt="home-sponsorRedBull" />
              <img src={SponsorForbes} alt="home-sponsorForbes" />
              <img src={SponsorFortune} alt="home-sponsorFortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
