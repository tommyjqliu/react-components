import React, { useState, useRef, useMemo, useEffect } from 'react';
import { CloseIconWithBorder } from '../Icon';

type InputPropsType = {
  /**
   * @description       输入框内值
   * @default           ''
   */
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** @description       等同原生*/
  type?: string;
  /** @description       等同原生*/
  placeholder?: string;
  /** @description       等同原生*/
  maxLength?: number;
  /** @description       前缀插槽*/
  prefix?: React.ReactNode;
  /** @description       后缀插槽*/
  suffix?: React.ReactNode;
  /** @description       是否启用计数*/
  wordCount?: boolean;
  /** @description       是否启用清除键*/
  allowClear?: boolean;
};

export default (props: InputPropsType) => {
  const [value, setValue] = useState('');
  useEffect(() => setValue(props.value ?? ''), [props.value]);

  const warning = useMemo(() => value.length >= (props.maxLength ?? Infinity), [value]);
  const inputEl = useRef<HTMLInputElement>(null);

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originPreventDefault = e.preventDefault.bind(e);
    let isPrevent = false;
    e.preventDefault = () => {
      isPrevent = true;
      originPreventDefault();
    };
    props.onChange?.(e);
    !isPrevent && setValue(e.target.value);
  };

  const valueClear = () => setValue('');
  const clickInput = () => inputEl?.current?.focus();

  return (
    <div
      onClick={clickInput}
      className={`group flex items-center h-8 rounded outline ${
        warning
          ? 'outline-2 outline-red-400'
          : 'outline-1 outline-slate-200 hover:outline-slate-300 hover:focus-within:outline-sky-400 focus-within:outline-sky-400 focus-within:outline-2'
      }`}
    >
      {props.prefix}
      <input
        type={props.type}
        value={value}
        onChange={valueChange}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        ref={inputEl}
        className="flex-1 leading-8 outline-none px-1"
      />
      {!!value.length && props.allowClear && (
        <span
          className="invisible group-hover:visible text-slate-400 w-4 h-4 mx-1"
          onClick={valueClear}
        >
          <CloseIconWithBorder />
        </span>
      )}
      {!!value.length && props.wordCount && (
        <span className="text-slate-400 mx-1">
          {props.maxLength ? `${value.length}/${props.maxLength}` : value.length}
        </span>
      )}
      {props.suffix}
    </div>
  );
};
