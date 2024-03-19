import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from './Components/BudgetCard';

function App() {
  return (
    <div className="App">
      <Container className="my-3">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Orçamentos</h1>
          <Button variant="primary">Adicionar Orçamento</Button>
          <Button variant="outline-primary">Adicionar Despesa</Button>
        </Stack>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
            alignItems: 'flex-start',
          }}
        ></div>
        <BudgetCard
          name="Entretenimento"
          amount={300}
          max={1000}
          gray
        ></BudgetCard>
      </Container>
    </div>
  );
}

export default App;
