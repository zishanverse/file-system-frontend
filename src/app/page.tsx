"use client";
import { useCookies } from 'next-client-cookies';
import Image from "next/image";
import { redirect } from 'next/navigation';

export default function Home() {
  if (useCookies().get("jwt_token") === undefined) {
    return redirect("/login");
  }
  return (
    <h1>Home</h1>
  );
}
