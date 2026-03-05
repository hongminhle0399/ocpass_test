import React, { type PropsWithChildren } from "react";
import { DefaultError } from "./shared/ui/DefaultError";

interface AppErrorBoundariesState {
  hasError: boolean;
  error: unknown;
}

interface AppErrorBoundariesProps extends PropsWithChildren {
  fallback?: React.ReactNode;
}

export class AppErrorBoundaries extends React.Component<
  AppErrorBoundariesProps,
  AppErrorBoundariesState
> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      error,
    };
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? <DefaultError />;
    }
    return this.props.children;
  }
}
