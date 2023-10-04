import Expense from "./expense"
function Expenses(){
    //const[expenses,setExpenses]=useState([])

    const data =[
        {
            id:1,
            name:"Uber",
            date:"22/05/2023",
            category:"Transport",
            amount:"250"
        },
        {
            id:2,
            name:"Uber",
            date:"22/05/2023",
            category:"Transport",
            amount:"250"
        },
        {
            id:3,
            name:"Uber",
            date:"22/05/2023",
            category:"Transport",
            amount:"250"
        }
    ]

    // useEffect(()=>{
    //     fetch()
    //     .then(resp=>resp.json)
    //     .then((data)=>{
    //         setExpenses(data)
    //     })
    // })
    return(
        <div>
            {data.map((expense)=>(
                <Expense key ={expense.id} expense={expense}/>
            ))}
        </div>
    )
}

export default Expenses