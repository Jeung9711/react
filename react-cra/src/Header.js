function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      {props.desc}
    </header>
  );
}

export default Header;