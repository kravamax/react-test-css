import Painting from '../Painting/Painting';
import PropTypes from 'prop-types';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            url={item.url}
            title={item.title}
            price={item.price}
            authorName={item.author.tag}
            authorLink={item.author.url}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintingList;
