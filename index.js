import { get,save } from "./filesMethods.js";
import inquirer from "inquirer";
import { promptExpenses } from "./expensesPrompts.js"; 


const main = async ()=>{
    let run=true;
    while(run){
        const action=await inquirer.prompt([
            {
                type:"list",
                name:"chosen",
                message:"Veamos los gastos del mes:",
                choices: [
                    {value:1,name:"Ver gastos"},
                    {value:2,name:"Anotar gasto"},
                    {value:99,name:"Salir"}
                ],
            },

        ]);
        switch(action.chosen) {
            case 1:
                await getAllExpenses();
                break;
            case 2:
                await createNewExpense();
                break;
            case 99:
                run=false;
                break;
            default:
                run=false;
                break;
        }
    }
    console.log("Acuerdate de no gastar mas que tu sueldo. Adios!")
};

main();


async function createNewExpense(){
    console.log("Agregando gasto realizado");
    const newExpenseData=await promptExpenses();
    console.log("Agregando gasto:",newExpenseData); 
    const currentExpend=await get("expenses");
    currentExpend.push(newExpenseData);
    await save("expenses",currentExpend);
}

async function getAllExpenses() {

    const currentExpend=await get("expenses");
    if (currentExpend.length === 0) {
        console.log("Enhorabuena! No tienes gastos por ahora ");
    } else {
        let totalSpent = 0;
        console.log("Tus gastos son:");
        currentExpend.forEach(expense => {
            totalSpent += parseFloat(expense.spent);
            console.log(`Tipo de gasto: ${expense.expense_type.toUpperCase()}`);
            console.log(`Monto gastado: $ ${expense.spent}`);
            console.log(`Mes del gasto: ${expense.month_expense}`);
            console.log(`-Total de dinero gastado: $ ${totalSpent}`);
        });
        };
    }

