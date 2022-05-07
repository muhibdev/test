const Header = ({ title }: { title: string }) => {
  return (
    <div
      className="px-3 py-2  text-white"
      style={{ backgroundColor: 'var(--gray-100)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex py-2">
            <h1 className="h4 border border-2 px-2 py-1 rounded m-0">
              dr Plus<sup>+</sup>
            </h1>
            <h1 className="h3 m-auto">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
