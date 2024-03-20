import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from './Components/BudgetCard';
import AddBudgetModal from './Components/AddBudgetModal';
import { useState } from 'react';
import { useBudgets } from './contexts/BudgetsContext';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets, getBudgetExpenses } = useBudgets();

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Orçamentos</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Adicionar Orçamento</Button>
          <Button variant="outline-primary">Adicionar Despesa</Button>
        </Stack>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          {budgets.map((budget) => {

            const amount = getBudgetExpenses(budget.id).reduce((total, expenses) => {
              return total + expenses
            }, 0);

            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                gray
              />
            )
          })}
        </div>


      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
    </>
  );
}

export default App;
