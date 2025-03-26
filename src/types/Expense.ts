export type Expense = {
    id: number;
    title: string;
    amount: number;
    category: 'Food' | 'Travel' | 'Shopping' | 'Other';
    date: string;
  };
  