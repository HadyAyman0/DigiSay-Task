  import React from "react";
  import {
    Drawer,
    Button,
    Typography,
    IconButton,
    Input,
    Radio,
  } from "@material-tailwind/react";
  import { useFormik } from "formik";
  import { addTask, TodoActions } from "../../App/Todos.Slice";
  import { useDispatch } from "react-redux";
  import * as Yup from "yup"
  
  export function Modal() {
    const dispatch = useDispatch()
    const [openBottom, setOpenBottom] = React.useState(false);
    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);
    const {setData} = TodoActions;
    const validationSchema = Yup.object({
      task: Yup.string().required("Task is required"),
    })
    const handelAddTask = (values , closeDrawerBottom)=>{
      dispatch(addTask({values})).then(()=>{
        dispatch(setData())
        closeDrawerBottom()
      })
    
      console.log(values); 
    }
    const formik = useFormik({
      initialValues : {
        task:"",
        completed: false 
      },
      validationSchema , 
      onSubmit :(values) => handelAddTask(values, closeDrawerBottom) 
    })

    return (
      <React.Fragment>
        <div className="flex flex-wrap gap-4">
          <Button className="mx-auto" onClick={openDrawerBottom}>Add Task</Button>
        </div>
        <Drawer
          placement="bottom"
          open={openBottom}
          onClose={closeDrawerBottom}
          className="p-4"
        >
          <div className="container flex-col  justify-center items-center">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Add Your New Task Now
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerBottom}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className=" w-1/2">
              <Input label=" Your Task" name="task" value={formik.values.task} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
              {formik.errors.task && formik.touched.task ? <p className="text-red-700"> *{formik.errors.task}</p> : ""}
            </div>
            <div className="flex gap-3">
              <Radio name="completed" label="Completed ?" value="true" onChange={formik.handleChange} />
              <Radio name="completed" label="Un Completed ?" value="false" onChange={formik.handleChange}  defaultChecked />
            </div>
            <Button type="submit"
            size="sm" variant="outlined" className="mt-3">
              Save your Task 
            </Button>    
          </form>
    
          </div>
        </Drawer>
      </React.Fragment>
    );
  }