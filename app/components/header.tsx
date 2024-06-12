'use client'

import Image from "next/image";
import Link from "next/link";
import earth from "../../public/earth.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const links = [
  { href: "https://github.com/xjakuub1", name: "Github", icon: <FaGithub size={35} /> },
  { href: "https://www.linkedin.com/in/jakub-majt%C3%A1n-ba9117311/", name: "LinkedIn", icon: <FaLinkedin size={35} /> },
]

export default function Header() {
  return (
    <>
      <nav className='h-24 flex justify-start items-center mx-auto px-6 py-2 bg-white/30 border-b-2 border-zinc-200 backdrop-blur-md'>
        <span className='pr-2'>
          <Image
            src={earth}
            width={75}
            alt='A svg photo of the planet earth and its continents'
            className='rounded-full'
          />
        </span>
        <Link href={'/'}>
          <h1 className='text-black font-bold text-xl'>World Countries Search</h1>
        </Link>
        <ul className='absolute right-3 items-center'>
          <li className='flex gap-x-3 pr-5'>
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className='rounded-full'
                >
                  <p className="px-2">{link.icon}</p>
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    </>
  )
}