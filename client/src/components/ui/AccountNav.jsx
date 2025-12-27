const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split('/')?.[2];
  if (subpage === undefined) {
    subpage = 'profile';
  }
  const linkClases = (type = null) => {
  let classes =
     'flex justify-center mx-10 md:mx-0 gap-1 py-2 px-6 rounded-full';

  if (type === subpage) {
    classes += ' bg-primary text-white';
  } else {
    classes += ' bg-gray-200';
  }

  return classes;
};

return (
  <nav className="mt-24 mb-8 flex w-full flex-col justify-center gap-2 p-8 md:flex-row md:p-0">
    <Link className={linkClases('profile')} to={'/account'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
  </svg>
  My Profile
</Link>

      {/* Bookings */}
      <Link className={linkClases("bookings")} to={"/account/bookings"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h5v-10.75M2.25 21h1.5m18 0h-18M2.25 9l14.5-1.636M18.75 3l-1.5-.545m0 6.205l3 1m1.5-1.5-.5M6.75 7.364V3v18m3-13.636l10.5-3.819"
          />
        </svg>
        My accomodations
      </Link>

    </nav>
  );
};

export default AccountNav;
