// import Painting from './components/Painting/Painting';
import PaintingList from './components/PaintingList/PaintingList';
import Section from './components/Section/Section';
import paintings from './painting.json';

function App() {
  return (
    <div>
      <Section title="Hello this is title section">
        <PaintingList items={paintings} />
      </Section>

      <Section title="second title2" />
    </div>
  );
}

export default App;
