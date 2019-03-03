import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the HOME component</div>
      <button onClick={() => console.log('Hi there!')}>Click Me</button>
    </div>
  );
};

export default {
  component: Home
};
