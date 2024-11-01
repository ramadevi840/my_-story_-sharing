// // // pages/_app.js
// // import '../styles/globals.css'; // Import your global CSS file

// // function MyApp({ Component, pageProps }) {
// //   return <Component {...pageProps} />;
// // }

// // export default MyApp;
// // pages/_app.js
// import '../styles/globals.css'; // Import global styles
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();

//   useEffect(() => {
//     // Any global side effects can go here, such as analytics
//   }, [router.asPath]);

//   return <Component {...pageProps} />;
// }

// export default MyApp;

// pages/_app.js
// import '../styles/globals.css';
// import Header from '../components/Header';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Header />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
// pages/_app.js
import '../styles/globals.css'; // Ensure the path matches your folder structure
import { useEffect } from 'react';
import { auth } from '../lib/firebase';
import './login.module.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user ? "User signed in" : "User signed out");
    });
    return () => unsubscribe();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
