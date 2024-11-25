function FooterList() {
	const list = [
		"FAQ",
		"Help Centre",
		"Account",
		"Investor Relations",
		"Jobs",
		"Ways to Watch",
		"Terms of Use",
		"Privacy",
		"Cookie Preferences",
		"Corporate Information",
		"Contact Us",
		"Speed Test",
		"Legal Notices",
		"Only on Netflix"
	];
	



  return (
    <div className="grid md:grid-cols-4 gap-3 mt-6 grid-cols-2">
      {list.map((item)=><li className="list-none">
        <a href="">{item}</a>
      </li>)}
    </div>
  );
}

export default FooterList;


