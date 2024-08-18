import Heading from "./Heading";
import Section from "./Section";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import GradinetLight from './design/Benefits';
import ClipPath from "../assets/svg/ClipPath.jsx"

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-20">
          {benefits.map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={index}
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    alt={item}
                    width={48}
                    height={48}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider ">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradinetLight/>}

             <div className="absolute inset-0.5 bgp-n-8"
             style={{ clipPath: "url(#benefits)"}}>
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                        <img src={item.imageUrl} alt="" 
                        width={380}
                        height={362}
                        className="w-full h-full object-cover"/>
                    ) }
                </div>
             </div>

             <ClipPath/>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
