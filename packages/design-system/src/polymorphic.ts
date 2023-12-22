/**
 * @see https://github.com/radix-ui/primitives/blob/17ffcb7aaa42cbd36b3c210ba86d7d73d218e5be/packages/react/polymorphic/src/polymorphic.ts
 */
export interface PolymorphicForwardRefComponent<DefaultAs, OwnProps = {}>
  extends React.ForwardRefExoticComponent<
    Merge<
      DefaultAs extends React.ElementType
        ? React.ComponentPropsWithRef<DefaultAs>
        : never,
      OwnProps & { as?: DefaultAs }
    >
  > {
  <As = DefaultAs>(
    props: As extends keyof JSX.IntrinsicElements
      ? Merge<JSX.IntrinsicElements[As], OwnProps & { as: As }>
      : As extends React.ComponentType<infer P>
      ? Merge<P, OwnProps & { as: As }>
      : never,
  ): React.ReactElement | null;
}

type Merge<P1, P2> = Omit<P1, keyof P2> & P2;
