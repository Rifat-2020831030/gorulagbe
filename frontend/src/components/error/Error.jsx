import notFound from "../../assets/not found.gif";

const Error = () => {
  return (
    <center>
      <div>
        <img src={notFound} alt="404" width={600} />
        <h2>Page Not Found</h2>
      </div>
    </center>
  );
};

export default Error;
