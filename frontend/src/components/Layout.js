import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <main className="max-w-6xl mx-auto px-6 py-24">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
