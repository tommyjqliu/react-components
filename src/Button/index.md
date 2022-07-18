## Button

```tsx
/**
 * title: 简单的button
 * desc: 供其他地方使用
 */
import React from 'react';
import { Button } from 'dumi-start';
function clickHandler() {
  console.log('clicked');
}
export default () => <Button label="简单按钮" onClick={clickHandler} />;
```
