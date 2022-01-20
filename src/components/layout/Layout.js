import MainNavigation from "./MainNavigation";
const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
