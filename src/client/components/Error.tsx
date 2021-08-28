export const Error = (): JSX.Element => (
  <div id='error-container'>
    <div className='error'>
      <h1>400</h1>
      <h3>error while loading the page</h3>
      <div>
        <button className='btn' onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    </div>
  </div>
);
