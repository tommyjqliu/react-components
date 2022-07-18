import React, { useCallback, useEffect, useState } from 'react';
import { CloseIcon } from '../Icon';
import { flushSync } from 'react-dom';

export type ModalPropsType = {
  /** @description 是否可见 */
  visible: boolean;
  /** @description 传入的设置可见值函数 */
  setVisible: (arg: boolean) => void;
  /** @description 首部插槽 */
  header?: React.ReactNode;
  /** @description 中间插槽 */
  children?: React.ReactNode;
  /** @description 尾部插槽 */
  footer?: React.ReactNode;
  /** @description beforeClose事件，可以通过异步返回false来阻止窗口关闭 */
  beforeClose?: () => boolean | Promise<boolean>;
  /** @description onClose事件 */
  onClose?: () => void;
  /** @description  开启右上角关闭 */
  closeButton?: boolean;
  /** @description  开启点击Modal关闭 */
  closeOnClickModal?: boolean;
  /** @description  开启点击escape关闭 */
  closeOnPressEscape?: boolean;
  /** @description  设置组件的z-index，因为tailwind不支持动态类名，此处需要传入类名字符串 */
  zIndex?: string;
};

enum State {
  inactive,
  activate,
  active,
  deactivate,
}

export default ({
  visible,
  setVisible,
  header,
  children,
  footer,
  beforeClose,
  onClose,
  closeButton,
  closeOnClickModal,
  closeOnPressEscape,
  zIndex = 'z-[101]',
}: ModalPropsType) => {
  const [state, setState] = useState(State.inactive);
  useEffect(() => {
    state === State.inactive && visible && setState(State.activate);
    state === State.active && !visible && setState(State.deactivate);
    state === State.activate && setState(State.active);
    state === State.deactivate && setTimeout(() => setState(State.inactive), 200);
  });

  const modalStyle = state === State.active ? 'bg-gray-500/30' : 'bg-transparent';
  const windowStyle = state === State.active ? 'scale-100' : 'scale-50';

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible) {
        closeOnPressEscape && close();
      }
    },
    [setVisible, visible],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  async function close() {
    if ((await beforeClose?.()) ?? true) {
      setVisible?.(false);
      onClose?.();
    }
  }

  // if (state === State.inactive) return null
  return (
    <div
      onClick={closeOnClickModal ? close : undefined}
      className={`transition ease-in-out duration-300 flex items-center justify-center w-screen h-screen fixed top-0 left-0 ${zIndex} ${modalStyle} ${
        state === State.inactive && 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          'transition ease-in-out duration-300 flex flex-col min-w-[340px] min-h-[200px] bg-white rounded relative ' +
          windowStyle
        }
      >
        {header && typeof header !== 'string' ? (
          header
        ) : (
          <div className="text-xl p-4">{header}</div>
        )}
        <div className="flex-1 p-4">{children}</div>
        {footer}
        {closeButton && (
          <button
            onClick={close}
            className="absolute right-0 top 0 w-14 h-[60px] flex justify-center items-center"
          >
            <div className="text-slate-400 w-4 h-4">
              <CloseIcon />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
