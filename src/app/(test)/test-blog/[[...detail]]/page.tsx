const TestPage = ({ params }: { params: { detail: string[] } }) => {
  if (!params.detail) {
    return <div>Blog Page</div>;
  }

  return <div>Blog ID: {params.detail}</div>;
};

export default TestPage;
