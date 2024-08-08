"use client";
import React, { useContext, useState, useEffect } from "react";
import SignIn from "./signIn";
import UpdatePage from "./updatePage.js";
import { useAuthStateChanged } from "@/hooks/useAuthStateChanged.js";

export default function Admin() {
  const user = useAuthStateChanged();

  return <React.Fragment>{user ? <UpdatePage /> : <SignIn />}</React.Fragment>;
}
