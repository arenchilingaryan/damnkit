type ReturnDisabledPropType = {
  [key: string]: {
    table: {
      disable: true;
    };
  };
};

export function disableStoriesControls(...args: string[]): ReturnDisabledPropType {
  return args.reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        table: {
          disable: true,
        },
      },
    }),
    {},
  );
}
