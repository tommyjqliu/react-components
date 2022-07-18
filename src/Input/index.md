## Input

输入框插件

```tsx
/**
 * title: 基本使用
 * desc: 基本使用
 */
import React from 'react';
import { Input } from 'dumi-start';
function changeHandler(e) {
  console.log(e.target.value);
}
export default () => <Input placeholder="Please Input" onChange={changeHandler} />;
```

```tsx
/**
 * title: 字数显示
 * desc: 字数显示
 */
import React from 'react';
import { Input } from 'dumi-start';

export default () => <Input placeholder="Please Input" wordCount />;
```

```tsx
/**
 * title: 带限制的字数显示
 * desc: 字数显示
 */
import React from 'react';
import { Input } from 'dumi-start';

export default () => <Input placeholder="Please Input" wordCount maxLength={20} />;
```

```tsx
/**
 * title: 前后icon插入
 * desc: 也可以插入React组件
 */
import React from 'react';
import { Input, Button } from 'dumi-start';

export default () => (
  <Input placeholder="Please Input" prefix="😀" suffix={<Button label="按钮一个" />} />
);
```

```tsx
/**
 * title: 清除按钮
 * desc: 一键清除
 */
import React from 'react';
import { Input } from 'dumi-start';

export default () => <Input placeholder="Please Input" allowClear />;
```

```tsx
/**
 * title: 通过type参数使用原生type的其他类型
 * desc: 使用密码框
 */
import React from 'react';
import { Input } from 'dumi-start';

export default () => <Input type="password" placeholder="Please Input Password" />;
```

```tsx
/**
 * title: 可控组件
 * desc: 可控
 */
import React, { useState } from 'react';
import { Input } from 'dumi-start';

export default () => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    console.log('onchange', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Input placeholder="数据源" onChange={onChange} />
      <Input placeholder="受控组件" value={value} />
    </>
  );
};
```

```tsx
/**
 * title: 支持preventDefault
 * desc: 调用preventDefault阻止input默认onChange行为
 */
import React, { useState } from 'react';
import { Input } from 'dumi-start';

export default () => {
  const onChange = (e) => {
    console.log('onchange', e.target.value);
    e.preventDefault();
  };
  return (
    <>
      <Input placeholder="试试输入" onChange={onChange} />
    </>
  );
};
```

<API></API>
