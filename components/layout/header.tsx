"use client";

import { useEffect, useState } from "react";
import Link from 'next/link'

export default function Header() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: any) => {
    if (e.target.checked) {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')

      setChecked(true)
    } else {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')

      setChecked(false)
    }
  }

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setChecked(true);
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);

  return (
    <>
      <div className="flex p-4 px-24">
        <nav className="flex items-center justify-between">
          <div>
            <Link href="/">
              <span className="font-bold">Homepage</span>
            </Link>
          </div>
        </nav>
        <div className="ml-auto">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked={checked} onChange={handleChange} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {checked ? 'Dark Mode' : 'Light Mode'}
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
