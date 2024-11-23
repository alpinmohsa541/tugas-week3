import React from "react";
import PropTypes from "prop-types";

export function AboutContent({ heading, content }) {
  return (
    <article className="flex flex-col my-auto min-w-[240px] w-[821px] max-md:max-w-full">
      <header className="text-gray-800">
        <h1 className="mt-3 text-6xl font-bold leading-tight max-md:text-4xl">
          {heading}
        </h1>
      </header>
      <div className="mt-8 text-2xl leading-9 text-blue-950 max-md:max-w-full">
        {content.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
            {index < content.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </article>
  );
}

// Validasi props menggunakan PropTypes
AboutContent.propTypes = {
  title: PropTypes.string.isRequired, // title harus berupa string
  heading: PropTypes.string.isRequired, // heading harus berupa string
  content: PropTypes.arrayOf(PropTypes.string).isRequired, // content harus berupa array string
};
