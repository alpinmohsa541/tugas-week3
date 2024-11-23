import * as React from "react";

export function AboutContent({ title, heading, content }) {
  return (
    <article className="flex flex-col my-auto min-w-[240px] w-[821px] max-md:max-w-full">
      <header className="text-gray-800">
        <h1 className="mt-3 text-6xl font-bold leading-tight max-md:text-4xl">
          {heading}
        </h1>
      </header>
      <div className="mt-8 text-2xl leading-9 text-blue-950 max-md:max-w-full">
        <div>
          {content.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p>{paragraph}</p>
              {index < content.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}
