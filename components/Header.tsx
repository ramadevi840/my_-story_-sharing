import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">
        My Story Share
      </div>
      <nav className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/features">Features</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link href="/login" className="text-white">Login</Link>
    </header>
  );
}
