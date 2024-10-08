let App = () => {
  let smartPeople = ["Dennis Ritchie", "James Gosling", "Linus Torvalds", "Hawraa the Girl"];
  let prettyPeople = ["Emma Stone", "Jennifer Lawrence", "Hawraa the Girl", "Angelina Jolie"];
  let strongPeople = ["Batman", "The Hulk", "Hawraa the Girl", "Thor"];
  let holidayPeople = ["Your Mom", "Nourhan the Hottie", "Hawraa the Girl", "FOFO the Singer"]
  let kindPeople = ["Hawraa gives her the CPR", "You give her the CPR", "Let her die", "Call for help"]
  let coldPeople = ["Give her your clothes and die", "Let her die, She should've came prepared", "Take off Asmaa's clothes and give them to her", "Light Asmaa on fire so everyone gets warm"]
  let Points = 0;
  let smartPerson = (e) => {
    let smart = e;
    if(smart === "Hawraa the Girl"){
      Points++;
    }
    else {
      Points = 0;
      Object.freeze(Points)
    }
  }
  let prettyPerson = (e) => {
    let pretty = e;
    if(pretty === "Hawraa the Girl"){
      Points++;
    }
    else {
      Points = 0;
      Object.freeze(Points)
    }
  }
  let strongPerson = (e) => {
    let strong = e;
    if(strong === "Hawraa the Girl"){
      Points++;
    }
    else {
      Points = 0;
      Object.freeze(Points)
    }
  }
  let holidayPerson = (e) => {
    let holiday = e;
    if(holiday === "Hawraa the Girl"){
      Points++;
    }
    else {
      Points = 0;
      Object.freeze(Points)
    }
  }
  let kindPerson = (e) => {
    let kind = e;
    if(kind === "Let her die"){
      Points++;
    }
    else {
      Points = 0;
      Object.freeze(Points)
    }
  }
  let coldPerson = (e) => {
    let cold = e;
    if(cold === "Light Asmaa on fire so everyone gets warm"){
      Points++;
    }
    else {
      Points = 0;
      Object.freeze(Points)
    }

    if(Points > 5){
      alert("You SHOULD MARRY MEE")
    }
    else {
      alert("We're NOT getting married")
    }
  }
  return   (
  <div className="bg-red-50">
  <h1 className="capitalize text-[32px] text-center">judgment day</h1>
  <div className="my-[30px] mx-[50px]">
    <h1 className="text-[19px] pb-[10px] font-semibold">Who's the smartest in the folloiwng group of people:</h1>
    {smartPeople.map((element) => (
      <button className="flex flex-col text-[18px] p-1 hover:text-red-900 ease-in-out duration-300" onClick={() => smartPerson(element)}>{element}</button>
    ))}
  </div>
  <div className="my-[30px] mx-[50px]">
  <h1 className="text-[19px] pb-[10px] font-semibold">You're going on a holiday with friends, there's only one place left in the car, who are you bringing: </h1>
    {holidayPeople.map((element) => (
      <button className="flex flex-col text-[18px] p-1 hover:text-red-900 ease-in-out duration-300" onClick={() => holidayPerson(element)}>{element}</button>
    ))}
  </div>
  <div className="my-[30px] mx-[50px]">
  <h1 className="text-[19px] pb-[10px] font-semibold">Who's the prettiest in the folloiwng group of people:</h1>
    {prettyPeople.map((element) => (
      <button className="flex flex-col text-[18px] p-1 hover:text-red-900 ease-in-out duration-300" onClick={() => prettyPerson(element)}>{element}</button>
    ))}
  </div>
  <div className="my-[30px] mx-[50px]">
  <h1 className="text-[19px] pb-[10px] font-semibold">Wanda the Actor almost drowned, she needs a CPR, it's only you and Hawraa the Girl there, what are you doing?</h1>
    {kindPeople.map((element) => (
      <button className="flex flex-col text-[18px] p-1 hover:text-red-900 ease-in-out duration-300" onClick={() => kindPerson(element)}>{element}</button>
    ))}
  </div>
  <div className="my-[30px] mx-[50px]">
  <h1 className="text-[19px] pb-[10px] font-semibold">Who's the strongest in the folloiwng group of people:</h1>
    {strongPeople.map((element) => (
      <button className="flex flex-col text-[18px] p-1  hover:text-red-900 ease-in-out duration-300" onClick={() => strongPerson(element)}>{element}</button>
    ))}
  </div>
  <div className="my-[30px] mx-[50px]">
  <h1 className="text-[19px] pb-[10px] font-semibold">You, Hawraa the Girl and Asmaa the Smartie are walking in the middle of Alaska, Hawraa the Girl is cold, what are you doing?</h1>
    {coldPeople.map((element) => (
      <button className="flex flex-col text-[18px] p-1 hover:text-red-900 ease-in-out duration-300" onClick={() => coldPerson(element)}>{element}</button>
    ))}
  </div>
  </div>
  )
}
export default App;