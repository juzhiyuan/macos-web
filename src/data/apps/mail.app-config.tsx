import { PlaceholderApp } from '__/components/apps/Placeholder/Placeholder';
import { createAppConfig } from '__/helpers/create-app-config';

export const mailAppConfig = createAppConfig({
  title: 'Mail',
  resizable: true,
  Component: () => <PlaceholderApp />,
});
