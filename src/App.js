import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

const items = [
  {
    id: "abcdefg123",
    heading: "What are the tour timings?",
    content:
      "Our tours run every day from 9:00 AM to 5:00 PM. We have multiple time slots available to accommodate different schedules. Please check our website or contact us for specific timing details and availability.",
  },
  {
    id: "hijklmno45",
    heading: "Are meals included in the tour?",
    content:
      "Yes, lunch and snacks are provided during the tour. Our experienced chefs prepare delicious and nutritious meals using fresh, locally sourced ingredients. We also cater to dietary restrictions and preferences, so please inform us in advance if you have any special dietary needs.",
  },
  {
    id: "pqrstuvw67",
    heading: "What should I bring for the tour?",
    content:
      "We recommend bringing sunscreen, comfortable shoes, and a camera. Additionally, consider bringing a hat, sunglasses, and a reusable water bottle to stay hydrated during the tour. Depending on the tour activities, you may also need insect repellent, a rain jacket, or binoculars.",
  },
  {
    id: "xyz123abc9",
    heading: "Is transportation provided?",
    content:
      "Yes, transportation to and from the tour location is included. Our comfortable and air-conditioned vehicles are driven by experienced and licensed drivers who prioritize safety and punctuality. We offer convenient pick-up and drop-off points at designated locations, ensuring a hassle-free travel experience for our guests.",
  },
  // Add more objects as needed
];

export default function App() {
  return (
    <>
      <Accordion items={items} />
    </>
  );
}
