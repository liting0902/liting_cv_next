"use client";
import React, { useState } from "react";
import CardsContainer from "@/components/layouts/CardsContainer.js";
import CardLayout from "@/components/layouts/CardLayout.js";
import { withTranslation } from "next-i18next";
import GetAccessCode from "./getAccessCode.js";
import Verify from "./verify.js";
function SignIn({ t }) {
  const [isOTPSent, setIsOTPSent] = useState(false);

  return (
    <>
      <CardsContainer>
        <CardLayout>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              id="recaptcha-container"
              style={{
                position: "absolute",
              }}
            ></span>

            {!isOTPSent ? (
              <GetAccessCode t={t} setIsOTPSent={setIsOTPSent} />
            ) : (
              <Verify t={t} />
            )}
          </div>
        </CardLayout>
      </CardsContainer>
    </>
  );
}
export default withTranslation("common")(SignIn);
