const PageHeading = ({
  heading,
  subheading,
  description,
}: {
  heading: string;
  subheading: string;
  description: string;
}) => {
  return (
    <>
      <div
        className="text-center mx-auto flex flex-col justify-center 
          max-w-3xl gap-12 my-10 lg:my-20"
      >
        <h1 className="text-preset-7 text-(--heading-text) font-monserrat">
          {heading}
        </h1>

        <p className="text-(--subheading-text-1) text-preset-2 font-semibold">
          {subheading}
        </p>

        <p className="text-(--subheading-text-1) text-preset-2 font-semibold">
          {description}
        </p>
      </div>
    </>
  );
};

export default PageHeading;
