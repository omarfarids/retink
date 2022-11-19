import React, { useContext } from "react";
import CardA from "../components/CardA";
import CardB from "../components/CardB";
import TextSection from "../components/TextSection";
import { cardAData, CardBdata, textSectionData } from "./data";
import Input from "../components/Input";
import { AppContext } from "./context";
import Button from "../components/Button";

type Props = {};

const Main = (props: Props) => {
  const { businessName, email, setBusinessName, setEmail } =
    useContext<any>(AppContext);

  return (
    <div className="py-10">
      <div className="pb-10 flex flex-col md:flex-row flex-wrap gap-10 justify-center">
        {cardAData.map((data) => {
          return <CardA key={data.id} {...data} />;
        })}
      </div>
      <div>
        {textSectionData.map((data) => {
          return <TextSection key={data.id} {...data} />;
        })}
      </div>
      <div className="py-10 flex md:flex-row justify-center flex-wrap md:w-3/4 gap-10 mx-auto">
        {CardBdata.map((data) => {
          return <CardB key={data.id} {...data} />;
        })}
      </div>
      <div className="py-10 flex flex-col items-center justify-center flex-wrap md:w-3/4 gap-10 mx-auto">
        <h1 className="font-medium text-lg text-primary1 py">
          Sign up For The BETA to see more
        </h1>
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5 items-center"
          >
            <div className="flex flex-col items-center md:flex-row">
              <Input
                placeHolder="Business Name"
                type="text"
                data={businessName}
                setData={setBusinessName}
                classes="px-10 py-3 rounded-2xl border border-primary1 placeholder:text-center m-3"
              />
              <Input
                placeHolder="@email address"
                type="email"
                data={email}
                setData={setEmail}
                classes="px-10 py-3 rounded-2xl border border-primary1 placeholder:text-center m-3"
              />
            </div>
            <Button label="Notify me" type="primary" />
            <Button label="Sign in as a freelancer partner" type="bordered" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
