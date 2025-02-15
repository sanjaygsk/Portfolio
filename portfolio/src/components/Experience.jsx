import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import OpenLink from "./svgs/Openlink";

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <span className="text-sm text-stone-500 inline-flex">
                    {experience.company} <OpenLink />
                  </span>
                </a>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
