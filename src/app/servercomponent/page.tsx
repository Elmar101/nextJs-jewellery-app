export default function ClientComponentPage() {
  let x;
  const fn = (a: any, b: any) => {
    return a + b;
  };
  return (
    <>
      <h1>SERVER COMPONENT</h1>
      <p>This is a server component.</p>
    </>
  );
}
