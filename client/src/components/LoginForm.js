function Login() {
    return (
      <div className="h-screen w-full bg-blue-200 flex items-center pt-9rem">
        <div className="bg-blue-800 w-25rem min-h-20rem mx-auto p-5 flex flex-col gap-1rem rounded-lg">
          <h1 className="text-3xl text-white">Login</h1>
          <h4 className="mt-4 mb-4 font-bold text-white">Please login to keep track of your expenses</h4>
          <div className="flex flex-col gap-1rem">
            <label htmlFor="username" className="block text-blue-200 mb-4">Username</label>
            <input className="mb-4 h-10 p-2 bg-lightblue text-darkblue outline-none rounded" type="text" name="username" id="username" />
          </div>
          <div className="flex flex-col gap-1rem">
            <label htmlFor="password" className="block text-blue-200 mb-4">Password</label>
            <input className=" mb-4 h-10 p-2 bg-lightblue text-darkblue outline-none rounded" type="password" name="password" id="password" />
          </div>
          <input className="p-2 w-40 mt-2rem mx-auto font-bold text-darkblue rounded bg-blue-200" type="submit" value="Log In" />
          <p className="mx-auto font-bold text-white">Don't have an account? <span className="text-darkblue">Sign up</span></p>
        
        </div>

      </div>
    );
  }
  
  export default Login;
  