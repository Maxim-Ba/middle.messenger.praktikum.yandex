export type Listener<T extends unknown[] = any[]> = (...args: T) => void;

export class EventBus<
  E extends string = string,
  M extends { [K in E]: unknown[] } = Record<E, any[]>
> {
  listeners: Record<string, any>;
  constructor() {
    this.listeners = {};
  }

  on(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: () => void) => listener !== callback
    );
  }

  emit(event: E, ...args: M[E]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function (listener: Listener<M[E]>) {
      listener(...args);
    });
  }
}
