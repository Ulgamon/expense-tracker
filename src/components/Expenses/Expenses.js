import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter.js';
import React from 'react';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [year, setYear] = React.useState('2021')

    const handleYearFromFilter = (yearFromFilter) => {
        setYear(yearFromFilter)
        console.log(yearFromFilter)
    }

    const expenses = props.expenses.filter(expense => expense.date.getFullYear() === Number(year))

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={year} filterYear={handleYearFromFilter} />
            <ExpensesChart expenses={expenses} />           
            <ExpensesList items={expenses} />
        </Card>
    )
}

export default Expenses