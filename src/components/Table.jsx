import { useDispatch, useSelector } from "react-redux"


const table = () => {

    const data = useSelector((state) => state.data)
    const dispatch = useDispatch();
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default table
