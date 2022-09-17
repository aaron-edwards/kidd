export default function Header() {
  return (
    <header
      css={(theme) => ({
        borderBottomColor: theme.color.primary.main,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
      })}
    >
      <h1 css={() => ({
        margin: 0,
      })}
      >Kerbal Interactive Data Display
      </h1>
    </header>
  );
}
