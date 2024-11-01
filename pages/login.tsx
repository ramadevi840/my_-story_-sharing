// import { useState } from 'react';

// const Login = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   const toggleSlide = () => {
//     setIsSignIn(!isSignIn);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-full max-w-md mx-auto">
//         <div className={`transition-transform duration-500 ${isSignIn ? 'translate-x-0' : 'translate-x-full'} flex`}>
//           {/* Login Slide */}
//           <div className="w-full p-6 bg-white rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full p-2 mb-4 border border-gray-300 rounded"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-2 mb-4 border border-gray-300 rounded"
//             />
//             <button className="w-full p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Login</button>
//             <p className="text-center text-gray-600">
//               <button onClick={toggleSlide} className="underline text-blue-500">Sign In</button>
//             </p>
//           </div>

//           {/* Sign In Slide */}
//           <div className={`w-full p-6 bg-white rounded-lg shadow-md`}>
//             <h2 className="text-2xl font-bold mb-4">Sign In</h2>
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full p-2 mb-4 border border-gray-300 rounded"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 mb-4 border border-gray-300 rounded"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-2 mb-4 border border-gray-300 rounded"
//             />
//             <button className="w-full p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Sign In</button>
//             <div className="flex justify-between mb-4">
//               <button className="underline text-blue-500">Forgot Password?</button>
//               <button className="underline text-blue-500">Login with Google</button>
//               <button className="underline text-blue-500">Login with Facebook</button>
//             </div>
//             <p className="text-center text-gray-600">
//               Already have an account?{' '}
//               <button onClick={toggleSlide} className="underline text-blue-500">Login</button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import styles from './login.module.css'; // Import the CSS module

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleView = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className={styles['login-container']}> {/* Apply styles using styles object */}
      <div className={styles['login-box']}>
        {isSignUp ? (
          <>
            <h2 className={styles.title}>Sign Up</h2>
            <input type="text" placeholder="Username" className={styles['input-field']} />
            <input type="email" placeholder="Email" className={styles['input-field']} />
            <input type="password" placeholder="Password" className={styles['input-field']} />
            <button className={styles['submit-button']}>Sign In</button>
            <p className={styles['social-text']}>or sign in with</p>
            <div className={styles['social-buttons']}>
              <button className={`${styles['social-button']} ${styles.facebook}`}>Facebook</button>
              <button className={`${styles['social-button']} ${styles.google}`}>Google</button>
            </div>
            <button onClick={toggleView} className={styles['toggle-button']}>
              Already have an account? Log In
            </button>
          </>
        ) : (
          <>
            <h2 className={styles.title}>Log In</h2>
            <input type="text" placeholder="Username or Email" className={styles['input-field']} />
            <input type="password" placeholder="Password" className={styles['input-field']} />
            <button className={styles['forgot-password']}>Forgot Password?</button>
            <button className={styles['submit-button']}>Log In</button>
            <button onClick={toggleView} className={styles['toggle-button']}>
              New here? Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
