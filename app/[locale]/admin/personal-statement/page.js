"use client";
import React, { useEffect, useState } from "react";
import UpdatePS from "@/container/admin/updatePS.js";
import { useRouter } from "next/navigation";
import useLocale from "@/hooks/useLocale";
export default function AdminPS() {
  const { locale } = useLocale();
  const router = useRouter();
  const [isLogged, setLogged] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("admin")) router.push(`/${locale}/admin`);
    else setLogged(sessionStorage.getItem("admin"));
  }, []);
  return (
    <React.Fragment>{isLogged && <UpdatePS locale={locale} />}</React.Fragment>
  );
}
