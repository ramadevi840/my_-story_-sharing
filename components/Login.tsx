// import { useRouter } from 'next/router';
// import { useState } from 'react';

// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const handleSignIn = async () => {
//     // Implement sign-in logic here
//     router.push('/');
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl mb-4">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//         />
//         <button onClick={handleSignIn} className="bg-blue-500 text-white w-full py-2 rounded">Sign In</button>
//         <button className="bg-gray-500 text-white w-full py-2 rounded mt-2">Login with Google</button>
//         <p className="text-blue-500 mt-4 cursor-pointer">Forgot Password?</p>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign up

//   const handleToggle = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
//         <div className="flex justify-between mb-4">
//           <button
//             className={`flex-1 text-center py-2 rounded ${isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
//             onClick={handleToggle}
//           >
//             Login
//           </button>
//           <button
//             className={`flex-1 text-center py-2 rounded ${!isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
//             onClick={handleToggle}
//           >
//             Sign Up
//           </button>
//         </div>
        
//         {isLogin ? (
//           <form>
//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="username">Username</label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="username"
//                 type="text"
//                 placeholder="Username"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="password"
//                 type="password"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="flex justify-between mb-6">
//               <button
//                 className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Login
//               </button>
//               <button
//                 className="bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//                 onClick={() => alert('Logged out')}
//               >
//                 Logout
//               </button>
//             </div>
//           </form>
//         ) : (
//           <form>
//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="username">Username</label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="username"
//                 type="text"
//                 placeholder="Username"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="password"
//                 type="password"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="flex justify-between mb-6">
//               <button
//                 className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Sign Up
//               </button>
//               <button
//                 className="bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//                 onClick={() => alert('Logged out')}
//               >
//                 Sign Out
//               </button>
//             </div>
//             <div className="flex flex-col mb-4">
//               <button className="bg-gray-500 text-white py-2 rounded mb-2" type="button">
//                 Login with Google
//               </button>
//               <button className="bg-gray-700 text-white py-2 rounded" type="button">
//                 Login with Facebook
//               </button>
//               <p className="mt-2 text-sm text-center">
//                 <a href="#" className="text-blue-600">Forgot Password?</a>
//               </p>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;
