import React, { Fragment, useContext, memo } from "react";
import Link from "next/link";
import { withTranslation } from "next-i18next";

function NavItem({ t, path, title, setDisplayMenu, locale }) {
  return (
    <Fragment>
      <>
        <Link
          href={`/${locale}/${path}`}
          className="navLink"
          onClick={(e) => {
            // if (getPath === `/${path}`) return null;
            setDisplayMenu(false);
          }}
          cy-data={`nav-${path}-link`}
        >
          {t(`${title}`)}
        </Link>
      </>
    </Fragment>
  );
}
export default memo(withTranslation("common")(NavItem));
