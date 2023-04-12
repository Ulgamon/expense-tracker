import React from "react"
import ExpenseItem from './ExpenseItem.js'
import './ExpensesList.css'

const ExpensesList = props => {

    if (props.items.length === 0) {
        return(
            <h2 className="expenses-list__fallback">No expenses found.</h2>
        )
    }
    
    return (
            props.items.map(expense => 
            <ExpenseItem
            className='expenses-list'
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />)
    )
    
}

export default ExpensesList