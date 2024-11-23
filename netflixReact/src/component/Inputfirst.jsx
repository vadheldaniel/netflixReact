import { IoIosArrowForward } from "react-icons/io";
function Inputfirst() {
  return (
    <form>
      <label htmlFor="email">Ready to watch? Enter your email to create or restart your membership.</label>
      <input
        name="email"
        type="email"
        className=" mt-2 text-slate-200 p-2 w-2/3 px-3 mx-4 bg-transparent border rounded-md"
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
