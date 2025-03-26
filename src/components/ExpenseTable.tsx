import { Expense } from '../types/Expense';

type Props = {
  data: Expense[];
};

export default function ExpenseTable({ data }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 border">Title</th>
            <th className="text-left p-2 border">Amount</th>
            <th className="text-left p-2 border">Category</th>
            <th className="text-left p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id} className="hover:bg-gray-50">
              <td className="p-2 border">{e.title}</td>
              <td className="p-2 border">${e.amount}</td>
              <td className="p-2 border">{e.category}</td>
              <td className="p-2 border">{e.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
