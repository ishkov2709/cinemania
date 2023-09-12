const ResponsiveImg = ({ mob, tab, desk }) => {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desk} />
      <source media="(min-width: 744px)" srcSet={tab} />
      <source media="(max-width: 743px)" srcSet={mob} />
      <img src={mob} alt="theme" />
    </picture>
  );
};

export default ResponsiveImg;
