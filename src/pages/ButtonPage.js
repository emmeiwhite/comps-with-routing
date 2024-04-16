import Button from "./../components/Button";
import {
  GoBell,
  GoFileDirectory,
  GoInbox,
  GoPerson,
  GoBookmark,
} from "react-icons/go";

export default function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked 1");
  };

  const handleMouseOver = () => {
    console.log("onMouseOver!");
  };
  return (
    <div>
      <div>
        <Button
          primary
          rounded
          outline
          border
          onClick={handleClick}
          onMouseOver={handleMouseOver}
        >
          <GoBell />
          Buy Now
        </Button>
      </div>
      <div>
        <Button
          secondary
          rounded
        >
          <GoFileDirectory />
          Subscribe
        </Button>
      </div>
      <div>
        <Button
          warning
          outline
        >
          <GoInbox />
          Login
        </Button>
      </div>
      <div>
        <Button
          danger
          outline
        >
          <GoPerson />
          Register
        </Button>
      </div>
      <div>
        <Button
          success
          rounded
        >
          <GoBookmark />
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
