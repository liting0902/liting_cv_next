## About this project

### This CV is a SSR and CSR hybrid project via Next.js framework.

### Two main parts of this project :

-   [Main page (RWD ready)](https://cv-liting.vercel.app/)
    -   Public to general users, read-only pages.
-   [Admin page](https://cv-liting.vercel.app/admin)
    -   Allow authorized users to crud data through cloud-hosted database(firestore).
    -   Authentication processed via phone number(OTP through message).(Only available for Taiwanese mobile operators).
    -   Please note the pages are for demonstration, data accessibility is only on client side, any updated data WON'T be saved to database.(Only specific users can modify database)
