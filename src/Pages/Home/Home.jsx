import React, { useEffect, useMemo, } from 'react'
import { Modal } from '../../Components/Modal/Modal'
import TodoItem from '../../Components/TodoItem/TodoItem';
import { getTasks } from '../../App/Todos.Slice';
import { useDispatch, useSelector } from 'react-redux';
import { Slide } from 'react-awesome-reveal';


export default function Home() {
    const dispatch = useDispatch()
    const { data, isLoading} = useSelector(function (Store) {
        return Store.TodoReducer
    })

    const todoItems = useMemo(() => {
        return data.length === 0 ? <><h1 className='text-white col-span-12 text-center text-5xl'>No Tasks Yet Please Add Your First Task</h1> </> : data.map((task) => (
            <TodoItem key={task.id} Tasks={task} taskat={data} />
        ))
    }, [data]);


    useEffect(() => {
        dispatch(getTasks())
    }, [])

    if(isLoading)
    {
        return <section className='min-h-screen'>
        <div className="container flex justify-center items-center">
            <span className="loader"></span>
        </div>
    </section>
    }

    return (
        <>
            <section className='  text-white mt-10'>
                <div className="container ">
                    <div className='flex flex-col  gap-5'>
                        <div className='flex justify-evenly items-center'>
                            <h1 className='uppercase text-4xl'>Todo <span className='text-[#735F32]'>List</span></h1>
                            <p className='rounded-full flex justify-center p-2 text-black font-extrabold text-3xl items-center bg-[#735F32]'>{data ? data.length : 0}</p>
                        </div>
                        <Modal />
                    </div>
                    <div className=' flex-col gap-5 p-5 mt-5  '>
                        <Slide>
                            {todoItems}
                        </Slide>

                    </div>
                </div>

            </section>
        </>
    )
}
