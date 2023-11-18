// MyComponent.test.tsx
import CartItem from "@/app/components/CartItem";
import { render, screen } from "@testing-library/react";

test("renders MyComponent correctly", () => {
  const page = render(<CartItem />);
  expect(page).toMatchInlineSnapshot();
});
