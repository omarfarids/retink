import React, { useContext } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { AppContext } from "./context";

const Header = () => {
  const { businessName, email, setBusinessName, setEmail } =
    useContext<any>(AppContext);

  return (
    <div className="py-10">
      <nav className="p-5">
        <img className="w-24" src={"assets/Logo.png"} alt="" />
      </nav>
      <div className="m-3 flex flex-col-reverse md:flex-row items-center justify-evenly">
        <div className="md:w-2/5 flex flex-col gap-5">
          <p className="text-4xl font-bold md:w-72">
            Get Advanced AI + Expert Created
          </p>
          <p className="md:w-96 font-medium">
            Boost your sales 10x faster with content customized by our unique
            partnership of human creativity and AI optimization
          </p>
          <div>
            <div>
              <p className="text-lg font-bold text-primary1">
                Sign Up For The Beta
              </p>
              <form action="#">
                <Input
                  placeHolder="Business Name"
                  type="text"
                  data={businessName}
                  setData={setBusinessName}
                  classes="inline text-center placeholder:italic placeholder:text-sm placeholder:text-primary1 focus:outline-offset-0 pt-1 border-b-2 border-black"
                />
                <p className="inline"> would like a beta invite sent to </p>
                <Input
                  placeHolder="@email address"
                  type="email"
                  data={email}
                  setData={setEmail}
                  classes="inline text-center placeholder:italic placeholder:text-sm placeholder:text-primary1 focus:outline-offset-0 pt-1 border-b-2 border-black"
                />
              </form>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-3 md:gap-12">
            <Button label="Notify me" type="primary" />
            <Button label="Sign up as freelance parter" type="bordered" />
          </div>
        </div>
        <img
          className="md:w-1/3"
          src={"assets/retink-avatar.png"}
          alt="retink avatar"
        />
      </div>
    </div>
  );
};

export default Header;
