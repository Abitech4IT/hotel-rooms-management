import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";

function LoadingSpinner() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Stack direction="horizontal">
        <Spinner className="mx-auto" animation="grow" variant="primary" />
      </Stack>
    </>
  );
}

export default LoadingSpinner;
