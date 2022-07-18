## ImageViewer

基于 viewerjs 实现的图片查看器，采用 MIT 协议开源，源代码及文档地址：https://github.com/fengyuanchen/viewerjs

### 示例

```tsx
/**
 * title: 展示一些图片
 * desc: 点击开启viewer，包裹于组件内的img元素均会纳入viewer中
 */
import React from 'react';
import { ImageViewer } from 'dumi-start';

export default () => (
  <ImageViewer>
    <img className="w-[300px]" src="https://s1.328888.xyz/2022/04/27/8ahtq.jpg" alt="8ahtq.jpg" />
    <p>我是图片的注释</p>
    <div className="bg-lime-200 p-4">
      <div className="bg-emerald-200 p-4">
        <img
          className="w-[300px]"
          src="https://s1.328888.xyz/2022/04/27/8a5ii.jpg"
          alt="8a5ii.jpg"
        />
        我是嵌套结构中的图片
      </div>
    </div>
  </ImageViewer>
);
```

```tsx
/**
 * title: 使用inline模式查看多张图片
 * desc: 通过className属性设置容器大小，容器大小决定inline界面大小。通过options属性传入配置对象配置原viewer。
 */
import React from 'react';
import { ImageViewer } from 'dumi-start';

export default () => (
  <ImageViewer className=" h-[480px] overflow-hidden" options={{ inline: true }}>
    <div className="bg-black">
      <div className="invisible">
        <img src="https://s1.328888.xyz/2022/04/27/8ahtq.jpg" alt="8ahtq.jpg" />
        <img src="https://s1.328888.xyz/2022/04/27/8a5ii.jpg" alt="8a5ii.jpg" />
        <img src="https://s1.328888.xyz/2022/04/27/8azV0.jpg" alt="8azV0.jpg" />
        <img src="https://s1.328888.xyz/2022/04/27/8apgJ.jpg" alt="8apgJ.jpg" />
      </div>
    </div>
  </ImageViewer>
);
```

```tsx
/**
 * title: 在children中对图片进行排版
 * desc: 此例中children为一个flex容器
 */
import React from 'react';
import { ImageViewer } from 'dumi-start';

export default () => (
  <ImageViewer>
    <div className="flex flex-wrap">
      <img
        className="w-[200px] h-[200px]"
        src="https://s1.328888.xyz/2022/04/27/8ahtq.jpg"
        alt="8ahtq.jpg"
      />
      <img
        className="w-[200px] h-[200px]"
        src="https://s1.328888.xyz/2022/04/27/8a5ii.jpg"
        alt="8a5ii.jpg"
      />
      <img
        className="w-[200px] h-[200px]"
        src="https://s1.328888.xyz/2022/04/27/8azV0.jpg"
        alt="8azV0.jpg"
      />
      <img
        className="w-[200px] h-[200px]"
        src="https://s1.328888.xyz/2022/04/27/8apgJ.jpg"
        alt="8apgJ.jpg"
      />
    </div>
  </ImageViewer>
);
```

```tsx
/**
 * title: 通过ref上的viewer实例调用viewer方法
 * desc: 详细方法列表参照原文档
 */
import React, { useRef } from 'react';
import { ImageViewer, Button } from 'dumi-start';

export default () => {
  const viewerRef = useRef(null);
  const next = () => {
    viewerRef.current.viewer?.next?.();
  };
  const destroy = () => {
    viewerRef.current.viewer?.destroy?.();
  };

  return (
    <>
      <div className="m-2 flex">
        <div className="m-2">
          <Button label="next" onClick={next} />
        </div>
        <div className="m-2">
          <Button label="destroy" onClick={destroy} />
        </div>
      </div>
      <ImageViewer ref={viewerRef} className="mt-4" options={{ inline: true }}>
        <div className="flex flex-wrap">
          <img
            className="w-[200px] h-[200px]"
            src="https://s1.328888.xyz/2022/04/27/8ahtq.jpg"
            alt="8ahtq.jpg"
          />
          <img
            className="w-[200px] h-[200px]"
            src="https://s1.328888.xyz/2022/04/27/8a5ii.jpg"
            alt="8a5ii.jpg"
          />
          <img
            className="w-[200px] h-[200px]"
            src="https://s1.328888.xyz/2022/04/27/8azV0.jpg"
            alt="8azV0.jpg"
          />
          <img
            className="w-[200px] h-[200px]"
            src="https://s1.328888.xyz/2022/04/27/8apgJ.jpg"
            alt="8apgJ.jpg"
          />
        </div>
      </ImageViewer>
    </>
  );
};
```

```tsx
/**
 * title: 通过监听ref上的dom对象接收viewer事件
 * desc: 详细事件列表参照原文档
 */
import React, { useRef, useState, useEffect } from 'react';
import { ImageViewer, Button } from 'dumi-start';

export default () => {
  const viewerRef = useRef(null);
  const [log, setLog] = useState('');
  useEffect(() => {
    viewerRef.current.dom?.addEventListener('viewed', (e) => setLog(`viewed ${e.detail.index}`));
  }, [viewerRef.current]);
  return (
    <>
      <div>{log}</div>
      <ImageViewer ref={viewerRef} className="mt-4" options={{ inline: true }}>
        <div className="flex flex-wrap">
          <img
            className="w-[200px] h-[200px]"
            src="https://s1.328888.xyz/2022/04/27/8ahtq.jpg"
            alt="8ahtq.jpg"
          />
          <img
            className="w-[200px] h-[200px]"
            src="https://s1.328888.xyz/2022/04/27/8a5ii.jpg"
            alt="8a5ii.jpg"
          />
          <img
            className="w-[200px] h-[200px]"
            src="https://s1.328888.xyz/2022/04/27/8azV0.jpg"
            alt="8azV0.jpg"
          />
          <img
            className="w-[200px] h-[200px]"
            src="https://s1.328888.xyz/2022/04/27/8apgJ.jpg"
            alt="8apgJ.jpg"
          />
        </div>
      </ImageViewer>
    </>
  );
};
```
