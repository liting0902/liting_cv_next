import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import routeConfig from "../../lib/routeConfig.js";
import { ModalTogglerProvider } from "@/contexts/modal.context.js";
import { LoaderTogglerProvider } from "@/contexts/loader.context.js";
import { AuthProvider } from "@/contexts/auth.context.js";
import { ThemeTogglerProvider } from "@/contexts/theme.context.js";
import { UpdateExperienceDataProvider } from "@/contexts/updateExperienceData.context.js";
import { SetExperienceProvider } from "@/contexts/setExperience.context.js";

import initTranslations from "../i18n.js";
import TranslationsProvider from "@/contexts/i18n.context";
import MetaData from '@/components/MetaData.jsx'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LiTing-Frontend Engineer",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,params:{locale}
}: Readonly<{
  children: React.ReactNode;
  params:{locale:string}
}>) {
  
  const { resources } = await initTranslations("en", [
    "common",
    "cards",
    "basicInfoModal",
    "skillsModal",
  ]);
  const siteTitle = "Hi , this is Liting's CV. A frontend engineer who enjoys Work and Life!"
  const siteContent = `Frontend technic : Javascript, React, Next,CSR, SSR, SPA,HTML, CSS`

  return (
    <html lang="en">
      <body className={inter.className}>
      <MetaData siteTitle={siteTitle} siteContent={siteContent} imgPath ="/image/enFrance.jpg"/>  
     <TranslationsProvider
      resources={resources}
      namespaces={["common", "cards", "basicInfoModal", "skillsModal"]}
      locale={locale}
    >
        <LoaderTogglerProvider>
          <ModalTogglerProvider>
            <ThemeTogglerProvider>
              <AuthProvider>
                <UpdateExperienceDataProvider>
                  <SetExperienceProvider>
                  <Navbar routeConfig={routeConfig} locale={locale}/>
                    <div
                      style={{
                        height: "90vh",
                        width: "100vw",
                        paddingTop: "4rem",
                      }}
                    >
                       {children}
                    </div>
                  </SetExperienceProvider>
                </UpdateExperienceDataProvider>
              </AuthProvider>
            </ThemeTogglerProvider>
          </ModalTogglerProvider>
        </LoaderTogglerProvider>
      </TranslationsProvider>
       </body>
    </html>
  );
}
