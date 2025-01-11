import chefHatImg from "../assets/Images/chef-hat.png"


export default function Header()
{
  return (
    <header>
      <img src={chefHatImg} alt="chefHat" width="80px" />
      <h1>Mr. SaucePan</h1>
    </header>
  )
}