import PropTypes from 'prop-types';

function Painting({
  url = 'https://dummyimage.com/600x400/000/fff&text=Default+image',
  title,
  price,
  authorLink,
  authorName,
  quantity,
}) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор:
        <a target="_blank" rel="noreferrer noopener" href={authorLink}>
          {authorName}
        </a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity > 5 ? 'есть в наличии' : 'заканчивается'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
