# Project Title

An accessibility extension to websites.

## Installation

Install my-project with npm

```bash
  npm install negishut
```

## Usage/Examples

```javascript
import negishut from "negishut";

function App() {
  negishut();
  return <Component />;
}
```

## NextJs

```typescript
"use client";
import negishut from "negishut";
import { useEffect } from "react";

function Accessibility() {
  useEffect(() => {
    negishut();
  }, []);
  return <></>;
}
```

## Changing Language

```typescript
import {setLang} from "negishut"

function ChangeLang(){
    return (
        <div>
        <button onClick={()=>{setLang("he")}}>hebrew</button>)
        <button onClick={()=>{setLang("en")}}>english</button>)
        </div>
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
