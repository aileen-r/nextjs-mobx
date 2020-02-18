import Header from '~/components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const withLayout = Page => {
  const Layout = () => {
    return (
      <main style={layoutStyle}>
        <Header />
        <Page />
      </main>
    );
  };

  return Layout;
};

export default withLayout;
