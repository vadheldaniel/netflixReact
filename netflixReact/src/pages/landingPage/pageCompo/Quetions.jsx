import Question from "./Quetion";
import faqData from "../../../store/faqData";

function Questions() {
  return (
    <div className="quitions text-white text-2xl font-semibold pt-5">
      <h1 className="pb-5">Frequently Asked Questions</h1>
			{faqData.map(q=><Question question={q}/>)}
    </div>
  );
}

export default Questions;
