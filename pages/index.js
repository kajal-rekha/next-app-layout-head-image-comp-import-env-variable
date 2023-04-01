const Home = () => {
  const mongo_uri = process.env.NEXT_PUBLIC_MONGO_URI;
  const pass = process.env.NEXT_PUBLIC_PASSWORD;

  console.log(mongo_uri, pass);

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl">Home page</h1>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const mongo_uri = process.env.MONGO_URI;
  const pass = process.env.PASSWORD;

  console.log(mongo_uri, pass);

  return {
    props: {
      mongo_uri,
      pass,
    },
  };
}
