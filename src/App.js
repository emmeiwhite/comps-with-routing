import Button from "./Button";

export default function App() {
  return (
    <div>
      <div>
        <Button
          primary
          rounded
          outline
        >
          Buy Now
        </Button>
      </div>
      <div>
        <Button
          primary
          warning
        >
          Subscribe
        </Button>
      </div>
      <div>
        <Button>Login</Button>
      </div>
      <div>
        <Button>Register</Button>
      </div>
      <div>
        <Button>Add To Cart</Button>
      </div>
    </div>
  );
}
