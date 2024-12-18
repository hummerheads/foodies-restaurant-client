import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="bg-banner h-[40vh] grid items-center justify-center text-center content-center my-4 md:my-10">
        <h1 className="text-xl md:text-6xl dancing text-[#FFCE6D] mb-5">
          Login
        </h1>
        <h3 className="text-white text-sm md:text-xl">
          <a href="/">Home</a> | <a href="/login">Login</a>
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#101418] bg-opacity-30 p-4 md:p-20 rounded-lg shadow-lg md:w-1/2">
          <div className="text-center mb-4 md:mb-6">
            <p className="md:text-2xl text-[#FFCE6D] ">
              Let&apos;s Start Your Dinner With Us
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-10">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#FFCE6D]"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#FFCE6D]"
            />
            <button
              type="submit"
              className="w-full py-2 border  rounded-lg font-bold  bg-[#FFCE6D] text-[#101418] hover:bg-[#101418] hover:text-[#FFCE6D]"
            >
              LOGIN
            </button>
          </form>
          <div className="text-center my-4 md:my-10 text-[#FFCE6D]">OR</div>
          <button
            onClick={signInWithGoogle}
            className="w-full py-2 border rounded-lg flex items-center font-bold justify-center space-x-2 bg-[#FFCE6D] text-[#101418] hover:bg-[#101418] hover:text-[#FFCE6D]"
          >
            <i className="fab fa-google text-red-500"></i>
            <span>Login with Google Account</span>
          </button>
          <div className="text-center text-md mt-4 md:text-lg text-[#FFCE6D]">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="  text-white hover:text-[#FFCE6D] text-lg md:text-xl"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;