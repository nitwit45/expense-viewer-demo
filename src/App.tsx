import React, { useState } from 'react';
import { mockExpenses } from './data/mockExpenses';
import ExpenseTable from './components/ExpenseTable';
import FilterBar from './components/FilterBar';

function App() {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const filtered = mockExpenses.filter((e) => {
    const matchesCategory = category ? e.category === category : true;
    const matchesSearch = search
      ? e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.category.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Expense Viewer</h2>
      <FilterBar
        category={category}
        onCategoryChange={setCategory}
        search={search}
        onSearchChange={setSearch}
      />
      <ExpenseTable data={filtered} />
    </div>
  );
}

export default App;
