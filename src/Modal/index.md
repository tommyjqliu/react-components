## Modal

带有简单淡入淡出的模态对话框

```tsx
/**
 * title: 基本使用
 * desc: header，body，footer皆可自定义
 */
import React, { useState } from 'react';
import { Modal, Button } from 'dumi-start';

export default () => {
  const [showModal, setModal] = useState(false);
  const [log, setLog] = useState([]);
  const switchState = () => setModal(!showModal);

  function onCancel() {
    setLog([...log, 'Cancel']);
    switchState();
  }
  function onConfirm() {
    setLog([...log, 'Confirm']);
    switchState();
  }

  const footer = (
    <div className="flex justify-end p-4">
      <div className="ml-4">
        <Button label="Cancel" onClick={onCancel}></Button>
      </div>
      <div className="ml-4">
        <Button label="Comfirm" onClick={onConfirm}></Button>
      </div>
    </div>
  );
  return (
    <>
      <Button label="调起弹窗" onClick={switchState} />
      <Modal visible={showModal} setVisible={setModal} header="A Modal" footer={footer}>
        <p>This is a message</p>
      </Modal>
      {log.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </>
  );
};
```

```tsx
/**
 * title: 多种关闭方式
 * desc: 点击modal，点击关闭键，按下escape
 */
import React, { useState } from 'react';
import { Modal, Button } from 'dumi-start';

export default () => {
  const [showModal, setModal] = useState(false);
  const [log, setLog] = useState([]);
  const switchState = () => setModal(!showModal);

  function onCancel() {
    setLog([...log, 'Cancel']);
    switchState();
  }
  function onConfirm() {
    setLog([...log, 'Confirm']);
    switchState();
  }
  function onClose() {
    setLog([...log, 'Close']);
    switchState();
  }

  return (
    <>
      <Button label="调起弹窗" onClick={switchState} />
      <Modal
        visible={showModal}
        setVisible={setModal}
        header="A Modal"
        onClose={onClose}
        closeButton
        closeOnClickModal
        closeOnPressEscape
      >
        <p>This is a message</p>
      </Modal>
      {log.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </>
  );
};
```

<API></API>
