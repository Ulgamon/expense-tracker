import ExpenseItem from './ExpenseItem.js'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter.js';
import React from 'react';

function Expenses(props) {

    const [year, setYear] = React.useState('')

    const handleYearFromFilter = (yearFromFilter) => {
        setYear(yearFromFilter)
        console.log(yearFromFilter)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter filterYear={handleYearFromFilter} />
            {props.expenses.filter(expense => (expense.date.getFullYear() === Number(year) || year === '')).map(expense => 
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />)
            }
        </Card>
    )
}

export default Expenses