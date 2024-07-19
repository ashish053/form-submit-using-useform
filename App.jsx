
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div className="p-4 ">
        <form onSubmit={handleSubmit(data=>console.log(data))} action="">
          <input {...register('name')} type="text" placeholder="name"/>
          <input {...register('email')}  type="email" placeholder="email"/>
          <input  type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
