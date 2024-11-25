import { IoIosArrowForward } from "react-icons/io";
function Inputfirst() {
  return (
    <form className="text-wrap text-center">
      <label htmlFor="email"className="block" >
        Ready to watch? Enter your email to create or restart your membership.
        </label>
      <input
        name="email"
        type="email"
        className=" mt-2 mb-2 text-slate-200 p-2 md:w-2/3 px-3 mx-4 bg-transparent border rounded-md
         sm:w-52 w-64
        "
        placeholder="Email address"
      />
      <button className="bg-[#c11119] rounded-md p-3">
        get Started{" "}
        <span className="inline-block pt-1">
          <IoIosArrowForward />
        </span>
      </button>
    </form>
  );
}

export default Inputfirst;
