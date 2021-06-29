import Head from 'next/head'
import Sidebar from '../Elements/Blocks/sidebar';

const UserLayout = ({ children, page = "Dashboard", handleSignOut }) => {
  return (
    <>
      <Head>
        <title>Dash App</title>
      </Head>
      <section className="w-full h-screen bg-backgroundOne">
        <div className="container-case mx-auto lg:p-10 flex lg:flex-row flex-col gap-x-6 xl:gap-x-14">
            <Sidebar page={page} handleSignOut={handleSignOut} />
          <div className="w-full lg:w-4/5 p-6 lg:p-0">{children}</div>
        </div>
      </section>
    </>
  );
};

export default UserLayout;
