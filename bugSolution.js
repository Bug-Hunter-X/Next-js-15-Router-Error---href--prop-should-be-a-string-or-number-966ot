```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  const dynamicRouteId = 123; //Example of Number
  const staticRoute = '/about'; //Example of String

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a sample page.</p>
      <Link href={staticRoute}>
        <a>Go to About Page</a>
      </Link>
      <Link href={`/post/${dynamicRouteId}`}>
        <a>Go to Dynamic Route</a>
      </Link>     
    </div>
  );
}
```