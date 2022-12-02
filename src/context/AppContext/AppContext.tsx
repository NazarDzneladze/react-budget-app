import { JSXElementConstructor, PropsWithChildren, ReactNode } from "react";
import { IContext } from "types";

interface IAppContext {
  components: Array<JSXElementConstructor<PropsWithChildren<IContext>>>;
  children: ReactNode;
}

export const AppContext = ({ components, children }: IAppContext) => {
  return (
    <>
      {components.reduceRight((children, Provider) => {
        return <Provider>{children}</Provider>;
      }, children)}
    </>
  );
};
