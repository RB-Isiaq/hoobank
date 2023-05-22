import "@styles/globals.css";

export const metadata = {
  title: "Hoobank",
  description: "Banking and Finance",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="bg-primary w-full overflow-hidden">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
