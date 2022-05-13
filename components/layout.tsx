interface Props {
  children: React.ReactNode;
  classNames?: string;
}

const Layout = ({ children, classNames = "" }: Props) => (
  <main className={`max-w-3xl mx-auto px-5 ${classNames}`}>{children}</main>
);

export default Layout;
