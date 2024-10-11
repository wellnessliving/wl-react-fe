import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="h-full w-full overflow-x-hidden">
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/report">Report Page</Link>
          </li>
          <li>
            <Link to="/404">404 Link</Link>
          </li>
        </ul>
      </nav>
      <div>Current route is: {location.pathname}</div>

      <Outlet />
    </div>
  );
};

export default Layout;
