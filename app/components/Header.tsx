"use client";

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {

    const { data: session } = useSession();

    const handleSignout = async () =>{
        try {
            await signOut()
        } catch (error) {
            console.log("error from signout", error)
        }
    }

  return (
    <div>
        <button onClick={handleSignout}>Signout</button>
        {
            session ? (
                <div>Welcome</div>
            ) : (
                <div>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </div>
            )
        }
    </div>
  )
}

export default Header;