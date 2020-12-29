import { ChangeEvent, FormEvent } from 'react';

export const onChange = (setInput: any) => {
  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };
  return onchange;
};

export const onSubmit = (
  local: Array<string>,
  input: string,
  setInput: any,
  setLocal: any,
  dispatchOnChange: any
) => {
  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkIncludesInput = local.includes(input);
    const trimInput = input.trim();

    if (checkIncludesInput || !trimInput) {
      return setInput('');
    }
    if (!checkIncludesInput && trimInput) {
      const set = [...local, input.replace(/\s/g, '')];

      return [
        setLocal(set),
        dispatchOnChange && dispatchOnChange(set),
        setInput(''),
      ];
    }
  };
  return onsubmit;
};

export const onRemove = (
  local: Array<string>,
  setLocal: any,
  dispatchOnChange: any
) => {
  const onremove = (insert: string) => {
    const set = [...local.filter((local: string) => local !== insert)];

    return [setLocal(set), dispatchOnChange && dispatchOnChange(set)];
  };
  return onremove;
};
