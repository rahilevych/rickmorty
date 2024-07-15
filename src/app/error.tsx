'use client';

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};
function Error({ error, reset }: ErrorPageProps) {
  console.log('object');
  return (
    <div>
      <h1>Custom Error Page</h1>
      <button onClick={reset}>reset Error</button>
    </div>
  );
}
export default Error;
