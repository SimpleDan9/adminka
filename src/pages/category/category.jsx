import { Link } from "react-router-dom"



const Category = () => {
  return (
    <div>
        <Link className="bg-green-500 text-white py-[8px] px-[15px]" to="/app/category/create">Create</Link>
     <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
     </ul>
    </div>
  )
}

export default Category
