import { useForm } from "react-hook-form"
import useCreateCategory from "./service/mutation/useCreateCategory";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryCreate = () => {
    const { register, handleSubmit } = useForm();
    const {mutate} = useCreateCategory();
    const navigate = useNavigate();

    const submit = (data) =>{
        console.log(data);
        mutate(data, {
            
            onSuccess:()=>{
                navigate('/app/category')
            }
        })
    }
    return (
        <div>
            <form className='w-[600px]'onSubmit={handleSubmit(submit)}>

                <h1 className='text-center'>Create Category</h1>

                <input {...register("img", { required: true })} placeholder='img url'
                    className='my-2 w-full border px-2 py-1' type="text" />

                <input {...register("title", { required: true })} placeholder='title'
                    className='my-2 w-full border px-2 py-1' type="text" />

                <button className='border bg-green-500 py-[7px] px-[12px] rounded text-white my-[15px]'
                    type='submit'>Send</button>
            </form>
        </div>
    )
}

export default CategoryCreate
