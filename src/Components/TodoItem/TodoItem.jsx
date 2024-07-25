import { useDispatch } from 'react-redux';
import { deleteTasks} from '../../App/Todos.Slice';

export default function TodoItem({ Tasks, taskat }) {
    const { id, completed, task } = Tasks;
    const dispatch = useDispatch()
    return (
        <>
            <div className='p-5   hover:border-[1px] hover:shadow-md hover:transition-all hover:duration-1000  hover:bg-[#d4cae328]  '>
                <h1 className='uppercase text-2xl'>Todo <span className='text-[#735F32]'>Item #{taskat.indexOf(Tasks) + 1}</span></h1>
                <div className='flex flex-col lg:flex-row lg:flex lg:justify-between gap-5 items-center'>
                    <p>{task}</p>
                    <div className='flex items-center gap-11'>
                        {completed == "true" ? <div className='border-[1px] px-2 rounded-full flex items-center justify-center gap-3'>
                            <span className=''>Completed </span>
                            <i className="fa-solid fa-check text-red-800"></i>
                        </div> : <div className='border-[1px] px-2 rounded-full flex items-center justify-center gap-3'>
                            <span className=''>Completed </span>
                            <i className="fa-regular fa-circle-xmark text-red-800"></i>
                        </div>}
                        <i onClick={() => {
                            dispatch(deleteTasks({ id }))
                        }} className="fa-solid cursor-pointer fa-trash-arrow-up text-2xl "></i>
                    </div>
                </div>
            </div>
        </>
    )
}
