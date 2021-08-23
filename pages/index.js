import CustomLink from "../components/CustomLink";

export default function IndexPage() {
  return (
    <>
      <h1>Hello World.</h1>
      <div className="break" />
      <CustomLink href="/about">
        Take me to some other page, but gracefully please.
      </CustomLink>
    </>
  );
}
