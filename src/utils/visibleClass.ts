/* eslint-disable @typescript-eslint/no-useless-constructor */

// 监听元素是否可见抽象类
abstract class AVisibleObserve {
  protected targetDomId: string;
  protected rootDomId: string;
  protected onActiveChange: (active?: boolean) => void;
  constructor(
    targetDomId: string,
    rootDomId: string,
    onActiveChange: (active?: boolean) => void
  ) {
    this.targetDomId = targetDomId;
    this.rootDomId = rootDomId;
    this.onActiveChange = onActiveChange;
  }
  // 观察接口
  abstract observe(): void;
  // 取消观察接口
  abstract unObserve(): void;
}

// Intersection API实现
class IntersectionVisibleObserve extends AVisibleObserve {
  private intersectionObserver: IntersectionObserver;
  constructor(
    targetDomId: string,
    rootDomId: string,
    onActiveChange: (active?: boolean) => void
  ) {
    super(targetDomId, rootDomId, onActiveChange);
    this.intersectionObserver = new IntersectionObserver(
      (changes) => {
        if (changes[0].intersectionRatio > 0) {
          onActiveChange(true);
        } else {
          onActiveChange(false);
          // 因为虚拟dom更新导致实际dom更新，也会在此触发，判读dom丢失则重新监听
          if (!document.body.contains(changes[0].target)) {
            this.intersectionObserver.unobserve(changes[0].target);
            this.intersectionObserver.observe(
              document.getElementById(this.targetDomId) as HTMLElement
            );
          }
        }
      },
      { root: document.getElementById(rootDomId) }
    );
  }
  observe() {
    if (document.getElementById(this.targetDomId)) {
      this.intersectionObserver.observe(
        document.getElementById(this.targetDomId) as HTMLElement
      );
    }
  }
  unObserve() {
    this.intersectionObserver.disconnect();
  }
}
// SetInterval API实现
class SetIntervalVisibleObserve extends AVisibleObserve {
  private interval: NodeJS.Timeout | null = null;
  private checkInterval = 1000;
  constructor(
    targetDomId: string,
    rootDomId: string,
    onActiveChange: (active?: boolean) => void
  ) {
    super(targetDomId, rootDomId, onActiveChange);
  }
  private judgeActive() {
    const rootComponentDom = document.getElementById(this.rootDomId);
    if (!rootComponentDom) {
      return false;
    }
    const rootComponentRect = rootComponentDom.getBoundingClientRect();
    const componentDom = document.getElementById(this.targetDomId);
    if (!componentDom) {
      return false;
    }
    const componentRect = componentDom.getBoundingClientRect();
    // 长度和
    const sumOfWidth =
      Math.abs(rootComponentRect.left - rootComponentRect.right) +
      Math.abs(componentRect.left - componentRect.right);
    // 宽度和
    const sumOfHeight =
      Math.abs(rootComponentRect.bottom - rootComponentRect.top) +
      Math.abs(componentRect.bottom - componentRect.top);
    // 长度间距
    const widthGap = Math.abs(
      rootComponentRect.left +
        rootComponentRect.right -
        componentRect.bottom -
        componentRect.right
    );
    // 宽度间距
    const heightGap = Math.abs(
      rootComponentRect.bottom +
        rootComponentRect.top -
        componentRect.bottom -
        componentRect.top
    );
    if (widthGap <= sumOfWidth && heightGap <= sumOfHeight) {
      // 在内部需要渲染
      this.onActiveChange(true);
    } else {
      this.onActiveChange(false);
    }
  }
  observe() {
    this.judgeActive();
    this.interval = setInterval(this.judgeActive, this.checkInterval);
  }
  unObserve() {
    clearInterval(this.interval as NodeJS.Timeout);
  }
}

export class VisibleObserve extends AVisibleObserve {
  private actualVisibleObserve: AVisibleObserve | null = null;
  constructor(
    targetDomId: string,
    rootDomId: string,
    onActiveChange: (active?: boolean) => void
  ) {
    super(targetDomId, rootDomId, onActiveChange);
    if ("IntersectionObserver" in window) {
      this.actualVisibleObserve = new IntersectionVisibleObserve(
        targetDomId,
        rootDomId,
        onActiveChange
      );
    } else {
      this.actualVisibleObserve = new SetIntervalVisibleObserve(
        targetDomId,
        rootDomId,
        onActiveChange
      );
    }
  }
  observe() {
    this.actualVisibleObserve?.observe();
  }
  unObserve() {
    this.actualVisibleObserve?.unObserve();
  }
}
