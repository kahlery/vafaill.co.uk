interface TurnstileOptions {
  sitekey: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'flexible' | 'compact';
  callback?: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
}

interface Window {
  turnstile?: {
    render(container: HTMLElement, options: TurnstileOptions): string;
    reset(widgetId: string): void;
    remove(widgetId: string): void;
  };
}
