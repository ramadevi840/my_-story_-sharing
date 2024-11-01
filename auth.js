// // pages/login.js or pages/login.tsx
// import React from 'react';
// import { signInWithGoogle } from './auth'; // Adjust the import path

// const LoginPage = () => {
//   const provider = new GoogleAuthProvider();

//   return (
//     <div>
//       <h1>Login</h1>
//       <button onClick={() => signInWithGoogle(provider)}>Sign in with Google</button>
//     </div>
//   );
// };

// // Remove any conflicting data fetching methods
// // If you have this, remove it:
// // export async function getStaticProps() {
// //   // Static generation code
// // }

// // If you have this, keep it or modify as necessary:
// export async function getServerSideProps(context) {
//   // Server-side rendering code, if needed
//   return {
//     props: {}, // Add your props here
//   };
// }

// export default LoginPage;
