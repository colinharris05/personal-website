interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => (
  <div className="flex justify-center">
    <main>{children}</main>
  </div>
);

export default Main;
