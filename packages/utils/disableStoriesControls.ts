type ReturnDisabledPropType = {
  [key: string]: {
    table: {
      disable: true;
    };
  };
};

export function disableStoriesControls(...args: string[]) {
  const obj: ReturnDisabledPropType = {};
  args.forEach((val) => {
    obj[val] = {
      table: {
        disable: true,
      },
    };
  });
  return obj;
}
