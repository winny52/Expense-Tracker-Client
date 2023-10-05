import { Link } from 'react-router-dom';

function Signup() {

  return (
    <div className="h-screen w-full bg-blue-200 flex items-center pt-9rem">
        <div className="bg-blue-800 w-25rem min-h-20rem mx-auto p-6 flex flex-col gap-1rem rounded-lg">
            <h1 className="text-3xl text-white">Sign Up</h1>
            <h4 className="mt-4 mb-4 font-bold text-white">Please create an account to keep track of your expenses</h4>
           
            <div className="flex flex-col gap-1rem">
                <label htmlFor="username" className="block text-blue-200 mb-4">Username</label>
                <input className="mb-4 h-10 p-2 bg-lightblue text-darkblue outline-none rounded" type="text" name="username" id="username" />
            </div>
            <div className="flex flex-col gap-1rem">
                <label htmlFor="email" className="block text-blue-200 mb-4">Email</label>
                <input className="mb-4 h-10 p-2 bg-lightblue text-darkblue outline-none rounded" type="text" name="email" id="email" />
            </div>
            <div className="flex flex-col gap-1rem">
                <label htmlFor="password" className="block text-blue-200 mb-4">Password</label>
                <input className=" mb-4 h-10 p-2 bg-lightblue text-darkblue outline-none rounded" type="password" name="password" id="password" />
            </div>
            <input className="p-2 w-40 mt-2rem mx-auto font-semibold text-darkblue rounded bg-blue-200 hover:bg-blue-400" type="submit" value="Sign Up" />
            <p className="mx-auto my-3 font-semibold text-black">Already have an account? <Link to ={"/login"} className="text-blue-200">Login</Link>
            </p>
        </div>
    </div>
  );
}

export default Signup;
