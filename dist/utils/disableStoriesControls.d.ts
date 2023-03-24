type ReturnDisabledPropType = {
    [key: string]: {
        table: {
            disable: true;
        };
    };
};
export declare function disableStoriesControls(...args: string[]): ReturnDisabledPropType;
export {};
