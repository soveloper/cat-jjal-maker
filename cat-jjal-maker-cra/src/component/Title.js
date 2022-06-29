const Title = ({ counter }) => {
  const title = (counter) ? `${counter}번째 ` : '';

  return (
    <h1>{title}고양이 가라사대</h1>
  );
}

export default Title;