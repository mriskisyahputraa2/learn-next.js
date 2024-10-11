import ContactPage from "@/app/contact/page";
import ContactLayout from "@/app/contact/layout";
import { render, screen } from "@testing-library/react";

describe("About Page", () => {
  it("should render", () => {
    const page = render(
      <ContactLayout>
        <ContactPage />
      </ContactLayout>
    );
    expect(page).toMatchSnapshot();
  });
});
