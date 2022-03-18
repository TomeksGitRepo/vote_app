import {useState} from 'react';

export const useSearchInput = (initalValue: string) => {
    const [value, setValue] = useState(initalValue);

    return {
      value,
      setValue,
      clear: () => setValue(""),
      eventHandler: {
        value,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        },
      },
    };
}
