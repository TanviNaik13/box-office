export function AppTitle(props) {
  const { title = 'BOX OFFICE', subtitle = 'Lets start with a movie search!' } =
    props;

  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
}
