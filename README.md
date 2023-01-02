# damnkit <img src="https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif" width="50"></h2>

### <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50"> A little more about library...

That's a UI KIT that can give you best clients and respect from the hood.
You wanna know more about it? So, click to the link bellow and we can start to DAMN introduction


<a src=""><img src="https://media.giphy.com/media/ZIYGZsaztM6yY/giphy.gif" width="250"/><p>[DAMN IT](https://www.youtube.com/watch?v=YWyHZNBz6FE)</p></a>

<em><b>First of all</b></em> you have to open your G-terminal and type the legendary command:
```
    npm install damnkit
```

<h3>Let's customize the library.</h3>
<p>Use the f**ing <b style="font-size: 20px">DamnProvider</b> to put your config to magic box

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Config, DamnProvider } from 'damnkit';

const damnConfig: Config = {
  space: {
    l: 24,
    m: {
      size: 2,
      metricSystem: 'em',
    },
  },
  colors: {
    primary: '#366ad5',
    white: '#ffffff',
    secondary: '#199',
  },
  defaultMetricSystem: 'px',
  mixes: {
    primary: {
      color: 'white',
      backgroundColor: 'primary',
    },
    secondary: {
      color: 'white',
      backgroundColor: '',
    },
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DamnProvider config={damnConfig}>
      <App />
    </DamnProvider>
  </React.StrictMode>
);
```

<h4>NOW YOU ARE READY TO MOVE YOUR HOOD IN AND TAKE YOUR RESPECT, MY LITTLE G</h4>

```javascript
import React from "react";
import { Button } from 'damnkit';

function App() {
  return (
    <div className="App">
      <Button mixName={'primary'}>Awesome Button</Button>
    </div>
  );
}
```

<h2>Have a nice day, fellow kid!</h3>
<img src="https://media.giphy.com/media/MfZHme9Xgyn3q/giphy.gif" />
