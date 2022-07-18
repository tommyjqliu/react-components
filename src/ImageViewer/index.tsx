import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Viewer from 'viewerjs'; // source: https://github.com/fengyuanchen/viewerjs
import 'viewerjs/dist/viewer.css';

export interface ImageViewerProps {
  children: React.ReactNode;
  className?: string;
  options?: Viewer.Options;
}

export interface ImageViewerRef {
  viewer: Viewer | null;
  dom: HTMLElement | null;
}

export default forwardRef<ImageViewerRef, ImageViewerProps>(
  ({ children, className, options }, ref) => {
    const domRef = useRef(null);
    const [viewer, setViewer] = useState<Viewer | null>(null);
    useImperativeHandle(
      ref,
      () => ({
        viewer: viewer,
        dom: domRef.current,
      }),
      [viewer, domRef.current],
    );
    useEffect(() => {
      domRef.current && setViewer(new Viewer(domRef.current, options));
      return () => {
        viewer && viewer.destroy?.();
      };
    }, []);

    return (
      <div className={className}>
        <div ref={domRef}>{children}</div>
      </div>
    );
  },
);
