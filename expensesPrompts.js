import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt"

inquirer.registerPrompt('date', DatePrompt);

export async function promptExpenses(){
    return await inquirer.prompt(newExpense) 
}

const newExpense = [
    {
        type: 'input',
        name: 'expense_type',
        message: 'Tipo de gasto',
    },
{
    type: 'input',
    name: 'spent',
    message: 'Monto gastado'
},
{
    type: 'date',
    name: 'month_expense',
    message: 'Gastos del Mes de:',
    locale: 'es',
    format: {
        month: 'short',
        year: 'numeric',
        hour: undefined, 
        minute: undefined,
        day: undefined
    }
},

]