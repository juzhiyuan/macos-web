import { PlaceholderApp } from '__/components/apps/Placeholder/Placeholder';
import { createAppConfig } from '__/helpers/create-app-config';

export const facetimeAppConfig = createAppConfig({
  title: 'Facetime',
  resizable: true,
  Component: () => <PlaceholderApp />,
});
