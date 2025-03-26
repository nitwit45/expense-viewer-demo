import React from 'react';

type Props = {
    category: string;
    onCategoryChange: (cat: string) => void;
    search: string;
    onSearchChange: (text: string) => void;
  };
  
  export default function FilterBar({ category, onCategoryChange, search, onSearchChange }: Props) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
  
        <input
          type="text"
          placeholder="Search by title or category"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
      </div>
    );
  }
  