import Button from "./Button";

export default function App() {
  return (
    <div>
      <div>
        <Button
          primary
          rounded
          outline
          border
        >
          Buy Now
        </Button>
      </div>
      <div>
        <Button
          secondary
          rounded
        >
          Subscribe
        </Button>
      </div>
      <div>
        <Button
          warning
          outline
        >
          Login
        </Button>
      </div>
      <div>
        <Button
          danger
          outline
        >
          Register
        </Button>
      </div>
      <div>
        <Button
          success
          rounded
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
